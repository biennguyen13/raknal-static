<template>
  <section class="contact-form">
    <h1 class="mb-[50px] text-white text-[32px] text-center font-[700]">
      お問い合わせ
    </h1>
    <form class="contact-form__form">
      <div class="form-control mb-[30px]">
        <CommonLabel label="お問い合わ4せ内容" class="mb-[14px]" required />
        <CommonRadioGroup groupName="test" :radioDataArray="radioDataArray" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="お名前" class="mb-[14px]" required />
        <CommonInput placeHolder="田中太郎" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="会社名" class="mb-[14px]" required />
        <CommonInput placeHolder="テキスト" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="メールアドレス" class="mb-[14px]" required />
        <CommonInput placeHolder="テキスト" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="連絡先電話番号" class="mb-[14px]" required />
        <CommonInput placeHolder="テキスト" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="お問い合わせ詳細" class="mb-[14px]" required />
      </div>
    </form>
  </section>
</template>

<script lang="ts">
export default {};
</script>

<script lang="ts" setup>
const radioDataArray = ref([
  { label: "資料請求", value: "資料請求" },
  { label: "サービスについての質問", value: "サービスについての質問" },
  { label: "協業に関するご相談", value: "協業に関するご相談" },
  { label: "その他", value: "その他" },
]);
</script>

<style lang="scss">
.contact-form {
  padding: 48px 320px;
  background-image: url("images/form-bg.png");
}
</style>
