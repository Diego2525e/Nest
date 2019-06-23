import { Document } from 'mongoose';

export interface Book extends Document {
    // readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly author: string;
}