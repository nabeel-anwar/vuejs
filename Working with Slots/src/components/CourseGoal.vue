<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" status="Completed"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the cours!", "Completed Scoped Slots"],
    };
  },
};
</script>

<style></style>
