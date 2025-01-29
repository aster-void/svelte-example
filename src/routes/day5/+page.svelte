<script lang="ts">
  import { onMount } from "svelte";

  // ignore it during SSR
  let promise = $state<Promise<unknown>>(new Promise(() => {}));

  // client-only fetching
  onMount(() => {
    promise = fetch(
      "https://advent.sveltesociety.dev/data/2023/day-one.json",
    ).then((res) => res.json());
  });
</script>

{#await promise}
  <span class="loading loading-spinner"></span>
{:then data}
  {JSON.stringify(data)}
{:catch err}
  <span class="text-error">something went wrong: {err.message}</span>
{/await}
