<template>
  <div class="page notation pt-[16px] px-[16px] pb-[40px] bg-rak-gray-4">
    <div class="container mx-auto">
      <CommonBadget current="特定商取引法に基づく表記" />

      <div
        class="main-content-wrapper mt-[48px] lg:w-[736px] mx-auto px-[48px] py-[52px] bg-white rounded-[20px]"
      >
        <h1 class="my-[18px] text-[24px] text-rak-black">
          特定商取引法に基づく表記
        </h1>
        <div class="line mt-[18px] mb-[32px]"></div>

        <div class="table-content text-rak-black">
          <table class="w-full">
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold"> 事業者 </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span> ラストマイルワークス株式会社 </span>
              </td>
            </tr>
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold"> 代表者 </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span> テキスト </span>
              </td>
            </tr>
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold"> 代表者 </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <a href="https://lastmile-works.com/jp/" class="text-rak-blue-1"
                  >https://lastmile-works.com/jp/</a
                >
              </td>
            </tr>

            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold"> 所在地 </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span> 東京都中央区日本橋3-9-1 日本橋三丁目スクエア 3F </span>
              </td>
            </tr>
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold"> 販売価格帯 </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span>
                  定額サービスは該当ページにて販売価格を表示します。お見積もりが必要なサービスは、ご依頼内容を精査した後にメールにてお見積り額をご連絡いたします。
                </span>
              </td>
            </tr>

            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold">
                  代金の支払時期及び方法
                </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span>
                  サービスをご利用いただく際にお送りするメールの内容に基づいて、支払い手続きを行います。
                </span>
              </td>
            </tr>
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold">
                  商品代金以外に必要な費用
                </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <ul class="list-disc ml-[15px]">
                  <li>税金</li>
                  <li>振込手数料</li>
                </ul>
              </td>
            </tr>
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold"> 代表者 </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span>
                  チケット購入後または発注依頼後の、お客様都合による返品・キャンセルは原則不可とさせていただきます。
                </span>
              </td>
            </tr>
            <tr class="w-full">
              <td
                class="bg-rak-blue-3 py-[13px] px-[12px] w-2/6 h-max mr-[4px]"
              >
                <span class="text-[14px] font-bold">
                  不良品の取り扱い条件
                </span>
              </td>

              <td class="bg-rak-blue-4 py-[13px] px-[12px] w-4/5">
                <span>
                  不良品、当社のミスによるものにつきましては、ご納品メールご送付から1週間以内に不備の詳細と併せましてご連絡ください。速やかに対処させていただきます。</span
                >
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.line {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}

.notation {
  td,
  th {
    @apply border-4  px-[12px] h-[60px] min-w-[132px] border-white;
  }
}
</style>
