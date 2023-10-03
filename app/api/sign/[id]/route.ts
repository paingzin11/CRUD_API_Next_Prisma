import { updateUser, deleteUser, getById } from '../../../../utils/user';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const linkid = req.url.split('sign/')[1];
  const post = await getById(parseInt(linkid));
  try {
    if (!post) {
      return NextResponse.json({ message: 'Error' }, { status: 404 });
    }
    return NextResponse.json({ message: 'OK', post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { name, description, link, subscribers } = await req.json();
    const lid = req.url.split('sign/')[1];
    await updateUser(parseInt(lid), name, description, link, subscribers);
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const lid = req.url.split('sign/')[1];
    await deleteUser(parseInt(lid));
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
