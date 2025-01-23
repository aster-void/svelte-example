<script lang="ts">
  let day = $state(1);

  let dayAvailable = $state<"available" | "checking" | "no" | "networkError">("available");
  $effect(() => {
    dayAvailable = "checking";
    const controller = new AbortController();

    fetch(`/day${day}`, {
      method: "HEAD",
      signal: controller.signal,
    })
      .then((resp) => {
        if (200 <= resp.status && resp.status < 300) {
          dayAvailable = "available";
        } else {
          dayAvailable = "no";
        }
      })
      .catch((err) => {
        console.log(err);
        dayAvailable = "networkError";
      });

    return () => controller.abort("cancel");
  });
</script>

<h1 class="mb-8 mt-4 text-center text-2xl">Welcome to SvelteKit</h1>
<!-- just let me center my fcking elements -->
<center>
  <p>
    Visit <a
      class="link"
      class:text-error={dayAvailable === "no"}
      class:text-primary={dayAvailable === "available"}
      class:text-neutral={dayAvailable === "checking"}
      aria-label="visit day n"
      href={`/day${day}`}>Day {day}</a
    >
  </p>

  <div class="mt-4">
    <button class="btn btn-primary" onclick={() => day++}> + </button>
    <span class="mx-5 text-xl">{day}</span>
    <button
      class="btn btn-primary"
      disabled={day <= 1}
      onclick={() => {
        if (day >= 2) day--;
      }}
    >
      -
    </button>
  </div>
</center>
