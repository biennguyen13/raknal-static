<template>
  <div class="common-table max-w-max">
    <div class="flex">
      <div class="w-[132px]">
        <table class="rounded-l-3xl w-full overflow-hidden">
          <tr>
            <td class="bg-rak-gray-3 text-white body-s-bold"></td>
          </tr>
          <tr v-for="(leading, index) in props.leadings" :key="index">
            <td class="bg-rak-gray-3 text-white body-s-bold">
              {{ leading }}
            </td>
          </tr>
        </table>
      </div>
      <div
        ref="tableRef"
        class="common-table__inner-table overflow-x-auto"
        v-on:scroll.passive="handler.onscroll"
      >
        <table class="rounded-r-3xl overflow-hidden">
          <tr>
            <th
              v-for="(heading, index) in props.headings"
              :key="index"
              class="bg-rak-gray-3 text-white body-s-bold"
              :colspan="heading.colspan"
            >
              {{ heading.label }}
            </th>
          </tr>
          <tr v-for="(data, index) in props.datas" :key="index">
            <td v-for="(dat, indx) in data" :key="indx">
              {{ dat }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- scroll bar -->
    <CommonTableScrollbar v-model="state.scrollValue" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Table",
};
</script>

<script lang="ts" setup>
const props = defineProps({
  leadings: {
    Array,
    default: [
      "プラン/オプション",
      "静止画",
      "パノラマ",
      "家具指定",
      "個別アセット作成",
    ],
  },
  headings: {
    Array,
    default: [
      { label: "請求書払い", colspan: 1 },
      { label: "チケット払い（都度購入）", colspan: 2 },
      { label: "チケット払い（都度購入）", colspan: 2 },
      { label: "チケット払い（都度購入）", colspan: 2 },
      { label: "チケット払い", colspan: 1 },
      { label: "チケット払い", colspan: 1 },
      { label: "チケット払い", colspan: 1 },
      { label: "チケット払い", colspan: 1 },
      { label: "チケット払い", colspan: 1 },
    ],
  },
  datas: {
    Array,
    default: [
      [
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
      ],
      [
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
      ],
      [
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
      ],
      [
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
      ],
      [
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
        "1枚",
      ],
    ],
  },
});
const state = reactive({
  scrollValue: 0,
});
const tableRef = ref<HTMLElement>();

watch(
  () => state.scrollValue,
  () => {
    const table = tableRef.value;
    if (!table) return;
    table.scrollTo(
      (table.scrollWidth - table.clientWidth) * (state.scrollValue / 100),
      0
    );
  }
);

const handler = {
  onscroll(e: any) {
    const table = e.target;
    state.scrollValue =
      (table.scrollLeft / (table.scrollWidth - table.clientWidth)) * 100;
  },
};
</script>

<style lang="scss" scoped>
.common-table {
  &__inner-table {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0;
      height: 0;
    }
  }
}

table {
  border-collapse: collapse;
}

td,
th {
  @apply border-4  px-1 text-center h-[60px] min-w-[132px] border-white;
}
tr:nth-child(even) {
  @apply bg-rak-blue-4;
}
tr:nth-child(odd) {
  @apply bg-rak-blue-3;
}
.common-table {
  &__inner-table {
  }
}
</style>
