<template>
  <div class="common-gallery grid gap-8 md:grid-cols-2 grid-cols-1">
    <CommonGalleryItem
      v-for="(item, index) in props.datas"
      :key="index"
      :beforeImage="item.beforeImage"
      :afterImage="item.afterImage"
      :title="item.title"
      :price="item.price"
      :iframe="item.iframe"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Gallery",
}
</script>

<script lang="ts" setup>
const props = defineProps({
  datas: {
    type: Array,
    default: [],
  },
})

const state = reactive({
  datas: [],
})
</script>

<style lang="scss" scoped></style>
