import mongoose, { Schema, models, model } from 'mongoose';

const formuleSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    packsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packs' }
})

const Formules = models.formule || model('formule', formuleSchema);

export default Formules;