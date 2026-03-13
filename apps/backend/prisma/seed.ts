import { prisma } from "./db";

async function main() {
  console.log("🌱 Start seeding..."); // Tambahkan ini
  await prisma.user.createMany({
    data: [
      {
        name: "Leo Tobing",
        email: "leo@example.com",
      },
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
      },
    ],
  });
  console.log("✅ Seeding finished successfully!");
}

main().finally(() => prisma.$disconnect());
