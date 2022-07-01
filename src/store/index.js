import Vue from 'vue';
import Vuex from 'vuex';
import Login from './Login/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Login,
    }
});

export default store;
