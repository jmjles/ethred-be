import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    cryptoAddress: { type: String, required: true },
    id: { type: String, required: true },
    displayName: { type: String, required: true },
    avatar: String,
    border: String,
    active: { type: Boolean, default: true },
    banned: { type: Boolean, default: false },
    joined: Date,
})
