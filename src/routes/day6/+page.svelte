<script lang="ts">
  // data streaming
  const { data } = $props();
</script>

<div>
  <a class="btn btn-primary" href="/">Go Back</a>
</div>

{@render show(1, data.s1)}
{@render show(2, data.s2)}
{@render show(3, data.s3)}

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
