<template>
  <v-app-bar color="transparent" flat>
    <v-app-bar-nav-icon
      :icon="mdiAccountCircle"
      size="large"
      color="color2"
      aria-label="Show contact info"
      @click.stop="drawer = !drawer"
    />
  </v-app-bar>

  <!-- null: open on desktop, closed on mobile -->
  <v-navigation-drawer v-model="drawer" color="color4" theme="dark" width="280">
    <div class="d-flex justify-end d-sm-none pa-2">
      <v-btn :icon="mdiClose" variant="text" aria-label="Close" @click.stop="drawer = false" />
    </div>

    <div class="text-center pt-6">
      <v-avatar size="180" class="cursor-pointer" @click="router.push('/')">
        <v-img :src="photo" alt="Daniel Cornejo" cover position="50% 25%" />
      </v-avatar>
      <h2 class="text-h5 mt-6 mb-2">Contact</h2>
    </div>

    <v-list density="comfortable" bg-color="transparent">
      <v-list-item :prepend-icon="mdiEmail" :href="`mailto:${contact.email}`" :title="contact.email" />
      <v-list-item :prepend-icon="mdiMapMarker" :title="contact.location" />
      <v-list-item
        :prepend-icon="mdiLinkedin"
        :href="contact.linkedin"
        target="_blank"
        rel="noopener"
        title="LinkedIn"
      />
      <v-list-item
        :prepend-icon="mdiCellphone"
        :href="`tel:${contact.phone.replaceAll(' ', '')}`"
        :title="contact.phone"
      />
    </v-list>

    <template #append>
      <div class="bg-color2 pa-3 d-flex align-center">
        <v-btn :icon="mdiHome" variant="text" to="/" aria-label="Home" />
        <v-btn variant="text" to="/about">This page</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  mdiAccountCircle,
  mdiCellphone,
  mdiClose,
  mdiEmail,
  mdiHome,
  mdiLinkedin,
  mdiMapMarker,
} from '@mdi/js'
import photo from '@/assets/me.jpg'
import { contact } from '@/data/cv'

const router = useRouter()
const drawer = ref(null)
</script>
