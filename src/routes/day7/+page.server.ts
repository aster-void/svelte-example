async function sleep(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  const s1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    async (res) => {
      await sleep(1000);
      return res.json();
    },
  );

  const s2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
    async (res) => {
      await sleep(2000);
      return res.json();
    },
  );

  const s3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
    async (res) => {
      await sleep(3000);
      return res.json();
    },
  );

  return {
    immed: Promise.resolve(),
    s1,
    s2,
    s3,
  };
};
