<template>
    <div class="navigation-component">
        <div class="navigation">
            <div class="navigation__logo">
                <a href="#header" class="link">
                    <img src="@/assets/header_logo.svg" alt="logo">
                </a>
            </div>
            <div class="navigation__actions">
                <div class="navigation__links">
                    <a 
                        v-for="(item, i) in navigation_links"
                        :key="i"
                        class="navigation__link link"
                        :href="item.href">
                        {{$t(item.title)}}
                    </a>
                </div>
                <div 
                    class="navigation__language-switch"
                    @click="setLanguage">
                    {{lang}}
                </div>
            </div>
            <div class="navigation__burger-button">
                <img src="@/assets/menu_button.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import "./navigation.scss"
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
            lang: "eng"
        }
    },
    computed: {
        ...mapState(['language'])
    },
    mounted(){
        anchor(".link");
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
        }
    }
}
</script>
