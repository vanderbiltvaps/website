import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Our Website</h1>
      <p>This is the home page of our Next.js application.</p>
      <Link href="/mentorship" className="text-blue-500 hover:underline">
        View Our Mentorship Program
      </Link>
    </div>
  );
}