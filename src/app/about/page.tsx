"use client";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About Us</h1>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push('/')}>Go Home</button>
        </div>
    )
}

export default About;