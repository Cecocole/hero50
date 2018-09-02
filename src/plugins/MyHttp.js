import axios from 'axios';

const MyHttp = {};
// Vue的插件应该提供一个 install方法
MyHttp.install = function(Vue){
    axios.defaults.baseURL = 'http://localhost:3000/';
    Vue.prototype.$http = axios;
}
export default MyHttp;