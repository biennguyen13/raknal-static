<template>
  <div class="common-grid-item shadow-rak-grid rounded-xl overflow-hidden">
    <div class="common-grid-item-img cursor-pointer">
      <img
        class="object-cover aspect-grid-image"
        :src="props.image"
        :alt="props.title"
      />
      <div class="py-2 px-3">
        <p class="body-m-bold">{{ props.title }}</p>
        <p
          v-if="props.companyName"
          class="my-2 text-xs font-bold text-rak-blue-1"
        >
          {{ props.companyName }}
        </p>
        <p v-if="props.description" class="body-s-normal">
          {{ props.description }}
        </p>
        <p v-if="props.price" class="body-s-bold">￥{{ props.price }}~</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
})
const state = reactive({})

const handler = {}
</script>
