import { FileText, Plus, Search } from "lucide-react"
import { useState } from "react"

const Files = () => {

    const [search, setSearch] = useState("")

    const files = [
        {
            name: "Resume.pdf",
            size: "2.4 MB",
            modified: "2 hours ago",
        },
        {
            name: "CloudStoreX.zip",
            size: "184 MB",
            modified: "Yesterday",
        },
        {
            name: "Architecture.png",
            size: "5.8 MB",
            modified: "Yesterday",
        },
        {
            name: "backend.ts",
            size: "18 KB",
            modified: "2 days ago",
        },
    ]

    const filteredFiles = files.filter((file) =>
        file.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-semibold">
                        My Files
                    </h1>

                    <p className="mt-2 text-sm text-white/30">
                        Manage your stored files.
                    </p>
                </div>

                <button className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black">
                    <Plus size={16} />
                    Upload
                </button>

            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4">

                <Search
                    size={16}
                    className="text-white/25"
                />

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search files..."
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/20"
                />

            </div>

            <div className="overflow-hidden rounded-2xl border border-white/[0.07]">

                {filteredFiles.map((file) => (

                    <div
                        key={file.name}
                        className="flex items-center gap-4 border-b border-white/[0.06] px-5 py-4 last:border-0 hover:bg-white/[0.025]"
                    >

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05]">
                            <FileText size={17} />
                        </div>

                        <div className="flex-1">

                            <p className="text-sm">
                                {file.name}
                            </p>

                            <p className="mt-1 text-xs text-white/25">
                                {file.size} · {file.modified}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Files