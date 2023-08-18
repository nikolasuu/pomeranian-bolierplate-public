import { useState } from 'react';

export function AsyncAwaitExample2() {
  const [promiseResult, setPromiseResult] = useState('empty');

  //   async function handleOnClick() {
  const handleOnClick = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) resolve('Success');
        if (!success) reject('Rejected');
      }, 1000);
    });

    try {
      await promise.then((result) => setPromiseResult(result));
      // await promise.then((result) => setPromiseResult(result));
    } catch (err) {
      setPromiseResult(err);
    } finally {
      console.log('Zakończono');
    }
  };

  return (
    <div className="promise-excercise">
      <h3>AsyncAwaitExample2</h3>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <button type="button" onClick={() => setPromiseResult('cleared')}>
        Clear
      </button>
      <div>result: {promiseResult}</div>
    </div>
  );
}
