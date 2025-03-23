import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
        return res.status(200).json(posts);
    }

    if (req.method === "POST") {
        const { content } = req.body;
        const newPost = await prisma.post.create({ data: { content } });
        return res.status(201).json(newPost);
    }

    res.status(405).json({ message: "Method Not Allowed" });
}
