import Vue from 'vue';
import apiLogin from '../../config/api';

export default {
    async login({commit}, payload){
        commit('CLEAR_ERROR');
        try{
            const {data} = await apiLogin.post('/auth', payload);
            localStorage.TOKEN = data.token;
            const decodedToken = Vue.$jwt.decode(data.token);
            apiLogin.defaults.headers.common.Authorization = `Bearer ${localStorage.TOKEN}`;
            commit('SET_LOGIN', decodedToken);
        }
        catch(error) {
            commit('SET_ERROR', error.response.data);
        }
    }
}