import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { HardDrive } from "lucide-react"
import api from "../api/axios"

export default function ProtectedRoute() {
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token")

            if (!token) {
                setLoading(false)
                return
            }

            try {
                await api.get("/getMe", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setIsAuthenticated(true)
            } catch {
                localStorage.removeItem("token")
                setIsAuthenticated(false)
            } finally {
                setLoading(false)
            }
        }

        checkAuth()
    }, [])

    if (loading) {
        return (
            <div className="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center overflow-hidden bg-[#050505] text-white">

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />
                </div>

                <div className="relative flex flex-col items-center">

                    <div className="relative flex h-32 w-32 items-center justify-center">

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 rounded-full border border-dashed border-white/10"
                        />

                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-3 rounded-full border border-white/[0.08]"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.12, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute h-16 w-16 rounded-2xl bg-white/[0.06] blur-xl"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.04, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white text-black shadow-2xl shadow-white/[0.08]"
                        >
                            <HardDrive
                                size={23}
                                strokeWidth={2.3}
                            />
                        </motion.div>

                        {[0, 90, 180, 270].map((rotation) => (
                            <motion.span
                                key={rotation}
                                animate={{
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: rotation / 360
                                }}
                                style={{
                                    transform: `rotate(${rotation}deg)`
                                }}
                                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2"
                            >
                                <span className="absolute -top-[60px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                            </motion.span>
                        ))}

                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 text-center"
                    >
                        <h2 className="text-sm font-medium tracking-wide">
                            ShardFS
                        </h2>

                        <div className="mt-3 flex items-center justify-center gap-1.5">
                            {[0, 1, 2].map((dot) => (
                                <motion.span
                                    key={dot}
                                    animate={{
                                        opacity: [0.2, 1, 0.2],
                                        scale: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        delay: dot * 0.2
                                    }}
                                    className="h-1 w-1 rounded-full bg-white"
                                />
                            ))}
                        </div>

                        <motion.p
                            animate={{
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                            className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/30"
                        >
                            Verifying storage access
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}