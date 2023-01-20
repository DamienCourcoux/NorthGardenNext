import { NextApiRequest, NextApiResponse } from "next";
import Tags from "../models/tag";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/tags
export async function getTags({ req, res }: Props) {
    try {
        const tags = await Tags.find({});
        if (!tags) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(tags);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/tags
export async function postTag({ req, res }: Props) {
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({ error: 'Form data not provided' });
        const tag = await Tags.create(formData);
        return res.status(200).json(tag);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/tags/id
export async function putTag({ req, res }: Props) {
    try {
        const { tagId } = req.query;
        const formData = req.body;
        if (tagId && formData) {
            const tag = await Tags.findByIdAndUpdate(tagId ,formData);
            return res.status(200).json(tag);
        }
        res.status(404).json({ error: 'Tag not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/tags/id
export async function deleteTag({ req, res }: Props) {
    try {
        const { tagId } = req.query;
        if (tagId) {
            const tag = await Tags.findByIdAndDelete(tagId);
            return res.status(200).json({ deleted: tagId });
        }
        res.status(404).json({ error: 'Tag not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/tags/id
export async function getTag({ req, res }: Props) {
    try {
        const { tagId } = req.query;
        if (tagId) {
            const tag = await Tags.findById(tagId);
            res.status(200).json(tag);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}