const API = {
    // checkCustomerLink: '/shareMgr/checkCustomerLink',
    // addPlayerClickCnt: '/shareMgr/recordClickCnt'
    checkCustomerLink: '/customer',
    addPlayerClickCnt: '/addPlayer'
}
// * 验证客服分享链接是否有效
export const checkCustomerLinkApi = (data) =>
    // request.post(API.checkCustomerLink, data)
    fetch('https://yizhi2.pages.dev'+API.checkCustomerLink, {
        method: 'POST', // HTTP 方法
        headers: {
            'Content-Type': 'application/json', // 设置请求体格式为 JSON
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())  // 解析响应体中的 JSON 数据
        .then(data => {
            console.log(data)  // 打印响应结果
        })
        .catch(error => {
            console.error('Error:', error);  // 错误处理
        });

// * 点解facebook导量界面，增加玩家点击次数
export const addPlayerClickCntApi = (data) =>
// request.post(API.addPlayerClickCnt, data)
    fetch('https://yizhi2.pages.dev'+API.addPlayerClickCnt, {
        method: 'POST', // HTTP 方法
        headers: {
            'Content-Type': 'application/json', // 设置请求体格式为 JSON
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())  // 解析响应体中的 JSON 数据
        .then(data => {
            console.log(data)  // 打印响应结果
        })
        .catch(error => {
            console.error('Error:', error);  // 错误处理
        });