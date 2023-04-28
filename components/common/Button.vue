<template>
  <button :class="classes" class="min-w-[160px]" @click="handler.onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(["onClick"])
const props = defineProps({
  type: {
    type: String,
    validator(value: string) {
      return ["primary", "secondary", "tertiary"].includes(value)
    },
    default: "primary",
  },
})

const classes = computed(() => {
  return {
    [props.type]: true,
  }
})

const handler = {
  onClick: (e: Event) => {
    emit("onClick")
  },
}
</script>

<style lang="scss" scoped>
button {
  @apply font-bold rounded-full  flex justify-center items-center px-3 h-[52px];
}

.primary {
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

.secondary {
  @apply text-rak-blue-1 border-rak-blue-1 border-2 bg-white;
  &:disabled {
    @apply text-black/40 border-black/40;
  }
}

.tertiary {
  @apply text-rak-blue-1 bg-rak-gray-1;
  &:hover {
    @apply brightness-95;
  }
  &:focus {
    @apply brightness-90;
  }
  &:disabled {
    @apply text-black/40 bg-rak-gray-1 brightness-100;
  }
}

[small] {
  @apply h-[44px];
}

[smaller] {
  @apply h-[36px];
}
</style>
