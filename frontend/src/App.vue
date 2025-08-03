<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
  <VueQueryDevtools />
</template>
