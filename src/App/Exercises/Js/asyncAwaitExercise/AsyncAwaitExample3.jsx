import { useEffect, useState } from 'react';

const getSomeResult = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) resolve('Success');
      if (!success) reject('Rejected');
    }, 1000);
  });
};
export function AsyncAwaitExample3() {
  const [promiseResult, setPromiseResult] = useState('empty');

  //   async function handleOnClick() {

  useEffect(() => {
    async function handle() {
      try {
        const data = await getSomeResult();
        setPromiseResult(data);
        // await promise.then((result) => setPromiseResult(result));
      } catch (err) {
        setPromiseResult(err);
      } finally {
        console.log('Zakończono');
      }
    }

    handle();
  }, []);

  return (
    <div className="promise-excercise">
      <h3>AsyncAwaitExample3 - with useEffect</h3>
      <button type="button" onClick={() => {}}>
        Start
      </button>
      <button type="button" onClick={() => setPromiseResult('cleared')}>
        Clear
      </button>
      <div>result: {promiseResult}</div>
    </div>
  );
}
