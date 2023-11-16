<template>
  <base-layout>
    <template #header>
      <site-header />
    </template>
    <template #default>
      <router-view />
    </template>
    <template #footer>
      <site-footer />
    </template>
  </base-layout>
</template>

<script setup>
import BaseLayout from '@/layouts/template/BaseLayout.vue';
import SiteHeader from '@/layouts/inc/SiteHeader.vue';
import SiteFooter from '@/layouts/inc/SiteFooter.vue';
</script>

<style scoped></style>
