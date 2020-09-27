/**
 * 用户相关
 */
import {setLocalStorage, getLocalStorage} from '@/common/js/mUtils'
const state = {
	token: '',
	permissionsList: [],
	userInfo: {},
}
const actions = {

};

const mutations = {
	/**
	 * 更新用户data info数据
	 */
	UPDATE_USER_DATA(state, data) {
		state.userData = {...data}
		// 存储状态
		mutations['SAVE_USER_TO_LOCAL'](state)
	},
	/**
	 * 更新oauth相关
	 */
	UPDATE_USER_TOKEN(state, data) {
		state.token = data || ''
		// 存储状态
		mutations['SAVE_USER_TO_LOCAL'](state)
	},
	/**
	 * 更新个人权限相关
	 * @param state
	 * @param data
	 */
	UPDATE_USER_PERMISSION(state, data) {
		state.permissionsList = data || [];
		// 存储状态
		mutations['SAVE_USER_TO_LOCAL'](state)
	},

	/**
	 * 将user state 数据存储在localstore里面
	 * @param state
	 */
	SAVE_USER_TO_LOCAL(state) {
		setLocalStorage('user', state)
	},
	/**
	 * 从localstorage里取出数据更新user
	 * @param state
	 */
	UPDATE_USER_FROM_LOCAL(state) {
		let user = getLocalStorage('user')
		if (user) {
			for (let key in state) {
				state[key] = user[key]
			}
		}
	}
}


const getters = {
	authorization(state) {
		return state.token ? 'Bearer ' + state.token : ''
	},
	userInfo(state) {
		return state.userInfo
	}
};


export default {
	state,
	actions,
	getters,
	mutations
}