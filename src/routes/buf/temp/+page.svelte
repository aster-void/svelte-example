<script lang="ts">
  // formula:
  // C = (F − 32) × 5/9
  // F = (C × 9/5) + 32
  class Temperature {
    private internalC = $state<number>(0);
    private internalF = $derived((this.internalC * 9) / 5 + 32);
    constructor() {
      this.internalC = 0;
    }
    get C() {
      return this.internalC;
    }
    set C(val: number) {
      this.internalC = val;
    }
    get F() {
      return this.internalF;
    }
    set F(val: number) {
      this.internalC = ((val - 32) * 5) / 9;
    }
  }

  const temp: Temperature = new Temperature();
</script>

<center>
  <div>
    <label>
      Fahrenheit:
      <input
        class="input-2xl input input-bordered"
        type="number"
        bind:value={temp.F}
      />
      °F
    </label>
  </div>
  <div>
    <label>
      Celcius:
      <input
        class="input-2xl input input-bordered"
        type="number"
        bind:value={temp.C}
      />
      °C
    </label>
  </div>
</center>

<style>
  * {
    font-size: xx-large;
    margin: 16px;
  }
</style>
