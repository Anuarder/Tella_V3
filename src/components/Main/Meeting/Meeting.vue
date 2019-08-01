<template>
    <div class="meeting-section">
        <div class="meeting">
            <div 
                class="meeting__title" 
                v-html="$t('meeting.title')">
            </div>
            <div 
                class="meeting__subtitle" 
                v-html="$t('meeting.subtitle')">
            </div>
            <div class="meeting__content">
                <div class="meeting__items">
                    <div class="meeting__item">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./meeting.scss"
export default {
    
}
</script>
