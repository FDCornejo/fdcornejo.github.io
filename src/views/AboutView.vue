<template>
  <v-container class="text-center py-12">
    <div class="d-flex justify-center ga-8 mb-8">
      <v-icon :icon="mdiVuejs" size="120" color="#41b883" />
      <v-icon :icon="mdiVuetify" size="120" color="#1867c0" />
    </div>
    <h1 class="text-h3 text-color2 mb-4">About this page</h1>
    <p class="text-body-1 text-color3 mb-6">
      This page was made by {{ profile.fullName }} with the following technologies and is
      published on GitHub Pages.
    </p>
    <v-chip v-for="tech in stack" :key="tech" variant="outlined" color="color2" class="ma-1">
      {{ tech }}
    </v-chip>
  </v-container>
</template>

<script setup>
import { mdiVuejs, mdiVuetify } from '@mdi/js'
import { profile } from '@/data/cv'

const stack = ['Vue 3', 'Vuetify 3', 'Vite', 'Vue Router', 'GitHub Actions', 'GitHub Pages']
</script>
