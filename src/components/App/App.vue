<template>
    <div class="app-page">
        <v-navigation></v-navigation>
        <div class="app">
            <div id="header">
                <v-header></v-header>
            </div>
            <div id="about" class="section">
                <v-about></v-about>
            </div>
            <div id="services" >
                <v-services></v-services>
            </div>
            <div id="projects" class="section">
                <v-projects></v-projects>
            </div>
            <div id="clients">
                <v-clients></v-clients>
            </div>
            <div id="team" class="section">
                <v-team></v-team>
            </div>
            <div id="meeting" class="section">
                <v-meeting></v-meeting>
            </div>
            <div id="contacts">
                <v-contacts></v-contacts>
            </div>
        </div>
    </div>
</template>
<script>
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
    }
}
</script>