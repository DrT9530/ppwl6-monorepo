import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { prisma } from "../prisma/db";
import type { ApiResponse, User, HealthCheck } from "shared";

const app = new Elysia()
  // Mengizinkan Frontend mengakses API (CORS)
  .use(cors({ 
    origin: ["http://localhost:5173", "http://localhost:5174"] 
  }))
  // Dokumentasi API otomatis
  .use(swagger())
  
  // Endpoint Cek Kesehatan
  .get("/", (): ApiResponse<HealthCheck> => {
    return {
      data: { status: "ok" },
      message: "server running"
    }
  })

  // Endpoint Ambil Data User dari Database
  .get("/users", async () => {
    const users = await prisma.user.findMany();
    
    const response: ApiResponse<User[]> = {
      data: users,
      message: "User list retrieved"
    };
    
    return response;
  })
  
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);