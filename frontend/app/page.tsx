'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then((r) => r.text())
      .then((t) => setStatus('backend: ' + t))
      .catch(() => setStatus('backend not reachable'));
  }, []);

  return (
    <main>
      <h1>UAB Lavonu rojus</h1>
      <p>{status}</p>
    </main>
  );
}
