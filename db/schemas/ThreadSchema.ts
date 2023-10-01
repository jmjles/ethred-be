import mongoose from 'mongoose'

export const ThreadSchema = new mongoose.Schema({
    op: { type: String, required: true },
    content: { type: String, required: true },
    replyTo: String,
    media: [String],
    deleted: Boolean,
    parent: Boolean,
    date: Date,
})
