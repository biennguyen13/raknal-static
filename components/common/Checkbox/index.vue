<template>
  <label class="custom-checkbox text-white">
    <input :value="props.value" @change="onChange" type="checkbox" />
    <span class="checkmark"> </span>

    <span class="ml-[13px] label-text">
      <slot />
    </span>
  </label>
</template>

<script lang="ts" setup>
import { ComputedGetter } from "nuxt/dist/app/compat/capi";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["input"]);

const onChange = () => {
  emit("input", props.value);
};
</script>

<style lang="scss">
.custom-checkbox {
  display: flex;
  align-items: center;

  .checkmark {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    background-color: #fff;

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 34%;
      top: 15%;
      width: 35%;
      height: 60%;
      border-right: 2px solid #014bf4;
      border-bottom: 2px solid #014bf4;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
    }
  }

  input {
    position: absolute;
    display: none;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark:after {
      display: block;
    }

    &:disabled ~ .label-text {
      cursor: default;
    }

    &:disabled ~ .checkmark {
      cursor: default;
    }
  }
}
</style>
