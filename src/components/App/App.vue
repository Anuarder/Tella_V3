<template>
    <div class="app-page">
        <v-navigation></v-navigation>
        <div class="app">

        </div>
    </div>
</template>
<script>
import "./app.scss"
import VNavigation from "@/components/Main/Navigation/Navigation"
export default {
    components: {
        VNavigation: VNavigation
    }
}
</script>
