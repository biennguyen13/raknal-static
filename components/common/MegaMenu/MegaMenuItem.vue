<template>
  <li
    :class="{ active: props.item.active }"
    class="mega-menu-link py-[6px] px-[12px] ml-[8px] flex items-center cursor-pointer"
    @click="handleClickOnMegaItem"
  >
    <a href="#" class="mr-[11px]">{{ props.item.label }}</a>
    <span><ChevronDown /></span>

    <div class="link-content">
      <div class="link-content-wrapper flex justify-between">
        <div class="link-content__main-content text-black font-sans">
          <h3 class="text-[32px]">{{ props.item.content.title }}</h3>
          <p class="my-[24px]">
            {{ props.item.content.description }}
          </p>
          <CommonButton> サービスをもっと見る </CommonButton>
        </div>

        <div
          class="link-content__box text-black"
          v-for="(item, index) in props.item.content.items"
          :key="index"
        >
          <div class="link-content__box-img">
            <img class="rounded-t" :src="item.imgSrc" alt="image content" />
          </div>
          <div class="px-[12px] py-[8px] rounded-b bg-rak-blue-3">
            <h4 class="text-[20px]">{{ item.title }}</h4>
            <p class="mt-[8px]">￥ {{ item.price }}~</p>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import ChevronDown from "~/components/common/icons/ChevronDown.vue";

interface IMegaMenuContent {
  imgSrc: String;
  price: number;
  title: String;
}

interface IMegaMenuItem {
  label: String;
  active: Boolean;
  content: {
    title: String;
    description: String;
    items: IMegaMenuContent[];
  };
}

export default {
  name: "MegaMenuItem",
  components: {
    ChevronDown,
  },
};
</script>

<script setup lang="ts">
import { PropType } from "nuxt/dist/app/compat/capi";
const props = defineProps({
  item: {
    type: Object as PropType<IMegaMenuItem>,
    required: true,
  },
});
</script>

<style lang="scss">
.mega-menu-link {
  &.active {
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 39px;

    .link-content {
      height: auto;
      opacity: 1;
      visibility: visible;
    }
  }

  .link-content {
    position: absolute;
    top: 100%;
    transform: translateY(30px);
    left: 0;
    height: 0;
    width: 100%;
    overflow: hidden;
    z-index: 1000;
    background: black;
    box-shadow: 0px 0px 10px rgba(193, 220, 237, 0.5);
    border-radius: 24px;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease;
    @apply bg-white;

    .link-content-wrapper {
      padding: 33px 24px;
    }

    &__main-content {
      padding: 30px 20px;
      width: 310px;
    }

    &__box {
      width: 240px;

      img {
        height: 232px;
      }
    }
  }
}
</style>
