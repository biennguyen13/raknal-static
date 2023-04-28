<template>
  <div class="common-gallery-item">
    <div
      class="common-gallery-item-img relative cursor-pointer"
      @mouseenter="state.isHover = true"
      @mouseout="state.isHover = false"
    >
      <img
        class="object-cover aspect-gallery-image rounded-2xl"
        :src="!state.isHover ? props.beforeImage : props.afterImage"
        :alt="props.title"
      />
      <button
        class="h-[32px] w-[78px] absolute top-3 left-3 rounded-full bg-white px-3 py-1 font-bold"
        :class="!state.isHover ? 'text-rak-black' : 'text-rak-blue-1'"
      >
        {{ !state.isHover ? "Before" : "After" }}
      </button>
    </div>
    <div
      class="common-gallery-item-title mt-3 flex items-center justify-between"
    >
      <div>
        <p class="headline-m">{{ props.title }}</p>
        <p class="headline-m">￥{{ props.price }}~</p>
      </div>
      <CommonGalleryButton class="flex-shrink-0">拡大表示</CommonGalleryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  beforeImage: {
    type: String,
    required: true,
  },
  afterImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})
const state = reactive({
  isHover: false,
})

const handler = {}
</script>
