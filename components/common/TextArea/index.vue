<template>
  <div class="form-input">
    <textarea
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
  textarea {
    width: 100%;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    outline: none;
    color: white;
    height: 160px;
    &::placeholder {
      color: white;
    }
  }
}
</style>
