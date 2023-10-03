'use client';

import Head from 'next/head';

import ButtonLink from '@/components/links/ButtonLink';


export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex h-screen  flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript by Jay
          </p>

          <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink>

        </div>
      </section>
    </main>
  );
}
