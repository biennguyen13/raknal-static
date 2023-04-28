<template>
  <button class="" @click="handler.onClick">
    <slot />
    <common-icons-expand class="ml-2" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["onClick"])

const handler = {
  onClick: (e: Event) => {
    emit("onClick")
  },
}
</script>

<style lang="scss" scoped>
button {
  @apply font-bold rounded-full px-2 h-[32px] text-sm;
  @apply bg-rak-blue-1 font-bold rounded-full text-white flex justify-center items-center px-3;
  &:hover {
    @apply bg-rak-blue-1/92;
  }
  &:focus {
    @apply bg-rak-blue-1/84;
  }
  &:disabled {
    @apply bg-black/40;
  }
}
</style>
