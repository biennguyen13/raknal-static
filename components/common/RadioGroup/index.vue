<template>
  <div :class="classes">
    <label v-for="r in radioDataArray" :key="r.value">
      <input
        type="radio"
        :value="r.value"
        :name="groupName"
        :disabled="disabled"
        @change="$emit('input', $event)"
      />
      <span class="check-box"> </span>
      <span class="text-white label">{{ r.label }}</span>
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
  disable: {
    type: Boolean,
    default: false,
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
    position: relative;
    &:not(:first-child) {
      margin-top: 1.2rem;
    }
    cursor: pointer;
    input {
      opacity: 0;
      visibility: hidden;
      width: 0;
      cursor: pointer;

      input:checked::before {
        background: black;
      }
    }

    input:checked ~ span.check-box {
      @apply bg-white;
    }

    span.check-box {
      width: 20px;
      height: 20px;
      border: 2px solid #fff;
      border-radius: 50%;
    }

    span.label {
      margin-left: 8px;
      font-size: 16px;
    }
  }
}
</style>
