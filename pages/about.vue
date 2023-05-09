<template>
  <div class="about-page pb-28 page">
    <header class="bg-rak-blue-3 lg:h-[631px]">
      <div class="container mx-auto">
        <div class="">
          <div class="flex body-s-bold text-rak-black h-[56px] items-center">
            <NuxtLink to="">TOP</NuxtLink>
            / <NuxtLink to="">サービス一覧</NuxtLink>/
            <NuxtLink to="" class="text-rak-blue-1"
              >バーチャルステージング</NuxtLink
            >
          </div>

          <div class="banner-content flex justify-end lg:mt-[100px]">
            <div class="banner-content__information lg:w-[523px]">
              <h1 class="text-[32px] mb-[40px]">
                不動産業界のラクナルで デジタルコンテンツを利用した
                集客の質と量の課題をまとめて改善
              </h1>

              <div class="py-[12px] px-[20px] information rounded-[20px]">
                <NuxtLink class="text-rak-blue-1 mb-[8px]">
                  ラクナルとは？
                </NuxtLink>
                <p>
                  ラクナルは不動産業の集客におけるデジタルコンテンツを「質」と「量」の視点から一気通貫で改善できる外注プラットフォームです。20以上の外注コンテンツやツールを利用することで、業務負荷の改善と集客力の向上を図ります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main></main>
  </div>
</template>

<style lang="scss">
.about-page {
  .banner-content {
    &__information {
      .information {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>
