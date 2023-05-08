<template>
  <div class="form-input">
    <input
      :value="props.value"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeHolder"
      @input="onInput"
      @keydown="onKeyDown"
    />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
    required: true,
    validator: (val: string) => {
      return ["text", "password", "number", "date", "time"].indexOf(val) !== -1;
    },
  },
  value: {
    type: String,
    default: "",
  },
  placeHolder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["input"]);

const onInput = (evt: any) => {
  emit("input", evt.target.value, props.name);
};
</script>

<style lang="scss">
.form-input {
  input {
    width: 100%;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    outline: none;
    color: white;
    &::placeholder {
      color: white;
    }
  }
}
</style>
