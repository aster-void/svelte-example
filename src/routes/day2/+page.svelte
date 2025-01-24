<script lang="ts">
  let count = $state(0);
  const double = $derived(count * 2); // null * 2 = 0, wtf js

  $inspect(count);
</script>

<center>
  <div>
    <span class="text-5xl">
      {count ?? "not set"} * 2 = {double ?? "not set"}
    </span>
  </div>

  <div>
    <input class="input input-bordered" type="number" bind:value={count} />
  </div>
</center>
