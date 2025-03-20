<script setup>
import { RouterView, useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { computed } from "vue";

const route = useRoute();

//根据route.meta.showHeaderFooter决定main的padding-top
const computedStyle = computed(() => {
  return {
    paddingTop: route.meta.showHeaderFooter?'80px':'0px'
  };
});
</script>

<template>
  <div class="main-container">
    <Header v-if="route.meta.showHeaderFooter" class="fixed-header" />
    <main class="content-wrapper" :style="computedStyle">
      <RouterView />
    </main>
    <Footer v-if="route.meta.showHeaderFooter" />
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
  overflow-y: auto;
  /* 根据 Header 的实际高度调整 padding-top */
  padding-top: 80px;
}

/* 固定 Header 的样式 */
::v-deep .fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff; /* 可选背景色 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 可选阴影 */
}
</style>
