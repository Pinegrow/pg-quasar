<script setup lang="ts">
  import { ref } from 'vue'
  import { useMeta } from 'quasar'
  import { heroImageUrl } from '@/utils/hero'

  const pageMeta = {
    // layout: 'default',
    // name: 'new-page',
    // alias: 'new-page',
    title: ref('Home'),
    description: 'Quasar Weather App',
    // hidden: true,
    navOrder: '1',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  }

  useMeta(() => {
    return {
      title: pageMeta.title.value,
    }
  })
</script>

<template>
  <q-page>
    <div>
      <div
        style="
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding-top: 1.5rem /* 24px */;
          padding-bottom: 1.5rem /* 24px */;
        "
      >
        <DarkModeSwitch /><span style="margin-left: 0.5rem; /* 8px */"
          >A Fresh Start!</span
        >
      </div>
    </div>
  </q-page>
</template>
