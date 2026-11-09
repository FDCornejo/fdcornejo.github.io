<template>
  <div>
    <v-container class="hero d-flex flex-column justify-center text-center">
      <h1 class="font-oswald text-color2 name">{{ profile.name.toUpperCase() }}</h1>
      <h2 class="text-color1 font-weight-light subtitle">{{ profile.title }}</h2>
      <p class="text-color3 about mx-auto">{{ profile.about }}</p>
    </v-container>

    <v-container v-for="section in sections" :id="section.id" :key="section.id" class="py-8">
      <h2 class="text-h4 text-color2 mb-6">{{ section.title }}</h2>
      <v-row>
        <v-col v-for="item in section.items" :key="item.title" cols="12" md="6">
          <v-card class="h-100 d-flex flex-column" elevation="2" rounded="lg">
            <v-card-title class="text-color3 text-wrap">{{ item.title }}</v-card-title>
            <v-card-text class="text-color2 text-body-1 flex-grow-1">{{ item.description }}</v-card-text>
            <v-card-actions class="justify-end px-4">
              <span class="text-h6 font-weight-regular text-color4">{{ item.date }}</span>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container id="skills" class="py-8 mb-8">
      <h2 class="text-h4 text-color2 mb-6">Skills and Technologies</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="h-100" elevation="2" rounded="lg">
            <v-card-title class="text-color3">Technologies</v-card-title>
            <v-card-text>
              <v-chip
                v-for="tech in technologies"
                :key="tech"
                color="color5"
                variant="flat"
                class="ma-1 text-color3"
              >
                {{ tech }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="h-100" elevation="2" rounded="lg">
            <v-card-title class="text-color3">Languages</v-card-title>
            <v-card-text>
              <v-row class="text-center">
                <v-col v-for="lang in languages" :key="lang.name" cols="4">
                  <h3 class="text-color4">{{ lang.name }}</h3>
                  <span class="text-color3">{{ lang.level }}</span>
                  <v-progress-linear
                    :model-value="lang.value"
                    color="color2"
                    bg-color="color5"
                    height="6"
                    rounded
                    class="mt-2"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { languages, profile, sections, technologies } from '@/data/cv'
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 64px);
}
.name {
  font-size: clamp(3.5rem, 10vw, 7.5rem);
  font-weight: 400;
  line-height: 1.1;
}
.subtitle {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0.5rem 0 1.5rem;
}
.about {
  font-size: clamp(1rem, 2vw, 1.5rem);
  max-width: 900px;
}
</style>
