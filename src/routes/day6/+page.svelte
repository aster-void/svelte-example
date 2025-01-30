<script lang="ts">
  import { browser } from "$app/environment";

  // another way for client-only fetching
  async function fetcher() {
    if (!browser) return new Promise(() => {});

    const resp = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    return resp.json();
  }
</script>

{#await fetcher()}
  <span class="loading loading-spinner"></span>
{:then data}
  {JSON.stringify(data)}
{:catch err}
  <span class="text-error">something went wrong: {err.message}</span>
{/await}
