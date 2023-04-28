<template>
  <p class="font-bold underline">Button</p>
  <CommonButton @onClick="onClick" disabled class="w-[150px] min-w-0"
    >ボタン</CommonButton
  >
  <CommonButton @onClick="onClick" small type="secondary">ボタン</CommonButton>
  <CommonButton @onClick="onClick" smaller type="tertiary">ボタン</CommonButton>
  <p class="font-bold underline">Slide</p>
  <Slide />
  <p class="font-bold underline">Heading</p>
  <CommonHeading>サービス概要</CommonHeading>
  <CommonHeading number="1" html-tag="h2">サービス概要</CommonHeading>

  <p class="font-bold underline">Table</p>
  <CommonTable></CommonTable>
  <p class="font-bold underline">Gallery</p>
  <CommonGallery />
  <p class="font-bold underline">Grid 導入事例</p>
  <CommonGrid :datas="state.caseStudy" />
  <p class="font-bold underline">Grid おすすめのサービス</p>
  <CommonGrid :datas="state.caseStudy2" />
</template>

<script setup lang="ts">
import VirtualStaging01 from "~/assets/images/VirtualStaging01.png"

definePageMeta({
  layout: "default",
})

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
  ],
})

const onClick = () => {}
</script>
