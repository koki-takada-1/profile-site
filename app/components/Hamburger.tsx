"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    //初期値はfalseハンバーガー非表示
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
        // 真偽反転　ハンバーガー表示
        setOpen(!isOpen);
    };

    const handleMenuClose = () => {
        setOpen(false);
    };

    return (
        <header className="py-6 px-4 flex justify-between items-center bg-white text-black font-sans border-b border-gray-200 shadow-md sticky top-0">
            <Link className="z-50" href="/" onClick={handleMenuClose}>
                <span className="font-semibold text-xl ml-3 hover:text-gray-300 duration-300">Koki Takada</span>
                {/* <Image src="/github-mark.png" width={30} height={30} alt="Tailwind CSS" /> */}
            </Link>

            <nav
                className={
                    isOpen
                        ? "z-40 bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
                        : "fixed right-[-100%] md:right-4"
                }
            >
                <ul
                    className={
                        isOpen
                            ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
                            : "pt-1 block md:flex md:gap-8" //block
                    }
                >
                    <li>
                        <Link onClick={handleMenuClose} href="/#Top" className="hover:text-gray-300 duration-300">
                            Top
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="/#Research" className="hover:text-gray-300 duration-300">
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="/#Learning Posts" className="hover:text-gray-300 duration-300">
                            Learning Posts
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="/#Project" className="hover:text-gray-300 duration-300">
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="https://github.com/koki-takada-1">
                            <Image src="/github-mark.png" width={30} height={30} alt="Tailwind CSS" />
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
                <span
                    className={
                        isOpen
                            ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
                            : "block w-8 h-0.5 bg-gray-600 duration-300"
                    }
                />
                <span
                    className={
                        isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
                    }
                />
                <span
                    className={
                        isOpen
                            ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
                            : "block w-8 h-0.5 bg-gray-600 duration-300"
                    }
                />
            </button>
        </header>
    );
}

