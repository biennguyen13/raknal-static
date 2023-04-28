<template>
  <div class="common-gallery grid gap-8 md:grid-cols-2 grid-cols-1">
    <CommonGalleryItem
      v-for="(item, index) in state.datas"
      :key="index"
      :beforeImage="item.beforeImage"
      :afterImage="item.afterImage"
      :title="item.title"
      :price="item.price"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "Gallery",
}
</script>

<script lang="ts" setup>
import VirtualStaging05 from "~/assets/images/VirtualStaging05.png"
import VirtualStaging03 from "~/assets/images/VirtualStaging03.png"
import VirtualStaging02 from "~/assets/images/VirtualStaging02.png"
import VirtualStaging01 from "~/assets/images/VirtualStaging01.png"

const state = reactive({
  datas: [
    {
      beforeImage: VirtualStaging05,
      afterImage: VirtualStaging03,
      title: "北欧ナチュラル",
      price: 10000,
    },
    {
      beforeImage: VirtualStaging02,
      afterImage: VirtualStaging01,
      title: "ジャパニーズモダン",
      price: 10000,
    },
    {
      beforeImage: VirtualStaging03,
      afterImage: VirtualStaging01,
      title: "スタイリッシュモダン",
      price: 10000,
    },
    {
      beforeImage: VirtualStaging01,
      afterImage: VirtualStaging03,
      title: "シンプルナチュラル",
      price: 10000,
    },
  ],
})
</script>

<style lang="scss" scoped></style>
