<template>
  <div class="playerShare-scss" style='display: flex;display: -webkit-flex;flex-direction: column;align-items: center;'>
    <van-image width='314px' height='151px' src='/images/logo2.png' style='margin-top: 8vh'/>
    <!-- 跳转按钮 -->
    <div style='margin-top: 35vh;width: 50%'>
      <van-button @click="copyContent" size='large' type="success" block color='linear-gradient(to right, #eabf4b, #ffb36d)' style='height: 60px;font-size: 25px'>
        <span>Download</span>
      </van-button>
    </div>
    <van-image width='280px' height='98px' src='/images/share/text.png' style='margin-top: 5vh'/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useClipboard from 'vue-clipboard3';
import { checkCustomerLinkApi } from '../../../api/shareMgr'
import { showDialog } from 'vant'
import { route } from 'vant/es/composables/use-route'

// ----------------------------------------------------------------------- 属性start

const sCustomerId = ref();
const sCustomerName = ref();
// ----------------------------------------------------------------------- 属性end

onMounted(() => {
	onOpenThisPage();
});

const onOpenThisPage = () => {
	sCustomerId.value = route.query?.customerId ? route.query.customerId : "";
	sCustomerName.value = route.query?.customer ? route.query.customer : "";
	onCheckCustomerLink();
};

// 验证客服链接是否有效
const onCheckCustomerLink = async () => {
	let reqParam = {
		sCustomerId: sCustomerId.value || "",
		sCustomerName: sCustomerName.value || "",
	};
	// await checkCustomerLinkApi(reqParam).then(res=>{
  //   console.log(res)
  // }).catch((code) => {
  //   if (code !== 200) {
  //     showDialog({ message: "The activity link has expired."})
  //   }
  // });
  await checkCustomerLinkApi(reqParam)


};

const { toClipboard } = useClipboard();
const copyContent = () => {
	let sCopyValue = "-$$$" + sCustomerId.value + "$$$-";
	toClipboard(sCopyValue);
	window.location.href = "https://play.google.com/store/apps/details?id=com.tongits.playpinoy";
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
