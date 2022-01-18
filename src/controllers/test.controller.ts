import { Request, Response } from "express";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export const getTest = async (req:Request, res:Response)=>{    
    const users = await prisma.user.findMany();
    res.status(200).json({data: users});  
}