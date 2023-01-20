import { Schema, models, model } from 'mongoose';

const informationSchema = new Schema({
    information: String
})

const Informations = models.information || model('information', informationSchema);

export default Informations;