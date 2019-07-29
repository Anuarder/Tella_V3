<template>
    <div id="app">
        <v-app></v-app>
    </div>
</template>
<script>
import VApp from "./components/App/App"
import "@/styles/root_styles.scss"
export default {
    components: {
        VApp: VApp
    },
    data(){
        return{
            window_width: window.innerWidth
        }
    },
    mounted(){
        window.addEventListener('resize', () => {
            this.window_width = window.innerWidth;
        });
    },
    computed: {
        isDesktop(){
            return this.window_width > 1100
        }
    },
}
</script>