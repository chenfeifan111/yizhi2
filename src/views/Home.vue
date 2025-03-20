<script>
export default {
  data() {
    return {
      isIOS: false,
      isMobile: false,
    };
  },
  created() {
    this.checkDevice();
  },
  methods: {
    checkDevice() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // 检测iOS设备
      this.isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

      // 检测移动端设备
      this.isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="img_box">
      <img class="img_box2" src="/role.png" alt="role" />
    </div>
    <div class="introduction_box">
      <ul>
        <li>Enjoy fun of Tongits, Pusoy, Colorgame, Poker</li>
        <li>Play with family and friends</li>
        <li>Fair game, no collusion</li>
        <li>Massive rewards, free loads</li>
      </ul>
    </div>

    <!-- 非移动端显示全部 -->
    <template v-if="!isMobile">
      <div class="tips_box">
        <img
          class="home_img"
          src="/ios_install_tips_1.png"
          alt="ios install tips"
        />
      </div>
      <div class="download_box">
        <div>
          <a
            target="_blank"
            href="https://apps.apple.com/ph/app/tongits-mania/id6742527198?platform=iphone"
          >
            <img
              class="home_img home_img_m"
              src="/btn_ios_1.png"
              alt="ios install"
            />
          </a>
        </div>
        <div>
          <a
            href="https://res.tongitspinoy.com/TongitsPinoy.apk"
            target="_blank"
          >
            <img
              class="home_img home_img_m"
              src="/btn_android_1.png"
              alt="android install"
            />
          </a>
        </div>
        <div>
          <a
            href="https://play.google.com/store/apps/details?id=com.tongits.playpinoy"
            target="_blank"
          >
            <img
              class="home_img home_img_m"
              src="/btn_google_1.png"
              alt="google playStore install"
            />
          </a>
        </div>
      </div>
    </template>

    <!-- 移动端显示 -->
    <template v-else>
      <div class="tips_box" v-if="isIOS">
        <img
          class="home_img"
          src="/ios_install_tips_1.png"
          alt="ios install tips"
        />
      </div>
      <div class="download_box">
        <div v-if="isIOS">
          <a
            target="_blank"
            href="https://apps.apple.com/ph/app/tongits-mania/id6742527198?platform=iphone"
          >
            <img
              class="home_img home_img_m"
              src="/btn_ios_1.png"
              alt="ios install"
            />
          </a>
        </div>
        <template v-if="!isIOS">
          <div>
            <a
              href="https://res.tongitspinoy.com/TongitsPinoy.apk"
              target="_blank"
            >
              <img
                class="home_img home_img_m"
                src="/btn_android_1.png"
                alt="android install"
              />
            </a>
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.tongits.playpinoy"
              target="_blank"
            >
              <img
                class="home_img home_img_m"
                src="/btn_google_1.png"
                alt="google playStore install"
              />
            </a>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
.img_box {
  text-align: center;
  margin: 15px auto 0 auto;
}

.img_box2 {
  object-fit: contain;
  max-width: 60%;
}

.home_img {
  object-fit: contain;
  max-width: 50%;
}

.home_img_m {
  margin: 0 auto 18px auto;
}

.introduction_box {
  text-align: center;
  margin: 0 auto 18px auto;
}
.introduction_box ul {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
}
.introduction_box li {
  text-align: left;
  margin-bottom: 10px;
  padding-left: 15px;
  color: white;
  font-size: 14px;
  background: url(/point.png) no-repeat 0 6px;
  background-size: 5px 5px;
}
.tips_box {
  text-align: center;
  margin-top: 20px;
}
.download_box {
  text-align: center;
}

@media (min-width: 768px) {
  .home_img {
    width: 15%;
  }
}
</style>
