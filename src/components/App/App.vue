<template>
    <div class="app-page">
            
        <v-navigation></v-navigation>
        <div class="app">
            <div id="header" class="scrollmagic__el-1">
                <v-header></v-header>
            </div>
            <div id="about" class="section scrollmagic__el-2">
                <v-about></v-about>
            </div>
            <div id="services" class="scrollmagic__el-3">
                <v-services></v-services>
            </div>
            <div id="projects" class="section scrollmagic__el-4">
                <v-projects></v-projects>
            </div>
            <div id="clients" class="scrollmagic__el-5">
                <v-clients></v-clients>
            </div>
            <div id="team" class="section scrollmagic__el-6">
                <v-team></v-team>
            </div>
            <div id="meeting" class="section scrollmagic__el-7">
                <v-meeting></v-meeting>
            </div>
            <div id="contacts" class="scrollmagic__el-8">
                <v-contacts></v-contacts>
            </div>
        </div>
    </div>
</template>
<script>
import ScrollMagic from "scrollmagic"
import "./app.scss"
export default {
    components: {
        VNavigation: () => import("@/components/Navigation/Navigation"),
        VHeader: () => import("@/components/Main/Header/Header"),
        VAbout: () => import("@/components/Main/About/About"),
        VServices: () => import("@/components/Main/Services/Services"),
        VProjects: () => import("@/components/Main/Projects/Projects"),
        VClients: () => import("@/components/Main/Clients/Clients"),
        VTeam: () => import("@/components/Main/Team/Team"),
        VMeeting: () => import("@/components/Main/Meeting/Meeting"),
        VContacts: () => import("@/components/Main/Contacts/Contacts")
    },
    data(){
        return{
            scrollController: null
        }
    },
    mounted(){
        this.scrollController = new ScrollMagic.Controller();
        this.setScrollMagic();
    },
    methods: {
        setScrollMagic(){
            for(let i = 1; i <= 8; i++){
                new ScrollMagic.Scene({
                    triggerElement: `.scrollmagic__el-${i}`, 
                    triggerHook: 0.6,
                    reverse: true
                }).setClassToggle(`.scrollmagic__el-${i}`, 'animate').addTo(this.scrollController);
            }
        }
    }
}
</script>