<template>
    <div class="app-page">
        <v-navigation></v-navigation>
        <div class="app">
            <div id="header">
                <v-header></v-header>
            </div>
            <div id="about">
                <v-about></v-about>
            </div>
            <div id="services">
                <v-services></v-services>
            </div>
            <div id="projects">
                <v-projects></v-projects>
            </div>
            <div id="clients">
                <v-clients></v-clients>
            </div>
            <div id="team">
                <v-team></v-team>
            </div>
            <div id="meeting">
                <v-meeting></v-meeting>
            </div>
        </div>
    </div>
</template>
<script>
import "./app.scss"
import VNavigation from "@/components/Navigation/Navigation"
import VHeader from "@/components/Main/Header/Header"
import VAbout from "@/components/Main/About/About"
import VServices from "@/components/Main/Services/Services"
import VProjects from "@/components/Main/Projects/Projects"
import VClients from "@/components/Main/Clients/Clients"
import VTeam from "@/components/Main/Team/Team"
import VMeeting from "@/components/Main/Meeting/Meeting"
export default {
    components: {
        VNavigation,
        VHeader,
        VAbout,
        VServices,
        VProjects,
        VClients,
        VTeam,
        VMeeting
    }
}
</script>