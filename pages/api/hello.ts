// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

type Data = {
  name: string;
  id: number;
  email: string;
  phone: string;
}


import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest , res: NextApiResponse<Data>) {
  res.status(200).json({ 
    name: 'John Doe', 
    id: 1,
    email: 'jhon@mail.com',
    phone: '123456789'
  })
}
