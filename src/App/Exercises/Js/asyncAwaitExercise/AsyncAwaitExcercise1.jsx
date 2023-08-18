import { useEffect, useState } from 'react';

export function AsyncAwaitExcercise1() {
  const [result, setResult] = useState();

  useEffect(() => {
    async function handle() {
      try {
        setResult(
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve("I'm resolved!");
            }, 3000);
          })
        );
      } catch (err) {
        setResult(err);
      }
    }

    handle();
  }, []);

  return (
    <div>
      <h3>Async Await Ćwiczenie - with useEffect</h3>
      <div>Result: {result}</div>
    </div>
  );
}
