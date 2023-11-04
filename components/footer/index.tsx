import Link from "next/link"
import Image from "next/image"
import { itemList } from "./item-list"

export function Footer() {
    return (
        <footer>
            <div>
                <h3>Social media</h3>
                <ul>
                    {
                        itemList.map(({ icon, name, url }) => (
                            <li key={url}>
                                <Link href={url} target="_blank">
                                    <Image 
                                        src={icon}
                                        alt={`${name} logo`}
                                        title={`${name} logo`}
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <hr />
                <p>Leandro Gavidia Santamaria © {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    )
}