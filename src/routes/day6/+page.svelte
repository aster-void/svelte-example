<script lang="ts">
  // data streaming
  const { data } = $props();
</script>

<div>
  <a class="btn btn-primary" href="/">Go Back</a>
</div>

{@render show(1, data.stream.s1)}
{@render show(2, data.stream.s2)}
{@render show(5, data.stream.s5)}

{#snippet show(count: number, data: Promise<unknown>)}
  <p>
    {#await data}
      <span class="loading loading-spinner"></span>
    {:then data}
      {count}: {JSON.stringify(data)}
    {:catch err}
      <span class="text-error">something went wrong: {err.message}</span>
    {/await}
  </p>
{/snippet}
