<template>
  <div class="hero-banner">
    <div
      class="container mx-auto pt-[18px] py-[50px] flex flex-col justify-between h-[100%]"
    >
      <div class="hero-banner__badget font-bold">
        <p>
          <span>TOP </span> / <span>利用シーンで探す</span> /
          <span class="current-page text-rak-blue-1">売却支援パッケージ</span>
        </p>
      </div>

      <div class="flex justify-end hero-content">
        <div class="w-[660px] hero-content__wrapper">
          <CommonButton roundedType="rounded" class="hero-content__btn">
            売買仲介業者向け
          </CommonButton>
          <h1 class="hero-content__title my-[26px] text-[40px]">
            売却支援コンテンツで
            <br />
            委任獲得・反響アップ・早期成約を支援　
          </h1>
          <p class="hero-content__description">
            テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。テキストがここに入る。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeroBanner",
};
</script>

<script lang="ts" setup></script>

<style lang="scss">
.hero-banner {
  height: calc(700px - 69px);

  .hero-content {
  }
}
</style>
