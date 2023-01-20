import mongoose, { Schema, models, model } from 'mongoose';

const packSchema = new Schema({
    name: String,
    prestations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prestations' }],
    formules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Formules' }]
})

const Packs = models.pack || model('pack', packSchema);

export default Packs;