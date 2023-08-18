import { useState } from 'react';

export function AsyncAwaitExample1() {
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
      const result = await promise;
      setPromiseResult(result);
      console.log(result);
    } catch (err) {
      setPromiseResult(err);
    } finally {
      console.log('Zakończono');
    }
  };

  return (
    <div className="promise-excercise">
      <h3>AsyncAwaitExample1</h3>
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
