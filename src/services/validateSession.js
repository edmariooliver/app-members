import { createToast } from "mosha-vue-toastify";
import router from '@/router/index.js'

const validateSession = () =>  {
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == "" || localStorage.getItem('token') == undefined) {
        router.push("login")
    }
}

export default validateSession