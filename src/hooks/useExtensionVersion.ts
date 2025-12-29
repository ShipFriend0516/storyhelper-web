import { useState, useEffect } from 'react';

interface VersionData {
  version: string;
  name: string;
}

export function useExtensionVersion() {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch('/api/version');

        if (!response.ok) {
          throw new Error('Failed to fetch version');
        }

        const data: VersionData = await response.json();
        setVersion(data.version);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error('Failed to fetch extension version:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, []);

  return { version, loading, error };
}
