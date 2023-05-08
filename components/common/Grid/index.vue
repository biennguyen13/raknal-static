<template>
  <div :class="classes" class="common-gallery grid gap-8 grid-cols-1">
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
};
</script>

<script lang="ts" setup>
const props = defineProps({
  datas: {
    required: true,
  },
  rowCols: {
    type: Number,
    default: 4,
  },
});

const classes = computed(() => ({
  "cols-4": props.rowCols === 4,
  "cols-3": props.rowCols === 3,
}));
</script>

<style lang="scss" scoped>
.common-gallery {
  &.cols-4 {
    @apply sm:grid-cols-2 md:grid-cols-4;
  }

  &.cols-3 {
    @apply md:grid-cols-3;
  }
}
</style>
