<template>
  <div class="flex itmes-center">
    <label class="text-white mr-[10px] text-[20px]">
      {{ props.label }}
    </label>
    <span
      v-if="props.require"
      class="text-rak-blue-1 bg-white px-[8px] py-[4px] rounded-[50px]"
    >
      必須
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Label",
};
</script>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  require: {
    type: Boolean,
    default: true,
  },
});
</script>

<style></style>
