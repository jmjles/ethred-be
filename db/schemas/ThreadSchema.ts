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
    shares: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    upVotes: { type: [String], default: [], unique: true },
    downVotes: { type: [String], default: [], unique: true },
})
