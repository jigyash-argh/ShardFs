import express from "express"
import fs from "fs"
import path from "path"
import crypto from "crypto"
import { fileURLToPath } from "url"

const app = express()

const PORT = process.env.NODE_PORT || process.env.PORT || 5001
const NODE_ID = process.env.NODE_ID || "node-1"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const storagePath = path.join(
    __dirname,
    NODE_ID,
    "files"
)

if (!fs.existsSync(storagePath)) {
    fs.mkdirSync(storagePath, {
        recursive: true
    })
}

app.get("/health", (req, res) => {

    return res.status(200).json({
        nodeId: NODE_ID,
        status: "healthy"
    })

})

app.post("/upload", (req, res) => {

    const fileId = crypto
        .randomBytes(16)
        .toString("hex")

    const filePath = path.join(
        storagePath,
        fileId
    )

    const writeStream = fs.createWriteStream(filePath)

    req.pipe(writeStream)

    writeStream.on("finish", () => {

        return res.status(201).json({
            message: "file stored successfully",
            nodeId: NODE_ID,
            fileId
        })

    })

    writeStream.on("error", (error) => {

        console.error("Storage error:", error)

        return res.status(500).json({
            message: "failed to store file"
        })

    })

})

app.get("/files/:fileId", (req, res) => {

    const filePath = path.join(
        storagePath,
        req.params.fileId
    )

    if (!fs.existsSync(filePath)) {

        return res.status(404).json({
            message: "file not found"
        })

    }

    return res.sendFile(filePath)

})

app.delete("/files/:fileId", (req, res) => {

    const filePath = path.join(
        storagePath,
        req.params.fileId
    )

    if (!fs.existsSync(filePath)) {

        return res.status(404).json({
            message: "file not found"
        })

    }

    fs.unlinkSync(filePath)

    return res.status(200).json({
        message: "file deleted successfully"
    })

})

app.listen(PORT, () => {

    console.log(
        `${NODE_ID} storage node running on port ${PORT}`
    )

})