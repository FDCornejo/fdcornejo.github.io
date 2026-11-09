<template>
  <v-app>
    <AppNav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
</script>

<style>
.font-oswald {
  font-family: 'Oswald', sans-serif;
}
</style>
