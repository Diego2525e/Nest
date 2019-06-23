import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    // id: String,
    name: String,
    description: String,
    author: String
});