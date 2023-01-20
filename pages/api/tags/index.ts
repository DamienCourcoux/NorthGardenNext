import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../database/database';
import { getTags, postTag, putTag, deleteTag } from '../../../database/tagsController';

type Data = {
    method?: string
    name?: string
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));

    // type of request
    const { method } = req;

    switch (method) {
        case 'GET':
            getTags({req, res});
            break;
        case 'POST':
            postTag({req, res});
            break;
        case 'PUT':
            putTag({req, res});
            break;
        case 'DELETE':
            deleteTag({req, res});
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`);
            break;
    }
}
