async function sleep(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  const s1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    async (res) => {
      await sleep(500);
      return res.json();
    },
  );

  const s2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
    async (res) => {
      await sleep(2000);
      return res.json();
    },
  );

  const s5 = fetch("https://jsonplaceholder.typicode.com/todos/5").then(
    async (res) => {
      await sleep(5000);
      return res.json();
    },
  );

  return {
    stream: {
      s1,
      s2,
      s5,
    },
  };
};
