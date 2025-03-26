<template>
  <div class="playerShare-scss" style='display: flex;display: -webkit-flex;flex-direction: column;align-items: center;'>
    <div style="margin-top: 8vh; width: 80%">
      <van-button
          @click="copyContent"
          size="large"
          type="success"
          block
      >
        <img
            src="/images/logo2.png"
            alt="btn_open"
            style="width: 100%"
        />
      </van-button>
    </div>

    <div style="margin-top: 5vh; width: 90%">
      <van-button
          @click="copyContent"
          size="large"
          type="success"
          block
      >
        <img
            src='/images/share/share_img_1.png'
            alt="btn_open"
            style="width: 100%"
        />
      </van-button>
    </div>

    <!-- 跳转按钮 -->
    <div style='margin-top: 2vh;width: 50%;'>
      <van-button @click="copyContent" size='large' type="success" block style="height: 60px;">
        <div class="btn_down">
          Contact Us
        </div>
      </van-button>
    </div>

    <div style="margin-top: 5vh; width: 80%">
      <van-button
          @click="copyContent"
          size="large"
          type="success"
          block
      >
        <img
            src="/images/share/text2.png"
            alt="btn_open"
            style="width: 100%"
        />
      </van-button>
    </div>

    <van-image width='280px' height='98px' src='/images/share/text2.png' style='margin-top: 3vh'/>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import useClipboard from 'vue-clipboard3';
//mod
import { addPlayerClickCntApi } from '../../../api/shareMgr'

onMounted(() => {
	onOpenThisPage();
});

const onOpenThisPage = () => {
	onRecordClickCnt(1);
};

// 增加点击次数
const onRecordClickCnt = async (nOptype) => {
	let reqParam = {
		nRecordType: nOptype,
	};
	await addPlayerClickCntApi(reqParam).then(res=>{
    console.log(res.data)
  }).catch(error => {
    console.error('Error:', error.response || error.message);  // 错误处理
    throw error;  // 抛出错误，便于调用者处理
  });
};

const { toClipboard } = useClipboard();
const copyContent = () => {
	let sCopyValue = "-@@@1@@@-";
	toClipboard(sCopyValue);
	onRecordClickCnt(2);
	window.location.href = "http://m.me/TP.Game.Rewards.players";
};
</script>

<style scoped>
.playerShare-scss {
  width : 100%;
  height : 100vh;
  background-size: 100% 100%;
  background-image: url("/images/share/bg_big.png");
}

.btn_down {
  font-size: 25px;
  width: 100%;
  background: linear-gradient(to right, #eabf4b, #ffb36d);
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px
}
</style>
