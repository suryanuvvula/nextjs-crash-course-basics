"use client";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react"

export const Counter = () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const [counter, setCounter] = useState(0);

    if(!isLoaded || !userId) return null;
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
            <p>{counter}</p>
            <p>sdgsd</p>
        </div>
    )
}