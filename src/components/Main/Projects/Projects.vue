<template>
    <div class="projects-section">
        <div class="projects">
            <div class="projects__title">
                {{$t('projects.title')}}
            </div>
            <div class="projects__content">
                <div 
                    class="projects__item"
                    v-for="(item, i) in projects"
                    :key="i">
                    <div class="projects__image">
                        <img :src="item.image" alt="project">
                        <div class="projects__image-label">
                            {{$t(`projects.${item.image_label}`)}}
                            <div class="projects__image-button">
                                <a 
                                    v-if="item.link !== '#'" 
                                    :href="item.link" 
                                    target="blank">
                                    {{$t('projects.go_to_site')}}
                                </a>
                                <a v-else>
                                    {{$t('projects.in_developing')}}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="projects__serial-number">
                        PROJECT {{i+1}}
                    </div>
                    <div class="projects__text">
                        <h1>{{item.title}}</h1>
                        <p>{{item.subtitle}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./projects.scss"
import gornoesolnce_preview from "@/assets/gornoesolnce_preview.jpg"
import mobilex_preview from "@/assets/mobilex_preview.png"
import dimashtea_preview from "@/assets/dimashtea_preview.png"
export default {
    data(){
        return{
            projects: [
                {
                    title: "ЖК Горное Солнце",
                    subtitle: "Brand Content, Real Estate",
                    image: gornoesolnce_preview,
                    image_label: "gornoesolnce",
                    link: "https://gornoesolnce.kz/",
                },
                {
                    title: "D&D Partnership",
                    subtitle: "Brand Content, Social Media, E-commerce",
                    image: mobilex_preview,
                    image_label: "ddpartnership",
                    link: "#",
                },
                {
                    title: "Dimash Tea",
                    subtitle: "Brand Content, Social Media, E-commerce",
                    image: dimashtea_preview,
                    image_label: "dimashtea",
                    link: "https://dimashtea.kz/",
                },
            ]
        }
    }
}
</script>
