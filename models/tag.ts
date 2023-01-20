import mongoose, { Schema, models, model } from 'mongoose';

const tagSchema = new Schema({
    name: String,
    pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pictures' }]
})

const Tags = models.tag || model('tag', tagSchema);

export default Tags;