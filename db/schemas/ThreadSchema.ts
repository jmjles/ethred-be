import mongoose from 'mongoose'

export const threadSchema = new mongoose.Schema({
    user: { type: String, required: true },
    content: { type: String, required: true },
    replyTo: String,
    media: [String],
    deleted: { type: Boolean, default: false },
    parent: Boolean,
    date: Date,
    edited: { type: Boolean, default: false },
})
