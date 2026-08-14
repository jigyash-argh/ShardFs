import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, HardDrive, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/authServices"
export default function Login() {
    const navigate = useNavigate()
    const [Email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const data =await loginUser(Email,password)
            localStorage.setItem("token",data.access_token)
            navigate("dashboard")
        }catch(error){
            console.log("Invalid email or password");
        }
    }
    return (
        <div className="h-screen overflow-hidden bg-[#050505] text-white">

            <div className="pointer-events-none fixed inset-0">
                <div className="absolute left-1/2 top-[-180px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]" />
                <div className="absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[100px]" />
            </div>

            <button
                onClick={() => navigate("/")}
                className="group absolute left-6 top-6 z-20 flex items-center gap-2 text-sm text-white/40 transition-all duration-300 hover:text-white"
            >
                <ArrowLeft
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back
            </button>

            <div className="relative z-10 flex h-full items-center justify-center px-5">

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full max-w-[400px]"
                >

                    <div className="mb-6 text-center">

                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: -2,
                            }}
                            transition={{ duration: 0.2 }}
                            className="mx-auto flex h-11 w-11 cursor-default items-center justify-center rounded-xl border border-white/15 bg-white text-black shadow-lg shadow-white/[0.04]"
                        >
                            <HardDrive size={19} strokeWidth={2.5} />
                        </motion.div>

                        <h1 className="mt-5 text-2xl font-semibold tracking-tight">
                            Welcome back
                        </h1>

                        <p className="mt-2 text-sm text-white/35">
                            Sign in to your ShardFS account
                        </p>

                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.045]">

                        <form className="space-y-5">

                            <div>
                                <label className="mb-2 block text-xs font-medium text-white/50">
                                    Email
                                </label>

                                <div className="group relative">
                                    <Mail
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 transition-colors duration-300 group-focus-within:text-white/60"
                                    />

                                    <input
                                        value={Email}
                                        onChange={(e)=>{
                                            setEmail(e.target.value);
                                        
                                        }}
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 hover:bg-white/[0.025] focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="text-xs font-medium text-white/50">
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs text-white/30 transition-colors duration-300 hover:text-white"
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <div className="group relative">
                                    <Lock
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 transition-colors duration-300 group-focus-within:text-white/60"
                                    />

                                    <input
                                        value={password}
                                        onChange={(e)=>{
                                            setpassword(e.target.value)
                                        }}
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/20 hover:bg-white/[0.025] focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(255,255,255,0.03)]"
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSubmit}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                            >
                                Sign in

                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </motion.button>

                        </form>

                        <div className="mt-6 text-center">
                            <span className="text-xs text-white/30">
                                Don't have an account?{" "}
                            </span>

                            <button
                                onClick={() => navigate("/register")}
                                className="text-xs text-white/70 transition-colors duration-300 hover:text-white hover:underline"
                            >
                                Create account
                            </button>
                        </div>

                    </div>

                    <p className="mt-5 text-center text-[10px] uppercase tracking-[0.18em] text-white/15">
                        Secure distributed storage
                    </p>

                </motion.div>

            </div>
        </div>
    )
}