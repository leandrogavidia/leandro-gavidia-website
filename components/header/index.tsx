import Image from "next/image"
import Link from "next/link"

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
            <nav className="flex justify-end items-center gap-x-5 text-lg font-medium">
                <Link 
                    href="/documents/cv-leandro-gavidia.pdf"
                    className=" border-[2px] border-white rounded-full px-5 py-2"
                >
                    Download CV
                </Link>
            </nav>
        </header>
    )
}