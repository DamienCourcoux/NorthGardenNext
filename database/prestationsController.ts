import { NextApiRequest, NextApiResponse } from "next";
import Prestations from "../models/prestation";
import Packs from "../models/pack";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/prestations
export async function getPrestations({ req, res }: Props) {
    try {
        const prestation = await Prestations.find({});
        if (!prestation) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(prestation);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/prestations
export async function postPrestation({ req, res }: Props) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const prestation = await Prestations.create(formData);
        const pack = await Packs.findOne({ _id: formData.packsId });
        pack.prestations.push(prestation._id);
        await pack.save();
        return res.status(200).json(prestation);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/prestations/id
export async function putPrestation({ req, res }: Props) {
    try {
        const { prestationId } = req.query;
        const formData = req.body;
        if (prestationId && formData) {
            const prestation = await Prestations.findByIdAndUpdate(prestationId, formData);
            const oldPack = await Packs.findOne({ prestations: prestationId });
            if (oldPack) {
                oldPack.prestations = oldPack.prestations.filter((id: any) => !id.equals(prestationId));
                await oldPack.save();
            }
            const newPack = await Packs.findOne({ _id: formData.packsId });
            newPack.prestations.push(prestation._id);
            await newPack.save();
            return res.status(200).json(prestation);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/prestations/id
export async function deletePrestation({ req, res }: Props) {
    try {
        const { prestationId } = req.query;
        if (prestationId) {
            const prestation = await Prestations.findByIdAndDelete(prestationId);
            const oldPack = await Packs.findOne({ prestations: prestationId });
            if (oldPack) {
                oldPack.prestations = oldPack.prestations.filter((id: any) => !id.equals(prestationId));
                await oldPack.save();
            }
            return res.status(200).json({ deleted: prestationId });
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/prestations/id
export async function getPrestation({ req, res }: Props) {
    try {
        const { prestationId } = req.query;
        if (prestationId) {
            const prestation = await Prestations.findById(prestationId);
            res.status(200).json(prestation);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}