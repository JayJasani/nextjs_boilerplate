"use client";

import * as React from 'react';

import '@/styles/colors.css';
import '@/styles/globals.css';

import Navbar from '@/app/components/navigation/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
