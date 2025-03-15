import React from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import Home from '@/components/Home';

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth');
  }

  return <Home />
};

export default Page;
