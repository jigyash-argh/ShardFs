import { useEffect, useState } from "react"
import  api  from "../api/axios"

const DashboardLayout = () => {
    const [user, setUser] = useState<any>(null)
    const [error, setError] = useState("")

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = localStorage.getItem("token")

                const response = await api.get("/getMe", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                console.log("GET ME RESPONSE:", response.data)

                setUser(response.data.user)
            } catch (err) {
                console.log("GET ME ERROR:", err)
                setError("Failed to fetch user")
            }
        }

        getUser()
    }, [])

    return (
        <div className="min-h-screen bg-[#050505] text-white p-10">
            <h1 className="text-3xl font-semibold">
                Dashboard
            </h1>

            {error && (
                <p className="mt-5 text-red-400">
                    {error}
                </p>
            )}

            {user && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                    <p className="text-white/40 text-sm">
                        Logged in as
                    </p>

                    <p className="mt-2 text-xl">
                        {user.username}
                    </p>

                    <p className="mt-1 text-white/40">
                        {user.email}
                    </p>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout