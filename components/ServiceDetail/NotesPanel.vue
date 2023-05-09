<template>
  <div class="panel rounded-3xl p-5 bg-rak-blue-4">
    <p class="font-bold text-sm">ご用意いただくもの</p>
    <ol class="pl-4 list-decimal my-5">
      <li v-for="(item, index) in props.itemsToPrepare" :key="index">
        {{ item }}
      </li>
    </ol>
    <p class="font-bold text-sm">あるといいもの</p>
    <ol class="pl-4 list-decimal my-5">
      <li v-for="(item, index) in props.niceToHave" :key="index">
        {{ item }}
      </li>
    </ol>
    <common-devide class="my-3" />
    <p class="font-bold text-sm">注意事項</p>
    <ol class="pl-4 list-decimal my-5">
      <li v-for="(item, index) in props.notes" :key="index">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  itemsToPrepare: {
    type: Array,
    default: [],
  },
  niceToHave: {
    type: Array,
    default: [],
  },
  notes: {
    type: Array,
    default: [],
  },
})
</script>

<style lang="scss" scoped>
li {
  @apply mb-1;
}
</style>
