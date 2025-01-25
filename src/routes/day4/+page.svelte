<script lang="ts">
  let text = $state("");
  const list = $derived(text.split(" ").filter((it) => it.length > 0));
</script>

<div>
  <a class="btn btn-primary" href="/">Go Back</a>
</div>

<input bind:value={text} class="input input-bordered" />

<div>
  <!-- human-friendly conditional rendering -->
  {#if list.length >= 2}
    list has {list.length} items: {list.join(", ")}
  {:else if list.length}
    list has 1 item: {list[0]}
  {:else}
    list has no items
  {/if}
</div>
