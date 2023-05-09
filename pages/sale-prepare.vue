<template>
  <section class="sale-support page">
    <div class="z-10 relative container mx-auto">
      <div class="flex body-s-bold text-rak-black h-[56px] items-center">
        <NuxtLink to="">TOP</NuxtLink>
        / <NuxtLink to="">利用シーンで探す</NuxtLink>/
        <NuxtLink to="" class="text-rak-blue-1">売却支援パッケージ</NuxtLink>
      </div>
    </div>
    <!-- hero banner -->
    <HeroBanner />

    <!-- service -->
    <Service />

    <!-- support -->
    <section class="support">
      <div class="support__heading">
        <div class="container mx-auto py-4">
          <div class="service-detail-page__inner__recommended-service">
            <div class="flex justify-between items-center">
              <CommonHeading>ラクナルの売却支援コンテンツ</CommonHeading>
              <CommonButton type="secondary" small>サービス一覧へ</CommonButton>
            </div>
            <CommonGrid :rowCols="3" :datas="state.caseStudy2" />
          </div>
        </div>
      </div>
    </section>

    <!-- contact form -->
    <ContactForm class="mt-[70px]" />
  </section>
</template>

<script lang="ts">
import HeroBanner from "~/components/Hero/"
import Service from "~/components/Service/"
import VirtualStaging01 from "~/assets/images/VirtualStaging01.png"

export default {
  components: {
    HeroBanner,
    Service,
  },
}
</script>

<script lang="ts" setup>
const state = reactive({
  caseStudy: [
    {
      image: VirtualStaging01,
      companyName: "北欧ナチュラル",
      title: "バーチャルホームステージングで競合物件との差別化に成功",
      description:
        "バーチャルホームステージングを活用することで掲載写真の点数も増え、競合物件との差別化も可能になるため、売主と家主奏法にとってメリットが大きいと感じました。",
    },
    {
      image: VirtualStaging01,
      companyName: "北欧ナチュラル",
      title: "バーチャルホームステージングで競合物件との差別化に成功",
      description:
        "バーチャルホームステージングを活用することで掲載写真の点数も増え、競合物件との差別化も可能になるため、売主と家主奏法にとってメリットが大きいと感じました。",
    },
    {
      image: VirtualStaging01,
      companyName: "北欧ナチュラル",
      title: "バーチャルホームステージングで競合物件との差別化に成功",
      description:
        "バーチャルホームステージングを活用することで掲載写真の点数も増え、競合物件との差別化も可能になるため、売主と家主奏法にとってメリットが大きいと感じました。",
    },
    {
      image: VirtualStaging01,
      companyName: "北欧ナチュラル",
      title: "バーチャルホームステージングで競合物件との差別化に成功",
      description:
        "バーチャルホームステージングを活用することで掲載写真の点数も増え、競合物件との差別化も可能になるため、売主と家主奏法にとってメリットが大きいと感じました。",
    },
  ],
  caseStudy2: [
    {
      image: VirtualStaging01,
      title: "プロカメラマン撮影",
      price: 25000,
    },
    {
      image: VirtualStaging01,
      title: "プロカメラマン撮影",
      price: 25000,
    },
    {
      image: VirtualStaging01,
      title: "プロカメラマン撮影",
      price: 25000,
    },
    {
      image: VirtualStaging01,
      title: "プロカメラマン撮影",
      price: 25000,
    },
    {
      image: VirtualStaging01,
      title: "プロカメラマン撮影",
      price: 25000,
    },
  ],
})
</script>

<style></style>
