import { NextApiRequest, NextApiResponse } from "next";
import Formules from "../models/formule";
import Packs from "../models/pack";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/formules
export async function getFormules({ req, res }: Props) {
    try {
        const formule = await Formules.find({});
        if (!formule) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(formule);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/formules
export async function postFormule({ req, res }: Props) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const formule = await Formules.create(formData);
        const pack = await Packs.findOne({ _id: formData.packsId });
        pack.formules.push(formule._id);
        await pack.save();
        return res.status(200).json(formule);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/formules/id
export async function putFormule({ req, res }: Props) {
    try {
        const { formuleId } = req.query;
        const formData = req.body;
        if (formuleId && formData) {
            const formule = await Formules.findByIdAndUpdate(formuleId, formData);
            const oldPack = await Packs.findOne({ formules: formuleId });
            if (oldPack) {
                oldPack.formules = oldPack.formules.filter((id: any) => !id.equals(formuleId));
                await oldPack.save();
            }
            const newPack = await Packs.findOne({ _id: formData.packsId });
            newPack.formules.push(formule._id);
            await newPack.save();
            return res.status(200).json(formule);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/formules/id
export async function deleteFormule({ req, res }: Props) {
    try {
        const { formuleId } = req.query;
        if (formuleId) {
            const formule = await Formules.findByIdAndDelete(formuleId);
            const oldPack = await Packs.findOne({ formules: formuleId });
            if (oldPack) {
                oldPack.formules = oldPack.formules.filter((id: any) => !id.equals(formuleId));
                await oldPack.save();
            }
            return res.status(200).json({ deleted: formuleId });
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/formules/id
export async function getFormule({ req, res }: Props) {
    try {
        const { formuleId } = req.query;
        if (formuleId) {
            const formule = await Formules.findById(formuleId);
            res.status(200).json(formule);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}