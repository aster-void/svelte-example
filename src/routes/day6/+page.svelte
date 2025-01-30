<script lang="ts">
  import { browser } from "$app/environment";

  // another way for client-only fetching
  const promise: Promise<unknown> = browser
    ? fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json(),
      )
    : new Promise(() => {});
</script>

{#await promise}
  <span class="loading loading-spinner"></span>
{:then data}
  {JSON.stringify(data)}
{:catch err}
  <span class="text-error">something went wrong: {err.message}</span>
{/await}
