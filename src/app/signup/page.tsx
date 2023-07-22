"use client"
import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleSignUp = async () => {}
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Sign Up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input 
            className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            type="text"
            placeholder="Username"
            />
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
            onClick={handleSignUp}
            className="p-2 border border-gray-400 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Sign Up</button>
            <Link href="/login">Visit Login Page Here</Link>
        </div>
    )
}