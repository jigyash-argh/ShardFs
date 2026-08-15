import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Sidebar"

const DashboardLayout = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="min-h-screen bg-[#050505] text-white">

            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />

            <main
                className={`
                    min-h-screen transition-all duration-300
                    ${collapsed ? "ml-[72px]" : "ml-[240px]"}
                `}
            >

                <header className="h-[72px] border-b border-white/[0.07] bg-[#050505] px-8 flex items-center justify-between">

                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                            ShardFS
                        </p>

                        <p className="mt-1 text-sm font-medium">
                            Distributed Storage
                        </p>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.08] text-xs">
                        U
                    </div>

                </header>

                <div className="p-8">

                    <Outlet />

                </div>

            </main>

        </div>
    )
}

export default DashboardLayout