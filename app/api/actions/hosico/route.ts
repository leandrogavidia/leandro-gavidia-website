import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS, BLOCKCHAIN_IDS } from "@solana/actions";

const blockchain = BLOCKCHAIN_IDS.mainnet;

const SOL_MINT = "So11111111111111111111111111111111111111112"
const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
const HOSICO_MINT = "9wK8yN6iz1ie5kEJkvZCTxyN1x5sTdNfx8yeMY8Ebonk"

const SOL_DECIMALS = 10 ** 9;
const USDC_DECIMALS = 10 ** 6;

const COIN_GECKO_API = "https://api.coingecko.com/api/v3"
const JUP_SWAP_API = "https://lite-api.jup.ag/swap/v1"

const headers = {
    ...ACTIONS_CORS_HEADERS,
    "x-blockchain-ids": blockchain,
    "x-action-version": "2.4",
};

export const OPTIONS = async () => {
    return new Response(null, { headers });
};

export const GET = async (req: Request) => {
    const res = await (await fetch(`${COIN_GECKO_API}/simple/price?ids=hosico-cat&vs_currencies=usd`)).json()

    const hosicoPrice: number = res["hosico-cat"]?.usd
    const hosicoMarketCap: number = res["hosico-cat"]?.usd * 1000

    const coinInfo = hosicoPrice ? "**Price:** " + hosicoPrice?.toFixed(3) + "$\n\n" + "**Market Cap:** " + hosicoMarketCap?.toFixed(1) + "M\n\n" : ""

    const response: ActionGetResponse = {
        type: "action",
        icon: "https://sapphire-working-koi-276.mypinata.cloud/ipfs/bafkreihev5l3pt2xzyvch2cco5qhimguamdztns2pgpi67tj7punzo34ku",
        label: "Buy $Hosico",
        title: "Buy $Hosico",
        description: coinInfo + "Out of the trenches, the star child was born. \n\n **Shoot for the stars** ✨",
        links: {
            actions: [
                {
                    type: "transaction",
                    label: "Buy $Hosico",
                    href: `/api/actions/hosico?token={token}&amount={amount}`,
                    parameters: [
                        {
                            type: "radio",
                            label: "Select token",
                            name: "token",
                            required: true,
                            options: [
                                { label: "SOL", value: "sol", selected: true },
                                { label: "USDC", value: "usdc" },
                            ],
                        },
                        {
                            type: "number",
                            label: "Amount",
                            name: "amount",
                            required: true,
                            min: 0.001
                        },
                    ],
                },
            ],
        },
    };

    return new Response(JSON.stringify(response), {
        status: 200,
        headers,
    });
};

export const POST = async (req: Request) => {
    try {
        const url = new URL(req.url);

        const token = url.searchParams.get("token");
        const amount = Number(url.searchParams.get("amount"));

        const inputMint = token === "sol" ? SOL_MINT : USDC_MINT;
        const apiAmount = token === "sol" ? amount * SOL_DECIMALS : amount * USDC_DECIMALS;
        const slippageBps = 50;
        const restrictIntermediateTokens = true;

        const request: ActionPostRequest = await req.json();
        const payer = request.account;

        const quoteResponse = await (
            await fetch(
                `${JUP_SWAP_API}/quote?inputMint=${inputMint}&outputMint=${HOSICO_MINT}&amount=${apiAmount}&slippageBps=${slippageBps}&restrictIntermediateTokens=${restrictIntermediateTokens}`
            )
        ).json();

        const swapResponse = await (
            await fetch(`${JUP_SWAP_API}/swap`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quoteResponse,
                    userPublicKey: payer,

                    dynamicComputeUnitLimit: true,
                    dynamicSlippage: true,
                    prioritizationFeeLamports: {
                        priorityLevelWithMaxLamports: {
                            maxLamports: 1000000,
                            priorityLevel: "veryHigh"
                        }
                    }
                })
            })
        ).json();

        const transactionBase64 = swapResponse.swapTransaction

        const response: ActionPostResponse = {
            type: "transaction",
            transaction: transactionBase64,
        };

        return Response.json(response, { status: 200, headers });
    } catch (error) {
        console.error("Error processing request:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers,
        });
    }
};