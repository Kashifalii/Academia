"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [openNav, setOpenNav] = useState(false)
    function toggleNavbar() {
        setOpenNav(!openNav)
    }

    return (
        <nav className="bg-white shadow-md py-2 relative">
            <div className="container mx-auto px-4 bg-amber-100">
                <button className="bg-amber-200 rounded p-5" onClick={toggleNavbar}>Click</button>
                <Link href="/about" className="">cdcdcdc</Link>
                <div className={`box w-full h-[200px] bg-amber-300 absolute bottom-[-200px] ${openNav ? "block" : "hidden"}`}></div>
            </div>
        </nav>
    );
}
