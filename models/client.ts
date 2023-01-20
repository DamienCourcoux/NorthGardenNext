import { Schema, models, model } from 'mongoose';

const clientSchema = new Schema({
    lastname: String,
    firstname: String,
    email: String,
    telephone: Number,
    city: String,
    zipCode: Number,
    desiredService: String,
    details: String,
})

const Clients = models.client || model('client', clientSchema);

export default Clients;