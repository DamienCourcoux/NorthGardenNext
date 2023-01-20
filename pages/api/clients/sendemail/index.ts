import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../../database/database';
// import { sendEmail } from '../../../../database/clientsController';

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

    // switch (method) {
    //     case 'POST':
    //         sendEmail({req, res});
    //         break;
    //     default:
    //         res.setHeader('Allow', ['POST']);
    //         res.status(405).end(`Method ${method} Not Allowd`);
    //         break;
    // }
}
