<template>
  <div class="flex mt-3">
    <button
      class="w-[36px] h-[36px] rounded-lg bg-rak-blue-5 flex items-center justify-center rotate-90"
      @click="handler.onClickMinus(10)"
    >
      <common-icons-chevron-down />
    </button>
    <div class="px-1 flex-grow mx-2 rounded-lg bg-rak-blue-5 h-[36px]">
      <input type="range" v-model="value" />
    </div>
    <button
      class="w-[36px] rounded-lg bg-rak-blue-5 flex items-center justify-center rotate-270"
      @click="handler.onClickPlus(10)"
    >
      <common-icons-chevron-down :fill="'#014BF4'" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["modelValue"])
const emit = defineEmits(["update:modelValue"])

let value = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit("update:modelValue", Number(value))
  },
})

const handler = {
  onClickPlus(value: number) {
    emit(
      "update:modelValue",
      Number(props.modelValue) + value > 100 ? 100 : props.modelValue + value
    )
  },
  onClickMinus(value: number) {
    emit(
      "update:modelValue",
      Number(props.modelValue) - value < 0 ? 0 : props.modelValue - value
    )
  },
}
</script>

<style scoped lang="scss">
input[type="range"] {
  -webkit-appearance: none;
  @apply w-full;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  @apply w-full h-[36px] cursor-pointer;
  cursor: pointer;
  @apply bg-rak-blue-5;
}
input[type="range"]::-webkit-slider-thumb {
  @apply w-[302px] h-[36px] cursor-pointer;
  background: url("~/assets/scrollbutton.svg") center center no-repeat;
  -webkit-appearance: none;
}
</style>
