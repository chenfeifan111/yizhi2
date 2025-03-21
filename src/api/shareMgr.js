// import {request} from '@/utils/http'

const API = {
    // checkCustomerLink: '/shareMgr/checkCustomerLink',
    // addPlayerClickCnt: '/shareMgr/recordClickCnt'
    checkCustomerLink: '/customer',
    addPlayerClickCnt: '/addPlayer'
}
// * 验证客服分享链接是否有效
export const checkCustomerLinkApi = (data) =>
// request.post(API.checkCustomerLink, data)
    fetch('https://yizhi2.pages.dev/customer', {
        method: 'POST', // HTTP 方法
        headers: {
            'Content-Type': 'application/json', // 设置请求体格式为 JSON
        },
        body: JSON.stringify({  // 将 JavaScript 对象转化为 JSON 字符串
            name: 'John Doe',
            age: 30
        })
    })
        .then(response => response.json())  // 解析响应体中的 JSON 数据
        .then(data => {
            console.log('Response:', data)  // 打印响应结果
        })
        .catch(error => {
            console.error('Error:', error);  // 错误处理
        });

// * 点解facebook导量界面，增加玩家点击次数
export const addPlayerClickCntApi = (data) =>
// request.post(API.addPlayerClickCnt, data)
{

}