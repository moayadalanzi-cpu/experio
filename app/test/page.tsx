'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function TestPage() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    const testConnection = async () => {
      const { error } = await supabase.from('test').select('*').limit(1);
      if (error) {
        setStatus('Connection failed ❌');
        console.error(error);
      } else {
        setStatus('Connected successfully ✅');
      }
    };

    testConnection();
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Supabase Test</h1>
      <p>{status}</p>
    </main>
  );
}
