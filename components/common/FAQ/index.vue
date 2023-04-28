<template>
  <div class="faq">
    <div class="headline-s flex mb-2">
      <div class="flex-shrink-0 w-[30px]">Q.</div>
      <p>{{ props.q }}</p>
    </div>
    <div class="flex mb-4">
      <div class="flex-shrink-0 w-[30px] text-xl">A.</div>
      <p class="body-m-normal">{{ props.a }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FAQ",
}
</script>

<script lang="ts" setup>
const props = defineProps({
  q: {
    type: String,
    required: true,
  },
  a: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
