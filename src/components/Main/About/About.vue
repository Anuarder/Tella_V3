<template>
    <div class="about-section" id="#about">
        <div class="about">
            <div 
                class="about__title" 
                v-html="$t('about.title')">
            </div>
            <div class="about__items">
                <div 
                    class="about__item"
                    v-for="(item, i) in advantages"
                    :key="i">
                    <img :src="item.image" alt="advantages">
                    <h1>{{$t(`about.data.${item.key}.title`)}}</h1>
                    <div class="about__list-container">
                        <div 
                            class="about__list"
                            v-for="j in 3"
                            :key="j">
                            <div 
                                class="bullet" 
                                :class="!(item.key === 'principle' && j === 3) ? 'circle ': ''">
                            </div>
                            <span>
                                {{$t(`about.data.${item.key}.text${j}`)}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./about.scss"
import technology_image from "@/assets/about-icon_technology.svg"
import principle_image from "@/assets/about-icon_principle.svg"
import assurance_image from "@/assets/about-icon_quality.svg"
export default {
    data(){
        return{
            advantages: [
                {
                    image: technology_image,
                    key: "technology"
                },
                {
                    image: principle_image,
                    key: "principle"
                },
                {
                    image: assurance_image,
                    key: "assurance"
                },
            ]
        }
    }
}
</script>
