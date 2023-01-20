import { NextApiRequest, NextApiResponse } from "next";
import Pictures from "../models/picture";
import Tags from "../models/tag";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/pictures
export async function getPictures({ req, res }: Props) {
    try {
        const picture = await Pictures.find({});
        if (!picture) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(picture);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/pictures
export async function postPicture({ req, res }: Props) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const picture = await Pictures.create(formData);
        const tag = await Tags.findOne({ _id: formData.tagsId });
        tag.pictures.push(picture._id);
        await tag.save();
        return res.status(200).json(picture);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/pictures/id
export async function putPicture({ req, res }: Props) {
    try {
        const { pictureId } = req.query;
        const formData = req.body;
        if (pictureId && formData) {
            const picture = await Pictures.findByIdAndUpdate(pictureId, formData);
            const oldTag = await Tags.findOne({ pictures: pictureId });
            if (oldTag) {
                oldTag.pictures = oldTag.pictures.filter((id: any) => !id.equals(pictureId));
                await oldTag.save();
            }
            const newTag = await Tags.findOne({ _id: formData.tagsId });
            newTag.pictures.push(picture._id);
            await newTag.save();
            return res.status(200).json(picture);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/pictures/id
export async function deletePicture({ req, res }: Props) {
    try {
        const { pictureId } = req.query;
        if (pictureId) {
            const picture = await Pictures.findByIdAndDelete(pictureId);
            const oldTag = await Tags.findOne({ pictures: pictureId });
            if (oldTag) {
                oldTag.pictures = oldTag.pictures.filter((id: any) => !id.equals(pictureId));
                await oldTag.save();
            }
            return res.status(200).json({ deleted: pictureId });
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/pictures/id
export async function getPicture({ req, res }: Props) {
    try {
        const { pictureId } = req.query;
        if (pictureId) {
            const picture = await Pictures.findById(pictureId);
            res.status(200).json(picture);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}