import mongoose from 'mongoose'

const user = new mongoose.Schema({
    id: { type: String, required: true },
    displayName: { type: String, required: true },
    since: { type: Date, required: true },
})

export const userSchema = new mongoose.Schema({
    cryptoAddress: { type: String, required: true },
    id: { type: String, required: true },
    displayName: { type: String, required: true },
    avatar: String,
    border: String,
    active: { type: Boolean, default: true },
    banned: { type: Boolean, default: false },
    joined: Date,
    lastOnline: Date,
    ipAddresses: [String],
    followers: [user],
    following: [user],
    blocked: [user],
})
