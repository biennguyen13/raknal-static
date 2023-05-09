<template>
  <Teleport to="body">
    <div
      v-if="props.keepAlive || value"
      v-show="value"
      class="modal fixed w-full h-full bg-rak-black/50 top-0 left-0 flex justify-center items-center"
      :style="{ zIndex: 9999 }"
    >
      <div class="max-w-[800px] mx-4 md:mx-[73px] w-full relative max-h-[90vh]">
        <button
          class="absolute -top-12 md:top-2 right-2 md:right-[-70px]"
          @click="value = false"
        >
          <CommonIconsClose
            class="close w-[27px] h-[27px] md:w-[43px] md:h-[43px]"
          />
        </button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "Modal",
}
</script>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  keepAlive: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(["update:modelValue"])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit("update:modelValue", value)
  },
})
</script>

<style lang="scss" scoped>
.close:deep {
  path {
    fill: white !important;
  }
}
</style>
