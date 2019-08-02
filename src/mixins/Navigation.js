import { mapState } from "vuex"
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
    computed: {
        ...mapState(['language'])
    },
    mounted(){
        anchor(".link");
    },
    beforeDestroy(){
       this.body.className = ""; 
    },
    methods: {
        setLanguage(){
            let language_value = "ru";
            if(this.language == "ru"){
                this.lang = "рус"
                language_value = 'en';
            }else{
                this.lang = "eng"
                language_value = 'ru'
            }
            this.$store.commit('setLanguage', language_value);
            this.$i18n.locale = language_value;
        },
    }
}