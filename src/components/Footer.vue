<script>
export default {
  methods: {},
};
</script>

<template>
  <div class="footer_container">
    <div class="footer_content">
      <div class="cp">
        <router-link to="termsOfService">Terms of Service</router-link> |
        <router-link to="privacyPolicy">Privacy Policy</router-link> |
        <router-link to="cookie">Cookie</router-link>
      </div>
      <div class="cp">
        <router-link to="refundPolicy">Refund Policy</router-link> |
        <router-link to="contactUs">Contact Us</router-link>
      </div>
      <div class="cp">©{{ new Date().getFullYear() }} Tongits Pinoy</div>
      <div class="cp footer_fb">
        <img alt="facebook" height="20" src="/fb.png" width="19.5" />
        <a href="https://www.facebook.com/TongitsPinoyOfficial"
        >@TongitsPinoyOfficial</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.footer_container {
  /* 关键样式 */
  margin-top: auto;
  width: 100%;
  z-index: 1;
}

.footer_content {
  background-color: #0177dc;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
  width: 100%;
}

.cp {
  margin-bottom: 10px;
}

.cp img {
  vertical-align: middle;
}

.cp a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}

.footer_fb a {
  color: white;
  vertical-align: middle;
  text-decoration: underline;
  font-size: 14px;
}


</style>