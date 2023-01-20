import { Schema, models, model } from 'mongoose';

const adminSchema = new Schema({
    pseudo: String,
    email: {type: String, unique: true},
    password: String
})

const Admins = models.admin || model('admin', adminSchema);

export default Admins;