<template>
  <div :class="classes" class="w-full mega-menu bg-rak-black">
    <div class="mega-menu__wrapper container mx-auto py-[12px]">
      <ul
        class="mega-menu__links text-white flex items-center justify-end relative"
      >
        <CommonMegaMenuItem
          v-for="(item, index) in megaMenuItems"
          :key="index"
          :item="item"
          @click="handleClickOnMenuItem(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import ChevronDown from "~/components/common/icons/ChevronDown.vue";

export default {
  name: "MegaMenu",
  components: {
    ChevronDown,
  },
};
</script>

<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => ({
  active: props.isActive,
}));

const megaMenuItems = ref([
  {
    label: "CG制作",
    active: false,
    content: {
      title: "物件撮影",
      description:
        "忙しい営業担当におすすめ！天候・部屋形状を問わず綺麗に撮影できます。画像補正で品質を統一し、工数削減と物件写真の品質向上に貢献します。",
      items: [
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
      ],
    },
  },
  {
    label: "物件撮影",
    active: false,
    content: {
      title: "物件撮影",
      description:
        "忙しい営業担当におすすめ！天候・部屋形状を問わず綺麗に撮影できます。画像補正で品質を統一し、工数削減と物件写真の品質向上に貢献します。",
      items: [
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
      ],
    },
  },
  {
    label: "画像加工",
    active: false,
    content: {
      title: "物件撮影",
      description:
        "忙しい営業担当におすすめ！天候・部屋形状を問わず綺麗に撮影できます。画像補正で品質を統一し、工数削減と物件写真の品質向上に貢献します。",
      items: [
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
      ],
    },
  },
  {
    label: "バーチャルアシスタント",
    active: false,
    content: {
      title: "物件撮影",
      description:
        "忙しい営業担当におすすめ！天候・部屋形状を問わず綺麗に撮影できます。画像補正で品質を統一し、工数削減と物件写真の品質向上に貢献します。",
      items: [
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
        {
          imgSrc: "http://placehold.it/2000x1000",
          price: 1980,
          title: "プロカメラマン撮影",
        },
      ],
    },
  },
]);

const handleClickOnMenuItem = (index: number) => {
  const newMegaMenuItems = [...megaMenuItems.value];

  newMegaMenuItems.map((item, iIdx) => {
    if (iIdx === index) {
      item.active = !item.active;
    } else {
      item.active = false;
    }
    return item;
  });

  megaMenuItems.value = newMegaMenuItems;
};
</script>

<style lang="scss">
.mega-menu {
  transition: 0.4s ease;
  visibility: hidden;
  opacity: 0;
  height: 0;
  position: absolute;
  top: 100%;
  &.active {
    visibility: visible;
    opacity: 1;
    // 60px is mega menu height
    height: 60px;
  }
}
</style>
