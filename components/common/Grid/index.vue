<template>
  <div
    class="common-gallery grid gap-8 sm:grid-cols-2 grid-cols-1 md:grid-cols-4"
  >
    <CommonGridItem
      v-for="(item, index) in props.datas"
      :key="index"
      :image="item.image"
      :title="item.title"
      :description="item.description"
      :companyName="item.companyName"
      :price="item.price"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Grid",
}
</script>

<script lang="ts" setup>
const props = defineProps({
  datas: {
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
