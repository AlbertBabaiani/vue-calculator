<template>
  <div class="app-container" :class="`theme-${theme}`">
    <div class="calculator">
      <calculator-header v-model="theme" />
      <CalculatorDisplay :value="formattedDisplay" />
      <CalculatorKeypad @key-press="handleKeyPress" />
    </div>
  </div>
</template>

<script setup>
import { useCalculator } from "./composables/useCalculator";
import CalculatorHeader from "./components/CalculatorHeader.vue";
import CalculatorDisplay from "./components/CalculatorDisplay.vue";
import CalculatorKeypad from "./components/CalculatorKeypad.vue";
import { ref } from "vue";

const { formattedDisplay, handleKeyPress } = useCalculator();

const theme = ref(1);
</script>

<style scoped>
.calculator {
  max-width: 33.75rem;
  width: calc(100% - 1.5rem);
  min-height: 30rem;
}
</style>

<!-- Todo: writing using keyboard. responsive design -->
