<!-- Basic Counter -->
<script lang="ts">
  let count = $state(0);
</script>

<a class="btn btn-primary" href="/">Go Back</a>

<center>
  <button class="btn text-blue-500" onclick={() => count++}>increase</button>
  <span>{count}</span>
  <button class="btn text-red-500" onclick={() => count--}>decrease</button>
</center>
