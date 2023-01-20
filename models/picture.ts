import mongoose, { Schema, models, model } from 'mongoose';

const pictureSchema = new Schema({
    picture: String,
    name: String,
    publicId: String,
    tagsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tags' }
})

const Pictures = models.picture || model('picture', pictureSchema);

export default Pictures;