import { PromisyExample1 } from './PromisyExample1';
import { PromisyExample2 } from './PromisyExample2';
import { PromisyExample3 } from './PromisyExample3';
import { TryCatchFinally } from './TryCatchFinally';
import { PromiseExercise } from './PromiseExercise';
import { AsyncAwaitExample1 } from './AsyncAwaitExample1';
import { AsyncAwaitExample2 } from './AsyncAwaitExample2';
import { AsyncAwaitExample3 } from './AsyncAwaitExample3';
import { AsyncAwaitExcercise1 } from './AsyncAwaitExcercise1';
import { AsyncAwaitExercise2 } from './AsyncAwaitExercise2';
import { PromiseMethods } from './PromiseMethods';

export const AsyncAwaitExercise = () => {
  return (
    <div>
      <h2>Promisy Example</h2>
      <PromisyExample1 /> <PromisyExample2 />
      <PromisyExample3 /> <TryCatchFinally /> <PromiseExercise />{' '}
      <h2>Async Await - Teoria</h2>
      <AsyncAwaitExample1 />
      <AsyncAwaitExample2 />
      <AsyncAwaitExample3 />
      <h2>Async Await - Ćwiczenie</h2>
      <AsyncAwaitExcercise1 />
      <AsyncAwaitExercise2 />
      <h2>Promise Methode</h2>
      <PromiseMethods />
    </div>
  );
};
