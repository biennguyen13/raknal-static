<template>
  <div class="page inquiry pt-[16px] px-[16px] pb-[40px] bg-rak-gray-4">
    <div class="container mx-auto">
      <CommonBadget current="お問い合わせ" />

      <div
        class="main-content-wrapper mt-[48px] lg:w-[736px] mx-auto px-[48px] py-[52px] bg-white rounded-[20px]"
      >
        <h1 class="my-[18px] text-[24px] text-rak-black">
          特定商取引法に基づく表記
        </h1>
        <p class="text-[16px] mb-[18px]">
          弊社にご興味をお持ちいただき、誠にありがとうございます。内容確認後、担当より通常1営業日以内にご連絡させていただきます。
          万が一、数日経過致しましても当社からの返信がない場合は、お手数ですが、再度お問い合わせくださいますようお願い申し上げます。
        </p>
        <div class="line mt-[18px] mb-[32px]"></div>

        <form class="contact-form__form mx-auto">
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
            <CommonInput
              name="name"
              v-model="form.name"
              placeHolder="田中太郎"
            />
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss">
.line {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}

.inquiry {
  label {
    @apply text-rak-black;
  }

  .radio-group {
    input:checked ~ span.check-box {
      @apply bg-rak-black;
    }
    .check-box {
      border-color: #323638;
    }

    span {
      @apply text-rak-black;
    }
  }

  .form-input {
    input {
      @apply bg-rak-blue-3;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    textarea {
      @apply bg-rak-blue-3;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .custom-checkbox {
    .checkmark {
      background: none;
      border-color: #323638;
      border: 1px solid;
    }
  }
}
</style>
