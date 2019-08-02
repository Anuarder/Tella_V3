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
                    <div 
                        class="meeting__item"
                        v-for="(item, i) in meeting_items"
                        :key="i">
                        <img :src="item.image" alt="meeting">
                        <h1 v-html="$t(`meeting.text${i+1}`)"></h1>
                    </div>
                </div>
                <div class="meeting__request">
                    <h1>
                        {{$t('meeting.form_title')}}
                    </h1>
                    <form class="meeting__form">
                        <div class="meeting__input">
                            <input 
                                type="text" 
                                :placeholder="$t('meeting.request.name')">
                        </div>
                        <div class="meeting__input">
                            <input 
                                type="number"
                                :placeholder="$t('meeting.request.phone')">
                        </div>
                        <button>
                            {{$t('meeting.request.button')}}
                        </button>
                    </form>
                    <h2>
                        {{$t('meeting.warning')}}
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./meeting.scss"
import meeting_image1 from "@/assets/meeting_image1.png"
import meeting_image2 from "@/assets/meeting_image2.png"
import meeting_image3 from "@/assets/meeting_image3.png"
export default {
    data(){
        return{
            meeting_items: [
                {
                    image: meeting_image1
                },
                {
                    image: meeting_image2
                },
                {
                    image: meeting_image3
                }
            ]
        }
    }
}
</script>
