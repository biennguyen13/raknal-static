<template>
  <footer class="bg-rak-black text-center py-[32px] lg:py-[40px] text-white">
    <div class="container mx-auto">
      <div class="lg:flex justify-between">
        <div class="ft__logo lg:w-[360px] w-full">
          <div class="logo mb-[34px]">
            <!-- handle image later -->
            <img src="/images/logo.png" class="w-full" alt="" />
          </div>
          <CommonButton type="btn-4" class="mb-[20px] w-full">
            ログイン
          </CommonButton>

          <CommonButton type="btn-5" class="mb-[20px] w-full">
            会員登録
          </CommonButton>
        </div>

        <div class="links lg:flex mt-[50px] lg:mt-0">
          <ul class="lg:w-[240px] text-left">
            <li class="mb-[16px]">
              <NuxtLink class="text-[14px]" to="">運営会社</NuxtLink>
            </li>
            <li class="mb-[16px]">
              <NuxtLink class="text-[14px]" to="">FAQ</NuxtLink>
            </li>
            <li class="mb-[16px]">
              <NuxtLink class="text-[14px]" to="">お問い合わせ</NuxtLink>
            </li>
          </ul>
          <ul class="lg:w-[240px] text-left">
            <li class="mb-[16px]">
              <NuxtLink class="text-[14px]" to="">個人情報の取り扱い</NuxtLink>
            </li>
            <li class="mb-[16px]">
              <NuxtLink class="text-[14px]" to="">利用規約</NuxtLink>
            </li>
            <li class="mb-[16px]">
              <NuxtLink class="text-[14px]" to=""
                >特定商取引法に基づく表記</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <p class="text-center mt-[40px] font-[14px] w-[70%] mx-auto lg:w-full">
        Copyright © LASTMILE WORKS Co., Ltd. All rigths reserved.
      </p>
    </div>
  </footer>
</template>
