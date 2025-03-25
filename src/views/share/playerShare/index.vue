<template>
  <div
    class="playerShare-scss"
    style="
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <div style="margin-top: 2vh; width: 100%">
      <van-button
        size="large"
        type="success"
        block
        color="linear-gradient(to right, #50c8dc, #68d0ac)"
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
          v-if="deviceType"
        >
          <img
            src="/images/playerShare/logo_pinoy.png"
            alt="btn_open"
            style="width: 32%; padding-left: 1%"
          />
          <img
            src="/images/playerShare/loading_android.png"
            alt="loading_android"
            style="
              width: 50%;
              padding-right: 1%;
              margin-left: auto;
              height: 10%;
            "
          />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
          v-else
        >
          <img
            src="/images/playerShare/logo_mania.png"
            alt="btn_open"
            style="width: 33%; padding-left: 1%"
          />
          <img
            src="/images/playerShare/loading_ios.png"
            alt="loading_android"
            style="
              width: 36%;
              padding-right: 3%;
              margin-left: auto;
              height: 10%;
            "
          />
        </div>
      </van-button>
    </div>

    <!-- 跳转按钮 -->
    <div style="margin-top: 70vh; width: 50%">
      <van-button
        @click="copyContent"
        size="large"
        type="success"
        block
        color="linear-gradient(to right, #50c8dc, #68d0ac)"
        style="
          background-size: cover;
          background-position: center;
          height: 150px;
          border: none;
          color: transparent;
          box-shadow: none;
        "
      >
        <img
          src="/images/playerShare/btn_open.png"
          alt="btn_open"
          class="animated-image"
        />
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import useClipboard from "vue-clipboard3";
//mod
// import { AesManager } from "@/utils/AesManager";
import { showDialog } from "vant";
import { AesManager } from "../../../utils/AesManager";

//图片
// import btn_open from "" //打开游戏按钮

// ----------------------------------------------------------------------- 属性start
const route = useRoute();

const sToken = ref();
const sShowInfo = ref();
const sScene = ref();
const sInviteCode = ref();

// ----------------------------------------------------------------------- 属性end

onMounted(() => {
  onOpenThisPage();
});

//判断设备类型是不是安卓，android:true ios:false
const deviceType = computed(() => {
  const isAndroid =
    navigator.userAgent.match(/iphone|ipod|ipad|Android/i) == "Android";
  return isAndroid ? true : false;
});

// const leftTopLogo = computed(() => {
//   const isAndroid =
//     navigator.userAgent.match(/iphone|ipod|ipad|Android/i) == "Android";
//   return isAndroid
//     ? "/images/playerShare/logo_pinoy.png"
//     : "/images/playerShare/logo_mania.png";
// });
//
// const rightTopLog= computed(() => {
//   const isAndroid =
//     navigator.userAgent.match(/iphone|ipod|ipad|Android/i) == "Android";
//   return isAndroid
//     ? "/images/playerShare/loading_android.png"
//     : "/images/playerShare/loading_ios.png";
// });

const onOpenThisPage = () => {
  sToken.value = route.query.token;
  sShowInfo.value = route.query.showInfo;
  sScene.value = route.query.scene;
  sInviteCode.value = route.query.invite;
  if (sInviteCode.value) {
    sInviteCode.value = sInviteCode.value.replace(/ /g, "+");
    sInviteCode.value = AesManager.decrypt(sInviteCode.value);
    sInviteCode.value = "-###" + sInviteCode.value + "###-";
  }
};

const canUseUniversalLink = () => {
  let iOSMatch = navigator.userAgent.match(/iphone|ipod|ipad/i);
  if (iOSMatch) {
    if (navigator.userAgent.match(/micromessenger/i)) {
      return false;
    }
    const versionMatch = navigator.userAgent.match(/ os (\d+)/i);
    const v = parseInt(versionMatch[1]);
    if (!isNaN(v) && v >= 9) {
      return true;
    }
  }
  return false;
};

const goToDownload = () => {
  let call_back_url = "https://www.tongitspinoy.com/"; // 唤醒app后的回调
  if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
    location.href = call_back_url; // 'https://apps.apple.com/us/app/id1507313633'
  } else {
    location.href = call_back_url; // 'https://play.google.com/store/apps/details?id=com.mrpoker.homegame.texasholdem'
  }
};

const callSchema = (schema) => {
  if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
    location.href = schema;
  } else {
    let iframe = document.createElement("iframe");
    iframe.className = "invisible-iframe";
    iframe.src = schema;
    document.body.appendChild(iframe);
  }
};

const onWeekApp = () => {
  let token = sToken.value;
  let scene = sScene.value;

  let schema = `com.tongits.playpinoy://tongitspinoy?token=${encodeURIComponent(
    token
  )}&scene=${scene}`;
  let shouldUseComplexSchema = false;

  const androidChromeMatch = navigator.userAgent.match(
    /android\s.+chrome\/(\d+)/i
  );
  if (androidChromeMatch) {
    const version = parseInt(androidChromeMatch[1]);
    if (version >= 25) {
      // android chrome 25 or later requires more complex schema
      shouldUseComplexSchema = true;
    }
  }

  if (navigator.userAgent.match(/micromessenger|baidubrowser/i)) {
    // 微信、qq、百度游览器等，不能进行唤醒
    showDialog({ message: "Please use the viewer to open." });
  } else if (shouldUseComplexSchema) {
    schema = `intent://tongitspinoy?token=${encodeURIComponent(
      token
    )}&scene=${scene}#Intent;scheme=com.tongits.playpinoy;package=com.tongits.playpinoy;S.browser_fallback_url=${encodeURIComponent(
      "https://www.tongitspinoy.com/"
    )};end`;
    location.href = schema;
    setTimeout(goToDownload, 600);
  } else {
    callSchema(schema);
    setTimeout(goToDownload, 600);
  }
};

const onClick = () => {
  if (!canUseUniversalLink()) {
    onWeekApp();
  }
};

const { toClipboard } = useClipboard();
const copyContent = () => {
  toClipboard(sInviteCode.value).catch(() => {
    showDialog({ message: "Error! Please open our website correctly!" });
  });
  onClick();
  // const isAndroid = navigator.userAgent.match(/iphone|ipod|ipad|Android/i) == "Android";
  // alert(isAndroid)
  // if (!isAndroid){
  //   goToDownload()
  // }else {
  //   onClick();
  // }
};

// ----------------------------------------------------------------------- 子组件start
// ----------------------------------------------------------------------- 子组件end
</script>

<style scoped>
.playerShare-scss {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  background-image: url("/images/playerShare/img.png");
}

.animated-image {
  width: 100%;
  animation: grow-shrink 1.5s infinite ease-in-out;
}

@keyframes grow-shrink {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
