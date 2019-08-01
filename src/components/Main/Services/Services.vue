<template>
    <div class="services-section">
        <div class="services">
            <div 
                class="services__title"
                v-html="$t('services.title')">
            </div>
            <div class="services__slider">
                <div 
                    class="services__slider-item"
                    v-for="(item, i) in services_arr"
                    v-touch:swipe="swipeSlide"
                    :key="i"
                    :style="slide_transform">
                    <div class="services__slider-container" @mousemove="moveImage">
                        <div class="services__slider-image">
                            <img :src="item.image" alt="services" :id="`slider_image${item.id}`">
                        </div>
                        <div class="services__slider-text">
                            <h1 
                                v-html="$t(`services.${item.slider}.title`)">
                            </h1>
                            <p 
                                v-html="$t(`services.${item.slider}.text`)">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="services__slider-button" @click="nextSlide(1)">
                    <img src="@/assets/arrow.svg" alt="arrow">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TweenMax from "gsap/TweenMax";
import "./services.scss"
import services_slider1 from "@/assets/services_slider1.png"
import services_slider2 from "@/assets/services_slider2.png"
import services_slider3 from "@/assets/services_slider3.png"
import services_slider4 from "@/assets/services_slider4.png"
export default {
    data(){
        return{
            services: [
                {
                    id: 1,
                    image: services_slider1,
                    slider: "slider1"
                },
                {
                    id: 2,
                    image: services_slider2,
                    slider: "slider2"
                },
                {
                    id: 3,
                    image: services_slider3,
                    slider: "slider3"
                },
                {
                    id: 4,
                    image: services_slider4,
                    slider: "slider4"
                },
            ],
            current_slide: 0,
            slide_transform: "",
            interval: ""
        }
    },
    computed: {
        services_arr(){
            return this.services;
        },
        currentSlide(){
            return this.current_slide;
        }
    },
    mounted(){
        this.setSliderInterval();
    },
    methods: {
        moveImage(e){
            let x = e.pageX * 0.009;
            let y = e.pageY * 0.009;
            for (let i = 1; i <= 4; i++) {
                TweenMax.to(document.getElementById(`slider_image${i}`), 1, {
                    x: (x - 0.1),
                    y: (y - 0.1)
                });
            }
        },
        swipeSlide(direction) {
            if (direction === "left") {
                this.nextSlide(1);
            }else if(direction === "right"){
                this.nextSlide(-1);
            }
        },
        nextSlide(val){
            clearInterval(this.interval);
            this.slide(val);
            this.setSliderInterval();
        },
        slide(value) {
            this.current_slide += value;
            if(this.current_slide > this.services.length - 1){
                this.current_slide = 0;
            }else if(this.current_slide < 0){
                this.current_slide = this.services.length - 1;
            }
            this.slide_transform = `
                transform: translateX(${-100 * this.current_slide + 1}%)
            `;
        },
        setSliderInterval(){
            this.interval = setInterval(() => {
                this.slide(1);
            }, 4000);
        }
    }
}
</script>
