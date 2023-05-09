<template>
  <div class="slide">
    <div class="slide__container rounded-3xl overflow-hidden relative">
      <img
        :src="state.slideItems[state.activeIndex].src"
        alt="some alt text"
        class="aspect-slider-image"
      />
      <iframe
        v-if="props.iframe"
        v-show="state.activeIndex == 1"
        class="absolute top-0 left-0 w-full h-full"
        width="100%"
        height="100%"
        frameborder="0"
        :src="props.iframe"
      ></iframe>
    </div>

    <div class="slide__items mt-[12px] flex">
      <div class="flex justify-start gap-2 mr-2">
        <SlideItem
          :item="item"
          v-for="(item, index) in state.slideItems"
          :key="index"
          @click="handleChangeSlide(index)"
        />
      </div>

      <button
        :disabled="propsItems.length <= 5"
        class="slide__next-btn flex justify-center items-center flex-shrink-0"
        @click="handleLoadMore"
      >
        <span>
          <ChevronRight />
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import ChevronRight from "~/components/common/icons/ChevronRight.vue"
import Expand from "~/components/common/icons/Expand.vue"
import SlideItem from "~/components/Slide/SlideItem.vue"

export default {
  name: "Slide",
  components: {
    ChevronRight,
    Expand,
    SlideItem,
  },
}
</script>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  iframe: {
    type: String,
  },
})

const propsItems = props.items.map((item) => ({ src: item, active: false }))
if (propsItems[0]) {
  propsItems[0].active = true
}

const state = reactive({
  activeIndex: 0,
  slideItems: propsItems.length > 5 ? propsItems.slice(0, 5) : propsItems,
})

const handleChangeSlide = (index: number) => {
  state.slideItems[state.activeIndex].active = false
  state.slideItems[index].active = true
  state.activeIndex = index
}

const handleLoadMore = () => {
  const indexOf = propsItems.findIndex(
    (item) => item.src === state.slideItems[4].src
  )

  if (indexOf < propsItems.length - 1) {
    state.slideItems = propsItems.slice(indexOf - 3, indexOf - 3 + 5)
  } else {
    state.slideItems = propsItems.slice(0, 5)
  }
}
</script>

<style lang="scss">
.slide {
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 10px;
  }

  &__next-btn {
    width: 37px;
    background: black;
    border-radius: 10px;
  }
}
</style>
