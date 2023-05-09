<template>
  <div v-if="state" class="service-detail-page pb-28">
    <div class="container mx-auto">
      <div class="flex body-s-bold text-rak-black h-[56px] items-center">
        <NuxtLink to="">TOP</NuxtLink>
        / <NuxtLink to="">サービス一覧</NuxtLink>/
        <NuxtLink to="" class="text-rak-blue-1">{{ state.service }}</NuxtLink>
      </div>

      <div class="h-[80px] pt-3">
        <h1 class="headline-m">{{ state.service }}</h1>
      </div>

      <div class="service-detail-page__inner flex justify-between gap-8">
        <div class="service-detail-page__inner__wrap">
          <div class="service-detail-page__inner__slider">
            <Slide :items="state.sliderImages" :iframe="state.iframes.image2" />
          </div>
          <div class="service-detail-page__price-panel block lg:hidden mt-4">
            <ServiceDetailPricePanel
              :price="state.price"
              :days="state.deadline"
            />
          </div>
          <div class="service-detail-page__inner__summary">
            <CommonHeading>サービス概要</CommonHeading>
            <p>
              {{ state.serviceOverview }}
            </p>
            <common-devide />
          </div>
          <div class="service-detail-page__inner__order-flow">
            <CommonHeading>ご発注フロー</CommonHeading>
            <template v-for="(item, index) in state.orderFlowStep" :key="index">
              <CommonHeading :number="index + 1" html-tag="h2" class="mt-6">
                {{ item }}
              </CommonHeading>
              <p class="ml-10">
                {{ state.orderFlowDetail[index] }}
              </p>
            </template>
            <common-devide />
          </div>
          <div
            v-if="state.priceList"
            class="service-detail-page__inner__price-list"
          >
            <CommonHeading>価格表</CommonHeading>
            <CommonTable></CommonTable>
            <common-devide />
          </div>
          <div v-if="state.faq" class="service-detail-page__inner__FAQ">
            <CommonHeading>よくある質問</CommonHeading>
            <CommonFAQ
              q="発注量による割引はありますか？"
              a="購入枚数によって１枚あたり最大30%引きになるお得なチケットもご用意致しております。詳しくは価格表をご覧ください。"
            />
            <CommonFAQ
              q="所属部署ごとにアカウント登録は可能ですか？"
              a="可能です。弊社にてお手続きをいたします。詳しくはお問い合わせください。お手続きの流れは、こちらをご確認ください。"
            />
            <CommonFAQ
              q="オフィスやお店など、住宅の部屋以外のステージングも可能ですか？"
              a="可能です。但し、写真によってはオプション料金が発生する場合がございます。詳細に関しては、お問い合わせください"
            />
          </div>
        </div>

        <div class="w-[363px] flex-shrink-0 hidden lg:block">
          <ServiceDetailPricePanel
            :price="state.price"
            :days="state.deadline"
          />
          <CommonHeading>ご発注に関する注意点</CommonHeading>
          <ServiceDetailNotesPanel
            :itemsToPrepare="state.itemsToPrepare"
            :niceToHave="state.niceToHave"
            :notes="state.notes"
          />
        </div>
      </div>
    </div>

    <div class="bg-rak-blue-4">
      <div
        class="container mx-auto service-detail-page__inner__production-case py-4"
      >
        <div class="flex justify-between items-center">
          <CommonHeading>制作事例</CommonHeading>
          <CommonButton type="secondary" small> 制作事例一覧へ</CommonButton>
        </div>
        <CommonGallery :datas="state.productionCase" />
      </div>
    </div>

    <div v-if="0" class="container mx-auto py-4">
      <div class="service-detail-page__inner__case-study">
        <div class="flex justify-between items-center">
          <CommonHeading>導入事例</CommonHeading>
          <CommonButton type="secondary" small>制作事例一覧へ</CommonButton>
        </div>
        <CommonGrid :datas="state.caseStudy" />
      </div>
      <common-devide />
    </div>

    <div v-if="0" class="container mx-auto py-4">
      <div class="service-detail-page__inner__recommended-service">
        <div class="flex justify-between items-center">
          <CommonHeading>おすすめのサービス</CommonHeading>
          <CommonButton type="secondary" small>制作事例一覧へ</CommonButton>
        </div>
        <CommonGrid :datas="state.caseStudy2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VirtualStaging05 from "~/assets/images/VirtualStaging05.png"
import VirtualStaging03 from "~/assets/images/VirtualStaging03.png"
import VirtualStaging02 from "~/assets/images/VirtualStaging02.png"
import VirtualStaging01 from "~/assets/images/VirtualStaging01.png"

import getServiceData from "~/constant/service-detail"
const router = useRouter()
const route = useRoute()
const state = reactive(getServiceData(route.params.directory))

const datas = ref([
  {
    beforeImage: VirtualStaging05,
    afterImage: VirtualStaging03,
    title: "北欧ナチュラル",
    price: 10000,
    iframe:
      "https://terior-dashboard.com/dashboards/G-220707-936694?furnitureType=1",
  },
  {
    beforeImage: VirtualStaging02,
    afterImage: VirtualStaging01,
    title: "ジャパニーズモダン",
    price: 10000,
    iframe:
      "https://terior-dashboard.com/dashboards/G-220707-936694?furnitureType=1",
  },
  {
    beforeImage: VirtualStaging03,
    afterImage: VirtualStaging01,
    title: "スタイリッシュモダン",
    price: 10000,
    iframe:
      "https://terior-dashboard.com/dashboards/G-220707-936694?furnitureType=1",
  },
  {
    beforeImage: VirtualStaging01,
    afterImage: VirtualStaging03,
    title: "シンプルナチュラル",
    price: 10000,
    iframe:
      "https://terior-dashboard.com/dashboards/G-220707-936694?furnitureType=1",
  },
])

if (!state) router.push("/")
</script>

<style scoped lang="scss">
p {
  @apply my-6;
}

.service-detail-page__inner__wrap {
  width: 100%;
  @screen lg {
    width: calc(100% - 363px - 32px);
  }
}
</style>
