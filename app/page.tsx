'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Kode ini akan otomatis mengarahkan pengunjung ke halaman login.html
    window.location.href = '/WaOneLogin/login.html';
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <p className="text-gray-500">Mengarahkan ke halaman login...</p>
    </div>
  );
}