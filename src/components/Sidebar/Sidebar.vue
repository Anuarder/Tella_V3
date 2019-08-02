<template>
    <div class="sidebar-component">
        <div class="sidebar">
            <div class="sidebar__header">
                <div class="sidebar__logo">
                    <img 
                        src="@/assets/header_logo-black.svg" 
                        alt="logo">
                </div>
                <div class="sidebar__close-button">
                    <img 
                        src="@/assets/close-button_black.svg" 
                        alt="logo"
                        @click="close">
                </div>
            </div>
            <div class="sidebar__actions">
                <div class="sidebar__links">
                    <a 
                        v-for="(item, i) in navigation_links"
                        :key="i"
                        @click="close"
                        class="sidebar__link link"
                        :href="item.href">
                        {{$t(item.title)}}
                    </a>
                </div>
                <div 
                    class="sidebar__language-switch"
                    @click="setLanguage">
                    {{lang}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./sidebar.scss"
import DialogMixin from "@/mixins/Dialog"
import NavigationMixin from "@/mixins/Navigation"
export default {
    mixins: [DialogMixin, NavigationMixin]
}
</script>
