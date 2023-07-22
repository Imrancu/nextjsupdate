"use client"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleLogin = async () => {}
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input 
            className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            type="text"
            placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input 
            className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            type="text"
            placeholder="Password"
            />
            <button
            onClick={handleLogin}
            className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
            <Link href="/signup">Visit Sign Up Page Here</Link>
        </div>
    )
}