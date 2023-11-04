import Image from "next/image"
import Link from "next/link"
import { itemList } from "./item-list"

export function Header() {
    return (
        <header className="w-full flex justify-between items-center gap-x-5">
            <Link href="/" className="cursor-pointer">
                <Image
                    src="/images/logo/phone-version.svg"
                    alt="Leandro Gavidia's Logo"
                    title="Leandro Gavidia's Logo"
                    width={475}
                    height={852}
                    className="w-8 h-auto"
                />
            </Link>
            <nav>
                <ul className="flex justify-center items-center gap-x-5 text-lg font-medium">
                    {
                        itemList.map((item) => 
                            <li key={item.path}>
                                <Link href={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}