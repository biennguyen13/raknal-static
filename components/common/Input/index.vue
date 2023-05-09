<template>
  <div class="form-input">
    <input
      v-model="value"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeHolder"
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
    validator: (val: string) => {
      return ["text", "password", "number", "date", "time"].indexOf(val) !== -1;
    },
  },
  modelValue: {
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

const emit = defineEmits(["update:modelValue"]);

let value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
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
