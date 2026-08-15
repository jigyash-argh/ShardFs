import dotenv from 'dotenv'

// Load .env file into process.env
dotenv.config()

// Required environment variables
const required = ["MONGO_URI", "JWT_SECRET"]
const missing = required.filter((k) => !process.env[k])
if (missing.length) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`)
}

const config = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: Number(process.env.PORT) || 3000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    // optional node URLs (used by the app if present)
    NODE_1_URL: process.env.NODE_1_URL || null,
    NODE_2_URL: process.env.NODE_2_URL || null,
    NODE_3_URL: process.env.NODE_3_URL || null,
    // optional CORS origin
    CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
}

export default config