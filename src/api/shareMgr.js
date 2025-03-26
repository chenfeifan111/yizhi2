const API = {
    checkCustomerLink: '/shareMgr/checkCustomerLink',
    addPlayerClickCnt: '/shareMgr/recordClickCnt'
}

import {postApi} from "../utils/PostApi"

// * 验证客服分享链接是否有效
export const checkCustomerLinkApi = (data) => postApi(API.checkCustomerLink, data);

// * 点解facebook导量界面，增加玩家点击次数
export const addPlayerClickCntApi = (data) => postApi(API.addPlayerClickCnt, data);





