<template>
  <div class="slide-item" :class="{ active: props.item.active }">
    <img :src="props.item.src" alt="some string" />
    <Expand />
  </div>
</template>

<script lang="ts">
import Expand from "~/components/common/icons/Expand.vue";

export default {
  name: "SlideItem",
  components: {
    Expand,
  },
};
</script>

<script setup lang="ts">
const props = defineProps({
  item: { type: Object, default: () => {} },
});

const emit = defineEmits(["onChangeSlide"]);
</script>

<style lang="scss">
.slide-item {
  // 19 is padding left + right
  width: calc(100% / 5 - 19px);
  cursor: pointer;
  transition: 0.4s ease;
  position: relative;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
  }

  &.active {
    img {
      @apply border-[4px] border-rak-blue-1;
    }
  }

  &:hover {
    @apply brightness-90;

    svg {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
