import { createUser, getUser, updateUser, deleteUser } from '../../../utils/user';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const posts = await getUser();
    return NextResponse.json({ message: 'OK', posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const { name, description, link, subscribers } = await req.json();
  try {
    const post = { name, description, link, subscribers, createdAt: new Date(), updatedAt: new Date() };
    const createResult = createUser(post);
    return NextResponse.json({ message: 'OK', post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
