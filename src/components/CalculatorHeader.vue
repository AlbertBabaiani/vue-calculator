<template>
  <header class="header">
    <h1>calc</h1>

    <div class="theme-switcher">
      <label for="theme-toggle">THEME</label>

      <div class="toggle-control">
        <div class="toggle-labels">
          <span>1</span><span>2</span><span>3</span>
        </div>

        <input
          type="range"
          min="1"
          max="3"
          id="theme-toggle"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: var(--color);

  margin-bottom: 2rem;
}

.header h1 {
  letter-spacing: -0.03331rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.theme-switcher {
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;
}

label {
  margin-bottom: 0.6rem;
}

.theme-switcher label {
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.0625rem;
}

.toggle-control {
  width: 4.5rem;
}

.toggle-labels {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-inline: 0.6rem;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.31rem;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.625rem;
  border-radius: 100vmax;
  background: var(--slider-bg);
  cursor: pointer;
  padding: 0.31rem;
  transition: background-color 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;

  width: 1rem;
  aspect-ratio: 1;

  background-color: var(--slider-toggle);
  border-radius: 50%;
  border: none;
  transition: background-color 0.3s ease;
}
input[type="range"]::-moz-range-thumb {
  width: 1rem;
  aspect-ratio: 1;

  background-color: var(--slider-toggle);
  border-radius: 50%;
  border: none;
  transition: background-color 0.3s ease;
}
</style>
