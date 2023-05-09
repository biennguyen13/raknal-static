<template>
  <section class="contact-form py-[48px] px-[16px]">
    <h1 class="mb-[50px] text-white text-[32px] text-center font-[700]">
      お問い合わせ
    </h1>
    <form class="contact-form__form container lg:w-[640px] mx-auto">
      <div class="form-control mb-[30px]">
        <CommonLabel
          label="お問い合わ4せ内容"
          class="mb-[14px]"
          :required="true"
        />
        <CommonRadioGroup
          groupName="inquiry"
          :radioDataArray="radioDataArray"
          @input="updateInquiry"
        />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="お名前" class="mb-[14px]" :required="true" />
        <CommonInput name="name" v-model="form.name" placeHolder="田中太郎" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="会社名" class="mb-[14px]" :required="true" />
        <CommonInput
          v-model="form.companyName"
          name="会社名"
          placeHolder="テキスト"
        />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel
          label="メールアドレス"
          class="mb-[14px]"
          :required="true"
        />
        <CommonInput
          v-model="form.email"
          name="メールアドレス"
          placeHolder="テキスト"
        />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel label="連絡先電話番号" class="mb-[14px]" />
        <CommonInput
          v-model="form.number"
          name="連絡先電話番号"
          placeHolder="テキスト"
        />
      </div>
      <div class="form-control mb-[30px]">
        <CommonLabel
          v-model="form.inquiryDetail"
          label="お問い合わせ詳細"
          class="mb-[14px]"
          :required="true"
        />
        <CommonTextArea placeHolder="テキスト" v-model="inquiryDetail" />
      </div>
      <div class="form-control mb-[30px]">
        <CommonCheckbox>
          <span class="text-[16px]">
            <a href="#" class="underline"
              >「お問い合わせにおける個人情報の取り扱いについて」</a
            >
            に同意する
          </span>
        </CommonCheckbox>
      </div>

      <div class="form-control">
        <CommonButton @click="test" type="secondary" class="w-full">
          フォームを送信
        </CommonButton>
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

const form = reactive({
  name: "",
  inquiry: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  inquiryDetail: "",
  agree: false,
});

const updateInquiry = (event: Event) => {
  form.inquiry = (event.target as HTMLInputElement).value;
};

watch(
  form,
  (val) => {
    console.log(val, "asdasdsa");
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
.contact-form {
  background: url("~/assets/images/form-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
