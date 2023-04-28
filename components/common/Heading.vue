<template>
  <div class="flex items-center w-max" :class="!props.number ? 'my-6' : 'my-3'">
    <template v-if="!props.number">
      <div
        class="h-[36px] w-[36px] rounded-full bg-rak-blue-3 flex justify-center items-center"
      >
        <div class="bg-rak-blue-1 w-5 h-5 rounded-full"></div>
      </div>
    </template>
    <template v-else>
      <div
        class="h-[30px] w-[30px] rounded-full bg-rak-black flex justify-center items-center"
      >
        <span class="text-white font-bold">{{ number }}</span>
      </div>
    </template>
    <component class="ml-[10px]" :is="htmlTag">
      <slot />
    </component>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  number: {
    type: [Number, String],
  },
  htmlTag: {
    type: String,
    default: "h1",
  },
})
</script>

<style lang="scss" scoped></style>
