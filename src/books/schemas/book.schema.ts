import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    // id: String,
    title: String,
    description: String,
    author: String
});