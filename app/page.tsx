import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Big Chungus</h1>
      <Link href="/mentorship" className="text-blue-500 hover:underline">
        Mentorship Program 
      </Link>
      <Link href="/contact" className="text-blue-500 hover:underline">
        Contact
      </Link>
    </div>
  );
}