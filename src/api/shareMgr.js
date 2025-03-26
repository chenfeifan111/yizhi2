const API = {
    checkCustomerLink: '/shareMgr/checkCustomerLink',
    addPlayerClickCnt: '/shareMgr/recordClickCnt'
}

import {postApi} from "../utils/PostApi"

// * 验证客服分享链接是否有效
export const checkCustomerLinkApi = (data) => postApi(API.checkCustomerLink, data);

// * 点解facebook导量界面，增加玩家点击次数
export const addPlayerClickCntApi = (data) => postApi(API.addPlayerClickCnt, data);


// // * 验证客服分享链接是否有效
// export const checkCustomerLinkApi = (data) =>
//     fetch('https://yizhi2.pages.dev/public', {
//         method: 'POST', // HTTP 方法
//         headers: {
//             'Content-Type': 'application/json', // 设置请求体格式为 JSON
//         },
//         body: JSON.stringify({
//             "path":"/web_client"+API.checkCustomerLink,
//             "env":import.meta.env.VITE_ENV,
//             "data":data
//         })
//     })
//         .then(response => response.json())  // 解析响应体中的 JSON 数据
//         .then(data => {
//             console.log(data)  // 打印响应结果
//         })
//         .catch(error => {
//             console.error('Error:', error);  // 错误处理
//         });
//
// // * 点解facebook导量界面，增加玩家点击次数
// export const addPlayerClickCntApi = (data) =>
//     fetch('https://yizhi2.pages.dev/public', {
//         method: 'POST', // HTTP 方法
//         headers: {
//             'Content-Type': 'application/json', // 设置请求体格式为 JSON
//         },
//         body: JSON.stringify({
//             "path":"/web_client"+API.addPlayerClickCnt,
//             "env":import.meta.env.VITE_ENV,
//             "data":data
//         })
//     })
//         .then(response => response.json())  // 解析响应体中的 JSON 数据
//         .then(data => {
//             console.log(data)  // 打印响应结果
//         })
//         .catch(error => {
//             console.error('Error:', error);  // 错误处理
//         });




