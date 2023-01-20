import { NextApiRequest, NextApiResponse } from "next";
import Admins from "../models/admin";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const tokenSecret: string = process.env.TOKEN_SECRET as string;

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/admins
export async function getAdmins({ req, res }: Props) {
    try {
        const admin = await Admins.find({});
        if (!admin) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/admins/signup (signUp)
export async function postAdminSignUp({ req, res }: Props) {
    try {
        const salt = await bcrypt.genSalt(10);
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const adminToCreate = {
            name: formData.name,
            email: formData.email,
            password: await bcrypt.hash(formData.password, salt)
        }
        const admin = await Admins.create(adminToCreate);
        return res.status(200).json(admin);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// post: http://localhost:3000/api/admins/signin (signIn)
export async function postAdminSignIn({ req, res }: Props) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const admin = await Admins.findOne({ email: formData.email });
        if (!admin) return res.status(404).json({ error: "L'admin n'existe pas" });
        const passwordValid = await bcrypt.compare(formData.password, admin.password);
        if (!passwordValid) return res.status(404).json({ error: 'Mot de passe incorrect' });
        const token = jwt.sign({ id: admin._id, pseudo: admin.pseudo, email: admin.email }, tokenSecret);
        res.status(200).json({ admin, token });
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/admins/id
export async function putAdmin({ req, res }: Props) {
    try {
        const { adminId } = req.query;
        const formData = req.body;
        if (adminId && formData) {
            const admin = await Admins.findByIdAndUpdate(adminId, formData);
            return res.status(200).json(admin);
        }
        res.status(404).json({ error: 'Admin not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/admins/id
export async function deleteAdmin({ req, res }: Props) {
    try {
        const { adminId } = req.query;
        if (adminId) {
            const admin = await Admins.findByIdAndDelete(adminId);
            return res.status(200).json({ deleted: adminId });
        }
        res.status(404).json({ error: 'Admin not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/admins/id
export async function getAdmin({ req, res }: Props) {
    try {
        const { adminId } = req.query;
        if (adminId) {
            const admin = await Admins.findById(adminId);
            res.status(200).json(admin);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}