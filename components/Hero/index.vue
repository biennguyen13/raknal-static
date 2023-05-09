<template>
  <div class="hero-banner mt-[-56px] overflow-hidden">
    <div class="container mx-auto">
      <div class="relative pt-[316px] md:pt-[243px] pb-[48px]">
        <div class="hero-banner__images">
          <div
            v-for="(item, index) in props.images"
            :key="index"
            class="absolute rounded-full flex justify-center items-center"
            :class="'hero-banner__images-image-' + (index + 1)"
          >
            <div class="rounded-full flex justify-center items-center bg-white">
              <img :src="item" alt="banner" class="rounded-full" />
            </div>
          </div>
        </div>
        <div class="flex pl-[74px] justify-end relative z-10">
          <div class="max-w-[660px]">
            <CommonButton roundedType="rounded" class="text-lg">
              売買仲介業者向け
            </CommonButton>
            <h1 class="display-m my-4">
              売却支援コンテンツで
              <br />
              委任獲得・反響アップ・早期成約を支援　
            </h1>
            <p class="">
              テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeroBanner",
}
</script>

<script lang="ts" setup>
import image1 from "~/assets/images/hero-banner/hero1.png"
import image2 from "~/assets/images/hero-banner/hero2.png"
import image3 from "~/assets/images/hero-banner/hero3.png"

const props = defineProps({
  images: {
    type: Array,
    default: [image1, image2, image3],
  },
})
</script>

<style lang="scss" scoped>
.hero-banner__images {
  &-image-1 {
    --width: clamp(152px, 21vw, 275px);
    width: calc(var(--width) * 1.21 * 1.44);
    height: calc(var(--width) * 1.21 * 1.44);
    bottom: 56px;
    left: -122px;
    @screen md {
      top: 263px;
      left: -195px;
    }

    background: rgba(239, 244, 255, 0.5);
    div {
      width: calc(var(--width) * 1.21);
      height: calc(var(--width) * 1.21);
      img {
        width: var(--width);
        height: var(--width);
      }
    }
  }
  &-image-2 {
    top: 26px;
    left: -109px;
    @screen md {
      top: -160px;
      left: 185px;
    }
    z-index: 1;
    --width: clamp(254px, 28vw, 364px);
    width: calc(var(--width) * 1.21 * 1.44);
    height: calc(var(--width) * 1.21 * 1.44);
    @apply bg-rak-blue-3;
    div {
      width: calc(var(--width) * 1.21);
      height: calc(var(--width) * 1.21);
      img {
        width: var(--width);
        height: var(--width);
      }
    }
  }
  &-image-3 {
    top: 11px;
    right: -65px;
    @screen md {
      top: -75px;
      right: -138px;
    }
    background: rgba(239, 244, 255, 0.5);
    --width: clamp(135px, 21vw, 280px);
    width: calc(var(--width) * 1.125 * 1.38);
    height: calc(var(--width) * 1.125 * 1.38);
    div {
      width: calc(var(--width) * 1.125);
      height: calc(var(--width) * 1.125);
      img {
        width: var(--width);
        height: var(--width);
      }
    }
  }
}
</style>
