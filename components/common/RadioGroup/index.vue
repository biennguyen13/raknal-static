<template>
  <div :class="classes">
    <label v-for="r in radioDataArray" :key="r.value">
      <input
        type="radio"
        :name="props.groupName"
        :value="r.value"
        v-model="modelValue"
        :disabled="disabled"
        @change="$emit('input', modelValue)"
      />
      <span class="text-white">{{ r.label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "RadioGroup",
};
</script>

<script lang="ts" setup>
interface IRadioData {
  label: string;
  value: string;
}

const props = defineProps({
  groupName: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  radioDataArray: {
    type: Array as PropType<IRadioData[]>,
    default: () => [],
  },
});

const classes = computed(() => {
  return {
    [`radio-group`]: true,
  };
});
</script>

<style lang="scss">
.radio-group {
  label {
    display: flex;
    &:not(:first-child) {
      margin-top: 1.2rem;
    }
    cursor: pointer;
    input {
      cursor: pointer;
      border: 2px solid #ffffff;
    }
    span {
      margin-left: 8px;
      font-size: 16px;
    }
  }
}
</style>
