import {
    Database,
    FileText,
    HardDrive,
    ShieldCheck,
} from "lucide-react"

const Overview = () => {

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-2xl font-semibold">
                    Overview
                </h1>

                <p className="mt-2 text-sm text-white/30">
                    Monitor your distributed storage system.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                    <HardDrive
                        size={20}
                        className="text-white/40"
                    />

                    <p className="mt-5 text-xs text-white/30">
                        Storage Used
                    </p>

                    <p className="mt-2 text-2xl font-semibold">
                        68.4 GB
                    </p>

                    <p className="mt-1 text-xs text-white/20">
                        of 100 GB
                    </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                    <FileText
                        size={20}
                        className="text-white/40"
                    />

                    <p className="mt-5 text-xs text-white/30">
                        Total Files
                    </p>

                    <p className="mt-2 text-2xl font-semibold">
                        2,994
                    </p>

                    <p className="mt-1 text-xs text-emerald-400/60">
                        +18 this week
                    </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                    <Database
                        size={20}
                        className="text-white/40"
                    />

                    <p className="mt-5 text-xs text-white/30">
                        Storage Nodes
                    </p>

                    <p className="mt-2 text-2xl font-semibold">
                        3 / 3
                    </p>

                    <p className="mt-1 text-xs text-emerald-400/60">
                        All systems operational
                    </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                    <ShieldCheck
                        size={20}
                        className="text-white/40"
                    />

                    <p className="mt-5 text-xs text-white/30">
                        Replication
                    </p>

                    <p className="mt-2 text-2xl font-semibold">
                        2×
                    </p>

                    <p className="mt-1 text-xs text-emerald-400/60">
                        Healthy
                    </p>

                </div>

            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">

                    <h2 className="text-sm font-medium">
                        Storage Distribution
                    </h2>

                    <div className="mt-8 space-y-5">

                        {[
                            ["Node 01", 68],
                            ["Node 02", 42],
                            ["Node 03", 31],
                        ].map(([name, usage]) => (

                            <div key={name as string}>

                                <div className="mb-2 flex justify-between text-xs">

                                    <span className="text-white/40">
                                        {name}
                                    </span>

                                    <span className="text-white/30">
                                        {usage}%
                                    </span>

                                </div>

                                <div className="h-2 rounded-full bg-white/[0.06]">

                                    <div
                                        className="h-full rounded-full bg-white/60"
                                        style={{
                                            width: `${usage}%`
                                        }}
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">

                    <h2 className="text-sm font-medium">
                        Cluster Status
                    </h2>

                    <div className="mt-6 space-y-4">

                        {[
                            "Node 01",
                            "Node 02",
                            "Node 03",
                        ].map((node) => (

                            <div
                                key={node}
                                className="flex items-center justify-between"
                            >

                                <div className="flex items-center gap-3">

                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                    <span className="text-sm text-white/60">
                                        {node}
                                    </span>

                                </div>

                                <span className="text-xs text-emerald-400/60">
                                    Online
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Overview