<template>
  <div class="playerShare-scss" style='display: flex;display: -webkit-flex;flex-direction: column;align-items: center;'>
    <van-image width='314px' height='151px' src='/images/logo2.png' style='margin-top: 8vh'/>
    <van-image width='375px' height='250px' src='/images/share/share_img_1.png' style='margin-top: 8vh'/>
    <!-- 跳转按钮 -->
    <div style='margin-top: 3vh;width: 50%'>
      <van-button @click="copyContent" size='large' type="success" block color='linear-gradient(to right, #eabf4b, #ffb36d)' style='height: 60px;font-size: 25px'>
        <span>Contact Us</span>
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
	await addPlayerClickCntApi(reqParam);
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
</style>
