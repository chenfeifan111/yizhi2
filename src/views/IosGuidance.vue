<script>
export default {
  methods: {},
};
</script>

<template>
  <div class="img_box">
    <img src="/guide.png" alt="guide" />
  </div>
</template>

<style scoped>
.img_box {
  width: 100%;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .img_box img {
    width: 100%;
  }
}
@media screen and (min-width: 768px) {
  .img_box img {
    width: 750px;
  }
}
</style>
