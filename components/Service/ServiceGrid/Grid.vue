<template>
  <div class="service-grid">
    <div class="service-grid__heading mb-[30px] flex">
      <div class="service-grid__heading-icon">
        <slot name="icon" />
      </div>
      <h2>こんな悩みありませんか？</h2>
    </div>
    <div class="grid gap-8 grid-cols-1 md:grid-cols-3">
      <ServiceGridItem />
      <ServiceGridItem />

      <ServiceGridItem />
    </div>
  </div>
</template>

<script>
import ServiceGridItem from "~/components/Service/ServiceGrid/GridItem.vue";

export default {
  name: "ServiceGrid",
  components: {
    ServiceGridItem,
  },
};
</script>

<style></style>
