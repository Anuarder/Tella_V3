<template>
    <div class="team-section">
        <div class="team">
            <div 
                class="team__title"
                v-html="$t('team.title')">
            </div>
            <div class="team__desktop" v-if="isDesktop">
                <div class="team__content">
                    <div 
                        class="team__item"
                        v-for="(item, i) in team"
                        :key="i">
                        <img :src="item.image" alt="team">
                        <div class="team__label">
                            <div 
                                class="team__name" 
                                v-html="$t(`team.data[${i}].name`)">
                            </div>
                            <div class="team__position">
                                {{$t(`team.data[${i}].position`)}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team__mobile" v-else>
                <div class="team__slider">
                    <div 
                        class="team__slider-item"
                        v-for="(item, i) in team"
                        v-touch:swipe="swipeSlide"
                        :key="i"
                        :style="slide_transform">
                        <div
                            class="team__image" 
                            :style="`background-image: url(${item.image})`">
                        </div>
                        <div class="team__label">
                            <div 
                                class="team__name" 
                                v-html="$t(`team.data[${i}].name`)">
                            </div>
                            <div class="team__position">
                                {{$t(`team.data[${i}].position`)}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./team.scss"
import Shyngys from "@/assets/Shyngys.png"
import Dalen from "@/assets/Dalen.png"
import Agzam from "@/assets/Agzam.png"
import shyngys_slider from "@/assets/shyngys_slider.png"
import dalen_slider from "@/assets/dalen_slider.png"
import agzam_slider from "@/assets/agzam_slider.png"
export default {
    data(){
        return{
            team: [
                {
                    image: Shyngys,
                    image_slider: shyngys_slider,
                },
                {
                    image: Dalen,
                    image_slider: dalen_slider,
                },
                {
                    image: Agzam,
                    image_slider: agzam_slider,
                }
            ],
            window_width: window.innerWidth,
            current_slide: 0,
            slide_transform: "",
            interval: ""
        }
    },
    mounted(){
        window.addEventListener('resize', () => {
            this.window_width = window.innerWidth;
        });
        this.setSliderInterval();
    },
    computed: {
        isDesktop(){
            return this.window_width > 900
        },
        currentSlide(){
            return this.current_slide;
        }
    },
    methods: {
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
            if(this.current_slide > this.team.length - 1){
                this.current_slide = 0;
            }else if(this.current_slide < 0){
                this.current_slide = this.team.length - 1;
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
