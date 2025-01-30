<script lang="ts">
let nestedArray: string[][] = $state([[]]);
let nextVal = $state("");
</script>

<a class="btn btn-primary" href="/">Go Back</a>

<div>
  <input type="text" bind:value={nextVal} class="input input-bordered" />
  <button
    type="button"
    onclick={() => {
      // nested reactivity just works
      nestedArray.at(-1)?.push(nextVal);
      nextVal = "";
    }}
    class="btn btn-primary"
  >
    Append item
  </button>
</div>

<div>
  <table class="table">
    <tbody>
      {#each nestedArray as array, idx}
        <tr>
          <td>{idx}</td>
          {#each array as elem}
            <td>{elem}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div>
  <button
    type="button"
    onclick={() => {
      nestedArray.push([]);
    }}
    class="btn btn-primary"
  >
    Append array
  </button>
</div>
