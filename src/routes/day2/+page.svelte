<script lang="ts">
  const count = $state(0);
</script>

<center>
  <div>
    <span class="text-5xl">{count ?? "not set"}</span>
  </div>

  <div>
    <input class="input input-bordered" type="number" bind:value={count} />
  </div>
</center>
