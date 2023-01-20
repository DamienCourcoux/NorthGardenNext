import { NextApiRequest, NextApiResponse } from "next";
import Packs from "../models/pack";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/packs
export async function getPacks({ req, res }: Props) {
    try {
        const packs = await Packs.find({});
        if (!packs) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(packs);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/packs
export async function postPack({ req, res }: Props) {
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({ error: 'Form data not provided' });
        const pack = await Packs.create(formData);
        return res.status(200).json(pack);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/packs/id
export async function putPack({ req, res }: Props) {
    try {
        const { packId } = req.query;
        const formData = req.body;
        if (packId && formData) {
            const pack = await Packs.findByIdAndUpdate(packId ,formData);
            return res.status(200).json(pack);
        }
        res.status(404).json({ error: 'Pack not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/packs/id
export async function deletePack({ req, res }: Props) {
    try {
        const { packId } = req.query;
        if (packId) {
            const pack = await Packs.findByIdAndDelete(packId);
            return res.status(200).json({ deleted: packId });
        }
        res.status(404).json({ error: 'Pack not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/packs/id
export async function getPack({ req, res }: Props) {
    try {
        const { packId } = req.query;
        if (packId) {
            const pack = await Packs.findById(packId);
            res.status(200).json(pack);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}