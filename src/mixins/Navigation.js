// import { mapState } from "vuex"
import anchor from "@/plugins/AnchorTarget/Anchor"
export default {
    data(){
        return{
            navigation_links: [
                {
                    title: "navigation.about",
                    href: "#about"
                },
                {
                    title: "navigation.projects",
                    href: "#projects"
                },
                {
                    title: "navigation.team",
                    href: "#team"
                },
                {
                    title: "navigation.contacts",
                    href: "#contacts"
                },
            ],
            lang: "eng",
        }
    },
    mounted(){
        anchor(".link", ".section");
    },
    beforeDestroy(){
       this.body.className = ""; 
    },
    created(){
        this.loadLanguage(localStorage.getItem('lang'));
    },
    methods: {
        setLanguage(value){
            localStorage.setItem('lang', value);
            this.$i18n.locale = value;
        },
        loadLanguage(value){
            if(value){
                if(value == "en"){
                    this.lang = "рус";
                }else{
                    this.lang = "eng"
                }
                this.setLanguage(value);
            }else{
                const userLang = navigator.language || navigator.userLanguage; 
                let lang = null;
                if(userLang == "ru-RU"){
                    lang = "ru";
                }else{
                    lang = "en";
                }
                this.setLanguage(lang);
            }
        },
        clickLanguage(){
            let language_value = "ru";
            if(this.lang == "eng"){
                this.lang = "рус";
                language_value = 'en';
            }else{
                this.lang = "eng"
                language_value = 'ru'
            }
            this.setLanguage(language_value);
        }
    }
}