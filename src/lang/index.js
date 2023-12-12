import {createI18n} from "vue-i18n"

import zh_cn from "./zh_cn.js"
import zh_hk from "./zh_hk"
import en from "./en.js"

const i18n = createI18n({
    locale:'zh_cn',
    messages:{
        zh_cn,
        zh_hk,
        en
    }
})

export default i18n
