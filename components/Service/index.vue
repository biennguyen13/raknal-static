<template>
  <section class="service bg-rak-blue-4 py-[60px]">
    <div class="container mx-auto">
      <ServiceGrid class="mb-[80px]">
        <template v-slot:icon>
          <Tornado />
        </template>
      </ServiceGrid>
      <ServiceGrid>
        <template v-slot:icon>
          <Light />
        </template>
      </ServiceGrid>
    </div>
  </section>
</template>

<script lang="ts">
import VirtualStaging01 from "~/assets/images/VirtualStaging01.png";
import Light from "~/components/common/icons/Light.vue";
import Tornado from "~/components/common/icons/Tornado.vue";
import ServiceGrid from "~/components/Service/ServiceGrid/Grid.vue";

export default {
  name: "Service",
  components: {
    ServiceGrid,
    Tornado,
    Light,
  },
};
</script>
<style></style>
