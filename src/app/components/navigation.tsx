"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathName = usePathname();
    return (
        <nav className="flex justify-center items-center p-4">
            <Link href="/" className={pathName === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}>Home</Link>
            <Link href="/products/1" className={pathName.startsWith("/products") ? "font-bold mr-4" : "text-blue-500 mr-4"}>Products</Link>
            <Link href="/about" className={pathName === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>About Us</Link>
            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    )
}