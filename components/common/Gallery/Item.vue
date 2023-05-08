<template>
  <div class="common-gallery-item">
    <div
      class="common-gallery-item-img relative cursor-pointer overflow-hidden"
    >
      <img
        ref="beforeImage"
        class="object-cover aspect-gallery-image rounded-2xl"
        :src="props.beforeImage"
        :alt="props.title"
      />
      <div
        class="absolute image-after-wrapper top-[50%] left-[50%] rounded-full overflow-hidden"
      >
        <img
          class="image-after absolute top-[50%] left-[50%] object-cover aspect-gallery-image rounded-2xl"
          :style="imageAfterWidthHeight"
          :src="props.afterImage"
          :alt="props.title"
        />
      </div>
      <button
        class="h-[32px] w-[78px] absolute top-3 left-3 rounded-full bg-white px-3 py-1 font-bold text-rak-black"
      >
        <span class="before">Before</span>
        <span class="after">After</span>
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

const beforeImage = ref()

const state = reactive({
  height: 0,
  width: 0,
})

const imageAfterWidthHeight = computed(() => {
  return {
    maxWidth: state.width + "px",
    maxHeight: state.height + "px",
  }
})

const reportWindowSize = (e: any) => {
  const { width, height } = beforeImage.value ?? {}
  state.width = width
  state.height = height
}

onMounted(() => {
  const { width, height } = beforeImage.value ?? {}
  state.width = width
  state.height = height
  window.addEventListener("resize", reportWindowSize)
})

onUnmounted(() => {
  window.removeEventListener("resize", reportWindowSize)
})
</script>

<style lang="scss" scoped>
.common-gallery-item-img {
  --scale: 0;
  .before {
    display: initial;
  }
  .after {
    display: none;
  }

  .image-after-wrapper {
    width: var(--scale);
    padding-top: var(--scale);
    transform: translate(-50%, -50%);
    transition: all 0.5s;
  }
  .image-after {
    transform: translate(-50%, -50%);
  }

  &:hover {
    --scale: 120%;
    .before {
      display: none;
    }
    .after {
      @apply text-rak-blue-1;
      display: initial;
    }
  }
}
</style>
