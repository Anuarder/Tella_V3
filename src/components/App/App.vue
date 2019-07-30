<template>
    <div class="app-page">
        <v-navigation></v-navigation>
        <div class="app">
            <v-header></v-header>
            <v-about></v-about>
        </div>
    </div>
</template>
<script>
import "./app.scss"
import VNavigation from "@/components/Navigation/Navigation"
import VHeader from "@/components/Main/Header/Header"
import VAbout from "@/components/Main/About/About"
export default {
    components: {
        VNavigation,
        VHeader,
        VAbout
    }
}
</script>