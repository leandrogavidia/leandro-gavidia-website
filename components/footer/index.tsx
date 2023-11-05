import Link from "next/link"
import Image from "next/image"
import { itemList } from "./item-list"

export function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full flex flex-col justify-center items-center gap-y-5 sm:gap-y-9">
                <h3 className="text-2xl font-medium sm:text-3xl">Social media</h3>
                <ul className="flex items-center justify-center gap-x-4 sm:gap-x-6">
                    {
                        itemList.map(({ icon, name, url }) => (
                            <li key={url} className="w-full h-auto">
                                <Link href={url} target="_blank">
                                    <Image 
                                        src={icon}
                                        alt={`${name} logo`}
                                        title={`${name} logo`}
                                        width={20}
                                        height={20}
                                        className="sm:w-6 sm:h-6"
                                    />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <p className="text-center text-sm font-light sm:text-base">Leandro Gavidia Santamaria © {new Date().getFullYear()}. All rights reserved.</p>
            </div>
        </footer>
    )
}