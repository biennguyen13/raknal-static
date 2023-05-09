<template>
  <div class="panel rounded-3xl p-5 bg-rak-blue-4">
    <p class="text-black/60 font-bold text-sm">料金</p>
    <p class="text-rak-black font-bold text-lg">
      {{ props.price }}
    </p>
    <common-devide class="mt-0" />
    <p class="text-black/60 font-bold text-sm">納期</p>
    <p class="text-rak-black font-bold text-lg">{{ props.days }}</p>
    <CommonButton class="w-full" small>ログインして発注</CommonButton>
    <CommonButton class="w-full" small type="secondary">
      お問い合わせ
    </CommonButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  price: { type: String, required: true },
  days: { type: String, required: true },
})
</script>

<style lang="scss" scoped>
.panel > *:not(:last-child) {
  @apply mb-3;
}
</style>
