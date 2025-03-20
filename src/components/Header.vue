<script>
export default {
  methods: {},
};
</script>

<template>
  <div class="header_container">
    <div class="header">
      <div class="header-content">
        <router-link to="home">
          <img src="/logo.png" width="82" height="39" alt="logo" class="logo" />
        </router-link>
        <img src="/cutLine.png" width="1.5" height="35.5" class="divider" />
        <router-link to="home">
          <img
            src="/logo2.png"
            width="82"
            height="39"
            alt="logo"
            class="logo"
          />
        </router-link>
      </div>
    </div>
    <div class="banner">
      <span>Best Tongits Game for Filipinos!</span>
    </div>
  </div>
</template>

<style>
.header_container {
  position: relative;
  margin-bottom: 60px; /* 为 banner 留出空间 */
}

.header {
  background: linear-gradient(to bottom, rgb(0, 147, 239), rgb(0, 135, 234));
  padding: 10px 0;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.logo {
  vertical-align: middle;
}

.divider {
  margin: 0 10px;
}

.banner {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(28, 120, 220, 0.9);
  color: white;
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
}

.banner::before,
.banner::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 15px;
  z-index: 1;
  pointer-events: none;
}

.banner::before {
  top: 0;
  background: linear-gradient(
    to bottom,
    rgba(28, 120, 220, 0.3) 0%,
    rgba(28, 120, 2205, 0) 100%
  );
}

.banner::after {
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(28, 120, 220, 0.3) 0%,
    rgba(28, 120, 220, 0) 100%
  );
}

.banner span {
  position: relative;
  z-index: 2;
}

/* 手机端样式 */
@media (max-width: 768px) {
  .header-content {
    justify-content: center;
    flex-wrap: wrap;
  }

  .banner {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
