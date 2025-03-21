import {request} from '@/utils/http'

const API = {
    // checkCustomerLink: '/shareMgr/checkCustomerLink',
    // addPlayerClickCnt: '/shareMgr/recordClickCnt'
    checkCustomerLink: '/customer',
    addPlayerClickCnt: '/addPlayer'
}
// * 验证客服分享链接是否有效
export const checkCustomerLinkApi = (data) =>
request.post(API.checkCustomerLink, data)
// * 点解facebook导量界面，增加玩家点击次数
export const addPlayerClickCntApi = (data) =>
request.post(API.addPlayerClickCnt, data)