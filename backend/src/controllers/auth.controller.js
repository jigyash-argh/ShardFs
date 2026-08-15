import userModel from "../models/user.model.js"
import crypto from 'crypto'
import jwt from "jsonwebtoken"
import config from "../config/config.js"

export async function register(req, res) {
    try {
        const { username, email, password } = req.body

        // basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "username, email and password are required" })
        }

        const isAlreadyRegistered = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        })

        if (isAlreadyRegistered) {
            return res.status(400).json({
                message: "username or email already exists"
            })
        }

        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "1d" })

        return res.status(201).json({
            message: "user registered successfully",
            user: {
                username: user.username,
                email: user.email
            },
            token
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "internal server error" })
    }
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "invalid email or password" })
        }

        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex")
        if (hashedPassword !== user.password) {
            return res.status(401).json({ message: "invalid email or password" })
        }

        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "1d" })

        return res.status(200).json({
            message: "login successful",
            user: {
                username: user.username,
                email: user.email
            },
            token
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "internal server error" })
    }
}
export async function getMe(req, res) {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader?.split(" ")[1]
        if (!token) {
            return res.status(401).json({ message: "token not found" })
        }

        let decoded
        try {
            decoded = jwt.verify(token, config.JWT_SECRET)
        } catch (err) {
            return res.status(401).json({ message: "invalid or expired token" })
        }

        const userId = decoded?.id
        if (!userId) {
            return res.status(400).json({ message: "invalid token payload" })
        }

        const user = await userModel.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        return res.status(200).json({
            message: "user fetched successfully",
            user: {
                username: user.username,
                email: user.email
            }
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "internal server error" })
    }
}