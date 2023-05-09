<template>
  <header class="header">
    <!-- desktop header -->
    <div class="py-[12px] hidden md:block header-desktop-wrapper">
      <nav
        class="header-wrapper flex container mx-auto items-center justify-between"
      >
        <div class="header__logo md:w-[100px] lg:w-auto">
          <img src="/images/rakunal-logo.svg" alt="rakunal-logo" />
        </div>
        <ul class="header__links flex items-center">
          <li
            class="header__link ml-[32px] flex items-center md:text-[10px] lg:text-[16px]"
            :class="{ active: megaMenuActive }"
            @click="handleToggleMegaMenu"
          >
            カテゴリから探す
            <span class="ml-[10px]">
              <ChevronDown />
            </span>
          </li>
          <li class="header__link ml-[32px]">
            <NuxtLink class="md:text-[10px] lg:text-[16px]" to="/"
              >利用シーンで探す</NuxtLink
            >
          </li>
          <li class="header__link ml-[32px]">
            <NuxtLink class="md:text-[10px] lg:text-[16px]" to="/"
              >ラクナルについて</NuxtLink
            >
          </li>
          <li class="header__link ml-[32px]">
            <CommonButton class="md:text-[10px] lg:text-[16px]">
              ログイン
            </CommonButton>
          </li>
        </ul>
      </nav>

      <!-- mega menu -->
      <CommonMegaMenu :isActive="megaMenuActive" />
    </div>

    <!-- mobile header -->
    <nav
      class="header-mobile-wrapper py-[12px] px-[18px] flex items-center justify-between md:hidden"
    >
      <div class="header__hamburger" @click="handleToggleSideMenu">
        <svg
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.12467 2H19.8747C20.1509 2 20.4159 1.89464 20.6112 1.70711C20.8066 1.51957 20.9163 1.26522 20.9163 1C20.9163 0.734784 20.8066 0.48043 20.6112 0.292893C20.4159 0.105357 20.1509 0 19.8747 0H1.12467C0.848407 0 0.583455 0.105357 0.388105 0.292893C0.192754 0.48043 0.0830078 0.734784 0.0830078 1C0.0830078 1.26522 0.192754 1.51957 0.388105 1.70711C0.583455 1.89464 0.848407 2 1.12467 2ZM19.8747 10H1.12467C0.848407 10 0.583455 10.1054 0.388105 10.2929C0.192754 10.4804 0.0830078 10.7348 0.0830078 11C0.0830078 11.2652 0.192754 11.5196 0.388105 11.7071C0.583455 11.8946 0.848407 12 1.12467 12H19.8747C20.1509 12 20.4159 11.8946 20.6112 11.7071C20.8066 11.5196 20.9163 11.2652 20.9163 11C20.9163 10.7348 20.8066 10.4804 20.6112 10.2929C20.4159 10.1054 20.1509 10 19.8747 10ZM19.8747 5H1.12467C0.848407 5 0.583455 5.10536 0.388105 5.29289C0.192754 5.48043 0.0830078 5.73478 0.0830078 6C0.0830078 6.26522 0.192754 6.51957 0.388105 6.70711C0.583455 6.89464 0.848407 7 1.12467 7H19.8747C20.1509 7 20.4159 6.89464 20.6112 6.70711C20.8066 6.51957 20.9163 6.26522 20.9163 6C20.9163 5.73478 20.8066 5.48043 20.6112 5.29289C20.4159 5.10536 20.1509 5 19.8747 5Z"
            fill="black"
            fill-opacity="0.9"
          />
        </svg>
      </div>
      <div class="header__mobile-logo">
        <img src="/images/rakunal-mobile-logo.svg" alt="rakunal-logo" />
      </div>
      <div class="header__back">
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C0 9.73478 0.105356 9.48043 0.292892 9.29289C0.480429 9.10536 0.734783 9 1 9H8.59L6.29 6.71C6.19676 6.61676 6.1228 6.50607 6.07234 6.38425C6.02188 6.26243 5.99591 6.13186 5.99591 6C5.99591 5.86814 6.02188 5.73757 6.07234 5.61575C6.1228 5.49393 6.19676 5.38324 6.29 5.29C6.38324 5.19676 6.49393 5.1228 6.61575 5.07234C6.73757 5.02188 6.86814 4.99591 7 4.99591C7.13186 4.99591 7.26243 5.02188 7.38425 5.07234C7.50607 5.1228 7.61676 5.19676 7.71 5.29L11.71 9.29C11.801 9.3851 11.8724 9.49725 11.92 9.62C12.02 9.86346 12.02 10.1365 11.92 10.38C11.8724 10.5028 11.801 10.6149 11.71 10.71L7.71 14.71C7.61704 14.8037 7.50644 14.8781 7.38458 14.9289C7.26272 14.9797 7.13201 15.0058 7 15.0058C6.86799 15.0058 6.73728 14.9797 6.61542 14.9289C6.49356 14.8781 6.38296 14.8037 6.29 14.71C6.19627 14.617 6.12188 14.5064 6.07111 14.3846C6.02034 14.2627 5.9942 14.132 5.9942 14C5.9942 13.868 6.02034 13.7373 6.07111 13.6154C6.12188 13.4936 6.19627 13.383 6.29 13.29L8.59 11H1C0.734783 11 0.480429 10.8946 0.292892 10.7071C0.105356 10.5196 0 10.2652 0 10ZM3 0H13C13.7956 0 14.5587 0.316071 15.1213 0.87868C15.6839 1.44129 16 2.20435 16 3V17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20H3C2.20435 20 1.44129 19.6839 0.878679 19.1213C0.316071 18.5587 0 17.7956 0 17V14C0 13.7348 0.105356 13.4804 0.292892 13.2929C0.480429 13.1054 0.734783 13 1 13C1.26522 13 1.51957 13.1054 1.70711 13.2929C1.89464 13.4804 2 13.7348 2 14V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V6C2 6.26522 1.89464 6.51957 1.70711 6.70711C1.51957 6.89464 1.26522 7 1 7C0.734783 7 0.480429 6.89464 0.292892 6.70711C0.105356 6.51957 0 6.26522 0 6V3C0 2.20435 0.316071 1.44129 0.878679 0.87868C1.44129 0.316071 2.20435 0 3 0Z"
            fill="#323638"
          />
        </svg>
      </div>
    </nav>

    <!-- sidenav toggle -->
    <div class="side-nav py-[19px]" :class="sideMenuClasses">
      <div class="side-nav__header flex items-center justify-between px-[16px]">
        <div class="side-nav__logo">
          <!-- replace with image later -->
          <span>LOGO</span>
        </div>
        <div class="side-nav__close" @click="handleToggleSideMenu">
          <Close />
        </div>
      </div>
      <div class="side-nav__actions mt-[30px] px-[16px]">
        <CommonButton> ログイン </CommonButton>
      </div>

      <!-- handle toggle on off later -->
      <div class="side-nav__navigate mt-[40px] px-[16px]">
        <ul class="side-nav__links">
          <li class="side-nav__link pt-[16px] pb-[12px]">
            <div
              class="side-nav__link-wrapper flex justify-between items-center mb-[12px]"
            >
              <a class="text-[20px] block" href="#">カテゴリで探す</a>
              <span>
                <Minus />
              </span>
            </div>

            <ul class="side-nav__sub-menu pl-[34px]">
              <li class="sub-menu__link py-[12px] text-[20px] block w-[300px]">
                <a href="#"></a>CG制作
              </li>
              <li class="sub-menu__link py-[12px] text-[20px] block w-[300px]">
                <a href="#"></a>物件撮影
              </li>
              <li class="sub-menu__link py-[12px] text-[20px] block w-[300px]">
                <a href="#"></a>画像加工
              </li>
              <li class="sub-menu__link pt-[12px] text-[20px] block w-[300px]">
                <a href="#"></a>バーチャルアシスタント
              </li>
            </ul>
          </li>
          <li
            class="side-nav__link flex justify-between items-center py-[16px]"
          >
            <div
              class="side-nav__link-wrapper w-full flex justify-between items-center"
            >
              <a class="text-[20px] block w-[300px]" href="#"
                >利用シーンで探す</a
              >
              <span>
                <Plus />
              </span>
            </div>
          </li>
          <li
            class="side-nav__link flex justify-between items-center py-[16px]"
          >
            <div
              class="side-nav__link-wrapper w-full flex justify-between items-center"
            >
              <a class="text-[20px] block w-[300px]" href="#"
                >ラクナルについて</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import ChevronDown from "~/components/common/icons/ChevronDown.vue";
import Close from "~/components/common/icons/Close.vue";
import Minus from "~/components/common/icons/Minus.vue";
import Plus from "~/components/common/icons/Plus.vue";
export default defineComponent({
  name: "Header",
  components: {
    ChevronDown,
    Close,
    Plus,
    Minus,
  },
  setup() {
    // side nav
    const sideMenuActive = ref(false);
    const sideMenuClasses = computed(() => ({
      active: sideMenuActive.value,
    }));

    // mega menu
    const megaMenuActive = ref(false);

    // header classes
    const headerClasses = computed(() => ({
      "mega-menu-active": megaMenuActive,
    }));

    const handleToggleSideMenu = () => {
      sideMenuActive.value = !sideMenuActive.value;
    };

    const handleToggleMegaMenu = () => {
      megaMenuActive.value = !megaMenuActive.value;
    };

    return {
      sideMenuActive,
      sideMenuClasses,
      handleToggleSideMenu,
      handleToggleMegaMenu,
      megaMenuActive,
      headerClasses,
    };
  },
});
</script>

<style lang="scss">
.header {
  .header-desktop-wrapper {
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
    @apply bg-white;
  }

  .header-desktop-wrapper,
  .header-mobile-wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &.mega-menu-active {
    padding-bottom: 0;
  }

  &__link {
    padding: 8px 12px;
    border-radius: 39px;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
      @apply bg-rak-blue-6/10 text-rak-blue-1;
    }

    &.active {
      @apply bg-rak-blue-6/10 text-rak-blue-1;
    }
  }

  .side-nav {
    z-index: 100000;
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    height: 100%;
    transition: 0.4s ease;
    @apply text-white bg-rak-black;

    // active style
    &.active {
      width: 100%;
      visibility: visible;
    }

    &__logo {
      span {
        font-size: 40px;
      }
    }

    &__close {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      @apply bg-white;
      svg {
        position: absolute;
        font-size: 16px;
      }
    }

    &__actions {
      button {
        width: 100%;
        font-size: 16px;
      }
    }

    ul {
      width: 100%;
      min-width: 476px;
    }
  }
}
</style>
