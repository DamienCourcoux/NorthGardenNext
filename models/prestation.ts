import mongoose, { Schema, models, model } from 'mongoose';

const prestationSchema = new Schema({
    name: String,
    description: String,
    mowing: String,
    hedgeTrimmer: String,
    bushPruning: String,
    weeding: String,
    brushCutter: String,
    planting: String,
    tarpaulin: String,
    mulching: String,
    planters: String,
    aromaticSeasonalFlower: String,
    soil: String,
    fertilizer: String,
    composition: String,
    brushing: String,
    washing: String,
    photo: String,
    blower: String,
    pickup: String,
    gifts: String,
    example: String,
    price: Number,
    packsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packs' }
})

const Prestations = models.prestation || model('prestation', prestationSchema);

export default Prestations;