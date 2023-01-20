import { NextApiRequest, NextApiResponse } from "next";
import Informations from "../models/information";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/informations
export async function getInformations({ req, res }: Props) {
    try {
        const informations = await Informations.find({});
        if (!informations) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(informations);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/informations
export async function postInformation({ req, res }: Props) {
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({ error: 'Form data not provided' });
        const information = await Informations.create(formData);
        return res.status(200).json(information);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/informations/id
export async function putInformation({ req, res }: Props) {
    try {
        const { informationId } = req.query;
        const formData = req.body;
        if (informationId && formData) {
            const information = await Informations.findByIdAndUpdate(informationId ,formData);
            return res.status(200).json(information);
        }
        res.status(404).json({ error: 'Information not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/informations/id
export async function deleteInformation({ req, res }: Props) {
    try {
        const { informationId } = req.query;
        if (informationId) {
            const information = await Informations.findByIdAndDelete(informationId);
            return res.status(200).json({ deleted: informationId });
        }
        res.status(404).json({ error: 'Information not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/informations/id
export async function getInformation({ req, res }: Props) {
    try {
        const { informationId } = req.query;
        if (informationId) {
            const information = await Informations.findById(informationId);
            res.status(200).json(information);
        } else {
            res.status(404).json({ error: 'Data not selected' });

        }
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}