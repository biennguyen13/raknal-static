<template>
  <Header />
  <div class="layout-content"><slot /></div>
  <CommonFooter />
</template>

<script setup lang="ts">
import Header from "~/components/common/Header.vue";
</script>

<style lang="scss">
.layout-content {
  // 93px is height of header
  margin-top: 93px;
}
</style>
