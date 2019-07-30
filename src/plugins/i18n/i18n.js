import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from './languages/ru.js'
import en from './languages/en.js'

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'ru',
    messages: {
        ru,
        en
    }
});