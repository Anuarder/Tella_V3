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
                    @click="clickLanguage">
                    {{lang}}
                </div>
            </div>
            <div class="navigation__burger-button">
                <img 
                    src="@/assets/menu_button.svg" 
                    alt="sidebar"
                    @click="sidebar = true">
            </div>
        </div>
        <v-sidebar 
            v-if="sidebar" 
            @close="sidebar = false">
        </v-sidebar>
    </div>
</template>
<script>
import "./navigation.scss"
import VSidebar from "../Sidebar/Sidebar"
import NavigationMixin from "@/mixins/Navigation"
export default {
    mixins: [NavigationMixin],
    components: {
        VSidebar
    },
    data(){
        return{
            sidebar: false,
        }
    }
}
</script>
