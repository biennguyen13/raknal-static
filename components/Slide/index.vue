<template>
  <div class="slide">
    <div class="slide__container">
      <img :src="activeImage" alt="some alt text" />
    </div>

    <div class="slide__items mt-[12px] flex justify-between">
      <SlideItem
        :item="item"
        v-for="(item, index) in slideItems"
        :key="index"
        @click="handleChangeSlide(index)"
      />

      <div
        class="slide__next-btn flex justify-center items-center"
        @click="handleGoToNextSlide"
      >
        <span>
          <ChevronRight />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ChevronRight from "~/components/common/icons/ChevronRight.vue";
import Expand from "~/components/common/icons/Expand.vue";
import SlideItem from "~/components/Slide/SlideItem.vue";

export default {
  name: "Slide",
  components: {
    ChevronRight,
    Expand,
    SlideItem,
  },
};
</script>

<script setup lang="ts">
const slideItems = ref<{ src: string; active: boolean }[]>([
  {
    src: "http://placehold.it/2000x1000",
    active: true,
  },

  {
    src: "http://placehold.it/2000x1000",
    active: false,
  },
  {
    src: "http://placehold.it/2000x1000",
    active: false,
  },
  {
    src: "http://placehold.it/2000x1000",
    active: false,
  },
  {
    src: "http://placehold.it/2000x1000",
    active: false,
  },
]);

const activeImage = ref<string>(slideItems.value[0].src);

const handleUpdateActiveSlide = (index: number) => {
  const newSlideItems = [...slideItems.value];

  newSlideItems.map((item, iIdx) => {
    if (iIdx === index) {
      item.active = true;
    } else {
      item.active = false;
    }
    return item;
  });

  slideItems.value = newSlideItems;
};

const handleChangeSlide = (index: number) => {
  activeImage.value = slideItems.value[index].src;

  handleUpdateActiveSlide(index);
};

const handleGoToNextSlide = () => {
  const currentSlideIndex = slideItems.value.findIndex((item) => item.active);

  let nextSlideIndex = currentSlideIndex + 1;
  if (nextSlideIndex === slideItems.value.length) {
    nextSlideIndex = 0;
  }

  handleChangeSlide(nextSlideIndex);
};
</script>

<style lang="scss">
.slide {
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 10px;
  }
  &__container {
    height: 426px;
    border-radius: 20px;
    img {
      border-radius: 20px;
    }
  }

  &__next-btn {
    width: 37px;
    background: black;
    border-radius: 10px;
  }
}
</style>
