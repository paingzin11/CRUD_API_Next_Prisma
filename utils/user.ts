import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Data = {
  name: string;
  description: string;
  link: string;
  subscribers: string;
};
let posts: Data[] = [];

export const getUser = async () => {
  try {
    const reault = await prisma.youtube_channels.findMany();
    return reault;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const createUser = async (iData: Data) => {
  try {
    const result = await prisma.youtube_channels.create({
      data: iData,
    });
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const updateUser = async (lid: number, name: string, description: string, link: string, subscribers: string) => {
  try {
    const result = await prisma.youtube_channels.update({
      where: {
        id: lid,
      },
      data: {
        name,
        description,
        link,
        subscribers,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const deleteUser = async (lid: number) => {
  try {
    const result = await prisma.youtube_channels.deleteMany({
      where: {
        id: lid,
      },
    });
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

export const getById = async (lid: number) => {
  try {
    const reault = await prisma.youtube_channels.findMany({
      where: {
        id: lid,
      },
    });
    return reault;
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};
