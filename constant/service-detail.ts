const GetBeforeAfterImage = (
  directory: string = "_vhs",
  number: number = 6,
  isBefore: boolean = true
) => {
  return `/service-detail/production-case/${directory}/${number}/${
    isBefore ? "before" : "after"
  }.jpg`
}

const datas = [
  {
    service: "バーチャルステージング",
    directory: "vhs",
    //料金
    price: "¥7,000円（税抜）/枚〜",
    //納期
    deadline: "3営業日以内",
    // サービス概要
    serviceOverview:
      "お客様の物件写真をCG加工・クリーンアップし、本当の魅力を引き出します。バーチャルステージングは購入検討者さまと売主さまの「見たい」と「見せたい」の双方のニーズに応えるサービスです。生活感のある室内でもモデルルームのように演出できます。また室内だけでなく未完成の外観・エクステリアやお天気加工など幅広いご要望にお応いたします。",
    // "ご発注フロー (steps)",
    orderFlowStep: "1.発注依頼2.制作3.納品4.お支払い",
    // "ご発注フロー (detail)"
    orderFlowDetail:
      "1.専用システムにて必要資料をアップロードしていただくだけで簡単に発注可能です。造りつけなどで残しておくべき箇所も備考欄にて指定いただけます。2.発注依頼を確認後、制作を開始いたします。画像不鮮明や追加で資料が必要な場合は、制作チームよりご連絡させていただく場合がございます。3.制作完了と共に、発注システムにて納品及び登録済みのメールに納品完了の通知を行います。納品物にご満足いただけない場合や追加修正の依頼はシステム上で修正依頼を行うことができます。4.請求書払いをご指定のお客様は、納品月の翌月末に当月納品分をお支払いいただきます。また、チケットをご購入のお客様はチケット購入時に購入枚数分をお支払いいただきます。",
    // 価格表
    priceList: null,
    // よくある質問
    faq: null,
    // ご用意いただくもの
    itemsToPrepare: "加工画像",
    // あると良いもの
    niceToHave: "・間取り図・参考画像",
    // 注意事項
    notes:
      "1. パノラマ画像はカメラの傾きを水平に直して納品します。 2. 資料不足による修正は有償対応になります。死角領域の再現や高品質加工のために、間取り図や参考画像をお持ちの場合は必ず添付してください。 3. 照明、カーテン、エアコンは、指定のない限り発注画像のものを残します。 4. 撮影画像の解像度や大きさによって、仕上がりの品質が決まります。 ※推奨解像度：パノラマ画像　3576✕2688以上、通常画像　1200✕800以上 5. 家具などで隠れている箇所の床は、依頼画像のまま残すことは難しく、CGで制作しなおしますが、現状に限りなく近い形で再現いたします。あらかじめご了承ください 6. モザイク処理、コントラスト調整など事前に調整済の画像のご発注は有償対応になる場合があります。また、画像の色合いが変わったり、画質が粗くなる可能性があります。 7.削除したい箇所がわかりにくい場合は、要望欄に補足説明をしていただくか、該当箇所に丸を付けた画像などを参考資料として発注時に添付ください 8.撮影時は、人物が入らないようにご注意ください。 9.撮影画像にバルコニーなどが含まれる場合、物干し竿などの削除も可能です。ただし、対象エリアの死角にあるものや景色などは、別途参考画像を支給ください。参考画像がない場合は、白抜き、もしくはレースカーテンを設置することで対応可能です。",
    // images banner
    sliderImages: (() => {
      const files = import.meta.glob("../public/service-detail/slider/_vhs/*")
      const names = Object.keys(files)
      const result = names.map((name) => name.replace("../public", ""))
      return result
    })(),
    iframes: {
      image2:
        "https://terior-dashboard.com/dashboards/G-220620-779420?furnitureType=1",
    },
    // 制作事例
    productionCase: [
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_vhs", 6),
        afterImage: GetBeforeAfterImage("_vhs", 6, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220620-363986?furnitureType=1",
      },
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_vhs", 7),
        afterImage: GetBeforeAfterImage("_vhs", 7, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220615-572066?furnitureType=1",
      },
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_vhs", 8),
        afterImage: GetBeforeAfterImage("_vhs", 8, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-221005-239276?furnitureType=1",
      },
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_vhs", 9),
        afterImage: GetBeforeAfterImage("_vhs", 9, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220620-798818?furnitureType=1",
      },
    ],
  },
  {
    service: "空室リフォームイメージ",
    directory: "evt",
    //料金
    price: "料金： ¥8,800円（税抜）/枚〜",
    //納期
    deadline: "3営業日以内",
    // サービス概要
    serviceOverview:
      "居住中であっても室内イメージ写真も簡単に制作可能なため、ポータルサイトへの写真の掲載に困りません。また、売却サポートサービスの一つとしてご利用いただくことで、委任物件の取得率アップに貢献します。",
    // "ご発注フロー (steps)",
    orderFlowStep: "1.発注依頼2.制作3.納品4.お支払い",
    // "ご発注フロー (detail)"
    orderFlowDetail:
      "1.専用システムにて必要資料をアップロード、6種類のインテリアスタイルからご指定いただくだけで簡単に発注可能です。2.発注依頼を確認後、制作を開始いたします。画像不鮮明や追加で資料が必要な場合は、制作チームよりご連絡させていただく場合がございます。3.制作完了と共に、発注システムにて納品及び登録済みのメールに納品完了の通知を行います。納品物にご満足いただけない場合や追加修正の依頼はシステム上で修正依頼を行うことができます。4.請求書払いをご指定のお客様は、納品月の翌月末に当月納品分をお支払いいただきます。また、チケットをご購入のお客様はチケット購入時に購入枚数分をお支払いいただきます。",
    // 価格表
    priceList: null,
    // よくある質問
    faq: null,
    // ご用意いただくもの
    itemsToPrepare: "加工画像（空室）",
    // あると良いもの
    niceToHave: "・間取り図・レイアウトプラン・参考画像（インテリアイメージ）",
    // 注意事項
    notes:
      "1. パノラマ画像はカメラの傾きを水平に直して納品します。 2. 撮影画像の解像度や大きさによって、仕上がりの品質が決まります。 ※推奨解像度：パノラマ画像　3576✕2688以上、通常画像　1200✕800以上 3. 写真内に削除すべきものがある場合、内容によって空室リフォームイメージ発注が追加となる場合がございます （例：工事の資材やシール、人物） 4.家具を置く以外の設置や加工については、別料金となります。（例：芝生設置、眺望加工など） 5. 照明、カーテン、エアコンは、指定のない限り発注画像のものを残します。 6. モザイク処理、コントラスト調整など事前に調整済の画像のご発注は有償対応になる場合があります。また、画像の色合いが変わったり、画質が粗くなる可能性があります。",
    // images banner
    sliderImages: (() => {
      const files = import.meta.glob("../public/service-detail/slider/_evt/*")
      const names = Object.keys(files)
      const result = names.map((name) => name.replace("../public", ""))
      return result
    })(),
    iframes: {
      image2:
        "https://terior-dashboard.com/dashboards/G-220707-936694?furnitureType=1",
    },
    // 制作事例
    productionCase: [
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_evt", 6),
        afterImage: GetBeforeAfterImage("_evt", 6, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220917-515393?furnitureType=1",
      },
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_evt", 7),
        afterImage: GetBeforeAfterImage("_evt", 7, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220916-136049?furnitureType=1",
      },
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_evt", 8),
        afterImage: GetBeforeAfterImage("_evt", 8, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220615-169865?furnitureType=1",
      },
      {
        title: "北欧ナチュラル",
        price: 10000,
        beforeImage: GetBeforeAfterImage("_evt", 9),
        afterImage: GetBeforeAfterImage("_evt", 9, false),
        iframe:
          "https://terior-dashboard.com/dashboards/G-220824-274011?furnitureType=1",
      },
    ],
  },
]

export default (directory: string) => {
  let result = datas.find((item) => item.directory === directory)

  if (!result) return null

  result = JSON.parse(JSON.stringify(result))

  const keys: string[] = [
    "orderFlowStep",
    "orderFlowDetail",
    "notes",
    "itemsToPrepare",
    "niceToHave",
  ]

  keys.forEach((key: string) => {
    if (!result[key]) return
    result[key] = result[key].split(/\d+\./).filter((item) => !!item)
  })

  return result
}
