import { useEffect, useState } from 'react';
import { Tweet } from 'react-tweet';

export function TweetComponent({ id }: { id: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="tweet my-6">
      <div className={`flex justify-center`}>
        {mounted && <Tweet id={id} />}
      </div>
    </div>
  );
}