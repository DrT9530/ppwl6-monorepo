import { PrismaClient } from "../src/generated/prisma/client"; // Pastikan path ini benar!
import { PrismaLibSql } from "@prisma/adapter-libsql";

// Pastikan DATABASE_URL terbaca dari .env (karena di prisma.config.ts sudah di-load)
const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL || "" });
export const prisma = new PrismaClient({ adapter });