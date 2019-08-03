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
                    <form 
                        @submit.prevent="sendRequest"
                        class="meeting__form">
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
                        <button :disabled="isLoading">
                            <span v-if="isLoading">
                                {{$t('meeting.request.loading')}}
                            </span>
                            <span v-else>
                                {{$t('meeting.request.button')}}
                            </span>
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
import swal from "sweetalert"
import axios from "axios"
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
            ],
            name: "",
            phone: "",
            isLoading: false,
            context: "https://api.tella.kz/api"
        }
    },
    methods: {
        async sendRequest(){
            try{
                let data = {
                    name: this.name,
                    phone: this.phone,
                    utm_params: null
                };
                this.isLoading = true;
                let utm_params = new URLSearchParams(window.location.search);
                if(utm_params.has('utm_source')){
                    data.utm_params = {
                        utm_source: utm_params.get('utm_source'),
                        utm_medium: utm_params.get('utm_medium'),
                        utm_campaign: utm_params.get('utm_campaign'),
                        utm_content: utm_params.get('utm_content'),
                        utm_term: utm_params.get('utm_term'),
                    }
                }
                let response = await axios.post(`${this.context}/notification/send`, data);
                console.log(response);
                if(response.data.status == 'notification_was_sended'){
                    this.isLoading = false;
                    swal(
                        this.$t("meeting.request.success"), 
                        this.$t("meeting.request.success_message"), 
                        "success"
                    );
                    this.name = '';
                    this.phone = '';
                    // eslint-disable-next-line
                    dataLayer.push({'event': 'request_success'});
                }else{
                    throw "Error";
                }
            }catch(err){
                this.isLoading = false;
                swal(
                    this.$t("meeting.request.error"), 
                    this.$t("meeting.request.error_message"), 
                    "error"
                );
            }
        }
    }
}
</script>
