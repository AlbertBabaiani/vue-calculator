<template>
  <div class="keypad">
    <button
      v-for="key in keys"
      :key="key"
      :class="getKeyClass(key)"
      @click="$emit('key-press', key)"
    >
      {{ key === "*" ? "x" : key }}
    </button>
  </div>
</template>

<script setup>
defineEmits(["key-press"]);

const keys = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "*",
  "RESET",
  "=",
];

const getKeyClass = (key) => {
  const classes = ["key"];
  if (key === "DEL" || key === "RESET" || key === "=") {
    classes.push("special");
  }

  if (key === "DEL" || key === "RESET") {
    classes.push("action");
  } else if (key === "=") {
    classes.push("equals");
  } else {
    classes.push("ordinary");
  }

  if (key === "RESET" || key === "=") {
    classes.push("span-2");
  }
  return classes;
};
</script>

<style scoped>
.keypad {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: var(--bg-secondary);
  border-radius: var(--radius);

  gap: 0.8rem;
  padding: 1.5rem;
}

.key {
  border: none;
  border-radius: var(--radius);

  height: 4rem;

  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  transition: all 0.1s ease-in-out;
}

.key.ordinary {
  background: var(--button-bg);
  box-shadow: 0 -4px 0 0 var(--button-shadow) inset;

  color: var(--button-color);
  font-size: 2.5rem;
  letter-spacing: -0.04169rem;
}

.key.special {
  color: #fff;
  font-size: 1.75rem;
  letter-spacing: -0.02919rem;
}

.key.action {
  background: var(--button-action);
  box-shadow: 0 -4px 0 0 var(--button-action-shadow) inset;
}

.key.equals {
  background: var(--button-equal);
  box-shadow: 0 -4px 0 0 var(--button-equal-shadow) inset;
}

.key.span-2 {
  grid-column: span 2;
}

.key:active {
  transform: translateY(4px);
  box-shadow: none;
  box-shadow: 0 0px 0 0 var(--button-shadow) inset;
}

@media (min-width: 600px) {
  .keypad {
    padding: 2rem 1.88rem;
    gap: 1.56rem;
  }
}
</style>
