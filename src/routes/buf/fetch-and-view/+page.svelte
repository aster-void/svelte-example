<script lang="ts">
  import { onMount } from "svelte";
  import { z } from "zod";
  const schema = z.array(
    z.object({
      name: z.string(),
      tally: z.number(),
    }),
  );
  type People = z.infer<typeof schema>;

  let promise = $state<Promise<People>>(new Promise(() => {}));
  onMount(() => {
    promise = fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")
      .then((res) => res.json())
      .then((data) => schema.parse(data))
      .then((data) => data.sort((a, b) => b.tally - a.tally)); // try deleting this line!
  });
</script>

{#await promise}
  <span class="loading loading-spinner"></span>
{:then people}
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {#each people as person, rank}
          <tr>
            <th>{rank + 1}</th>
            <td>{person.name}</td>
            {#if person.tally > 0}
              <td class="text-teal-400">{person.tally}</td>
            {:else}
              <td class="text-red-400">{person.tally}</td>
            {/if}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:catch err}
  <span class="text-error">something went wrong: {err.message}</span>
{/await}

<style>
  :global(body) {
    display: flex;
    justify-content: center;
  }
</style>
