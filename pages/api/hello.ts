// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import hana from '@sap/hana-client';

const hanaConnection = hana.createConnection();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{connection: string}>,
) {

  res.status(200).json({ connection: hanaConnection.state() });
}
