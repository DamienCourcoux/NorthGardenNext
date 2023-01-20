import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../database/database';
import { getFormules, postFormule, putFormule, deleteFormule } from '../../../database/formulesController';

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
            getFormules({req, res});
            break;
        case 'POST':
            postFormule({req, res});
            break;
        case 'PUT':
            putFormule({req, res});
            break;
        case 'DELETE':
            deleteFormule({req, res});
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`);
            break;
    }
}
