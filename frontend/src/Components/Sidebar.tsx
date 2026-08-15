import {
    Archive,
    ChevronLeft,
    ChevronRight,
    Cloud,
    Database,
    FileText,
    HardDrive,
    LayoutDashboard,
    LogOut,
    Settings,
} from "lucide-react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

interface SidebarProps {
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {

    const menu = [
        {
            name: "Overview",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Files",
            path: "/dashboard/files",
            icon: FileText,
        },
        {
            name: "Storage Nodes",
            path: "/dashboard/nodes",
            icon: Database,
        },
        {
            name: "Replication",
            path: "/dashboard/replication",
            icon: Archive,
        },
        {
            name: "Backups",
            path: "/dashboard/backups",
            icon: Cloud,
        },
    ]

    return (
        <aside
            className={`
                fixed left-0 top-0 z-50 flex h-screen flex-col
                border-r border-white/[0.07] bg-[#080808]
                transition-all duration-300
                ${collapsed ? "w-[72px]" : "w-[240px]"}
            `}
        >

            <div
                className={`
                    flex h-[72px] items-center border-b border-white/[0.07]
                    ${collapsed ? "justify-center" : "px-5"}
                `}
            >

                <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-black">
                        <HardDrive size={18} />
                    </div>

                    {!collapsed && (
                        <div>
                            <p className="text-sm font-semibold">
                                ShardFS
                            </p>

                            <p className="text-[9px] uppercase tracking-widest text-white/25">
                                Distributed Storage
                            </p>
                        </div>
                    )}

                </div>

            </div>

            <nav className="flex-1 space-y-1 px-3 py-5">

                {menu.map((item) => {

                    const Icon = item.icon

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === "/dashboard"}
                            className={({ isActive }) => `
                                flex items-center gap-3 rounded-xl px-3 py-2.5
                                text-sm transition
                                ${collapsed ? "justify-center" : ""}
                                ${
                                    isActive
                                        ? "bg-white text-black"
                                        : "text-white/40 hover:bg-white/[0.05] hover:text-white"
                                }
                            `}
                        >

                            <Icon
                                size={18}
                                className="shrink-0"
                            />

                            {!collapsed && (
                                <span>
                                    {item.name}
                                </span>
                            )}

                        </NavLink>
                    )

                })}

            </nav>

            <div className="space-y-1 border-t border-white/[0.07] p-3">

                <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) => `
                        flex items-center gap-3 rounded-xl px-3 py-2.5
                        text-sm transition
                        ${collapsed ? "justify-center" : ""}
                        ${
                            isActive
                                ? "bg-white text-black"
                                : "text-white/40 hover:bg-white/[0.05] hover:text-white"
                        }
                    `}
                >
                    <Settings size={18} />

                    {!collapsed && (
                        <span>Settings</span>
                    )}
                </NavLink>

                <button
                    onClick={() => {
                        localStorage.removeItem("token")
                        window.location.href = "/login"
                    }}
                    className={`
                        flex w-full items-center gap-3 rounded-xl
                        px-3 py-2.5 text-sm text-white/40 transition
                        hover:bg-red-500/10 hover:text-red-400
                        ${collapsed ? "justify-center" : ""}
                    `}
                >
                    <LogOut size={18} />

                    {!collapsed && (
                        <span>Logout</span>
                    )}
                </button>

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={`
                        mt-2 flex w-full items-center gap-3 rounded-xl
                        px-3 py-2.5 text-sm text-white/25 transition
                        hover:bg-white/[0.05] hover:text-white
                        ${collapsed ? "justify-center" : ""}
                    `}
                >

                    {collapsed ? (
                        <ChevronRight size={18} />
                    ) : (
                        <>
                            <ChevronLeft size={18} />
                            <span>Collapse</span>
                        </>
                    )}

                </button>

            </div>

        </aside>
    )
}

export default Sidebar