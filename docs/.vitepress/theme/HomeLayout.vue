<script setup>
import Theme from 'vitepress/theme'

const { Layout } = Theme
</script>

<template>
  <Layout>
    <template v-slot:home-hero-info-after>
      <i><p class="aboutme">Hi! Welcome to my portfolio &#128516;</p></i>
      <i><p class="aboutme">I primarily focus on UI/UX design and web development and have multiple professional experiences in these areas! In my free time, I enjoy capturing the world through digital photography!</p></i>
    </template>
  </Layout>
</template>

<style scoped>
.aboutme {
  color: 	var(--vp-c-text-2);
  margin: 8px 0px;
}
</style>
