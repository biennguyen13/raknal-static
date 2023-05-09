<template>
  <div class="badget font-bold">
    <p>
      <span>TOP / </span>
      <span v-if="props.prev"> / {{ props.prev }} / </span>
      <span class="current-page text-rak-blue-1">{{ props.current }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["prev", "current"]);
</script>

<style></style>
