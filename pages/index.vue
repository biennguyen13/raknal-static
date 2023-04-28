<template>
  <div class="service-detail-page pb-28">
    <div class="container mx-auto">
      <div class="flex body-s-bold text-rak-black h-[56px] items-center">
        <NuxtLink to="">TOP</NuxtLink>
        / <NuxtLink to="">サービス一覧</NuxtLink>/
        <NuxtLink to="" class="text-rak-blue-1"
          >バーチャルステージング</NuxtLink
        >
      </div>

      <div class="h-[80px] pt-3">
        <h1 class="headline-m">バーチャルステージング</h1>
      </div>

      <div class="service-detail-page__inner flex justify-between gap-8">
        <div class="service-detail-page__inner__wrap">
          <div class="service-detail-page__inner__slider">
            <Slide />
          </div>
          <div class="service-detail-page__price-panel block lg:hidden mt-4">
            <ServiceDetailPricePanel :price="7700" :days="3" />
          </div>
          <div class="service-detail-page__inner__summary">
            <CommonHeading>サービス概要</CommonHeading>
            <p>
              お客様の物件写真をCG加工・クリーンアップし、本当の魅力を引き出しますバーチャルステージングは購入検討者さまと売主さまの「見たい」と「見せたい」の双方のニーズに応えるサービスです。生活感のある室内でもモデルルームのように演出できます。また室内だけでなく未完成の外観・エクステリアやお天気加工など幅広いご要望にお応いたします。
            </p>
            <common-devide />
          </div>
          <div class="service-detail-page__inner__order-flow">
            <CommonHeading>ご発注フロー</CommonHeading>
            <CommonHeading number="1" html-tag="h2" class="mt-6">
              発注依頼
            </CommonHeading>
            <p class="ml-10">
              専用発注画面にて必要資料をアップロード、6種類のインテリアスタイルからご指定いただくだけで簡単に発注可能です。
            </p>
            <CommonHeading number="2" html-tag="h2" class="mt-6">
              制作
            </CommonHeading>
            <p class="ml-10">
              発注依頼を確認後、制作を開始いたします。画像不鮮明や追加で資料が必要な場合は、制作チームよりご連絡させていただく場合がございます。
            </p>
            <CommonHeading number="3" html-tag="h2" class="mt-6">
              発注依頼
            </CommonHeading>
            <p class="ml-10">
              制作完了と共に、発注システムにて納品及び登録済みのメールに納品完了の通知を行います。納品物にご満足いただけない場合や追加修正の依頼はシステム上で修正依頼を行うことができます。
            </p>
            <CommonHeading number="4" html-tag="h2" class="mt-6">
              お支払い
            </CommonHeading>
            <p class="ml-10">
              請求書払いをご指定のお客様は、納品月の翌月末に当月納品分をお支払いいただきます。また、チケットをご購入のお客様はチケット購入時に購入枚数分をお支払いいただきます。
            </p>
            <common-devide />
          </div>
          <div class="service-detail-page__inner__price-list">
            <CommonHeading>価格表</CommonHeading>
            <CommonTable></CommonTable>
            <common-devide />
          </div>
          <div class="service-detail-page__inner__FAQ">
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
          <ServiceDetailPricePanel :price="7700" :days="3" />
          <CommonHeading>ご発注に関する注意点</CommonHeading>
          <ServiceDetailNotesPanel />
        </div>
      </div>
    </div>

    <div class="bg-rak-blue-4">
      <div
        class="container mx-auto service-detail-page__inner__production-case py-4"
      >
        <div class="flex justify-between items-center">
          <CommonHeading>制作事例</CommonHeading>
          <CommonButton type="secondary" small>制作事例一覧へ</CommonButton>
        </div>
        <CommonGallery />
      </div>
    </div>

    <div class="container mx-auto py-4">
      <div class="service-detail-page__inner__case-study">
        <div class="flex justify-between items-center">
          <CommonHeading>導入事例</CommonHeading>
          <CommonButton type="secondary" small>制作事例一覧へ</CommonButton>
        </div>
        <CommonGrid :datas="state.caseStudy" />
      </div>
      <common-devide />
    </div>

    <div class="container mx-auto py-4">
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
import VirtualStaging01 from "~/assets/images/VirtualStaging01.png"

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
