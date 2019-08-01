<template>
    <div class="clients-section">
        <div class="clients">
            <div 
                class="clients__title" 
                v-html="$t('clients.title')">
            </div>
            <div class="clients__content">
                <div 
                    class="clients__item"
                    v-for="(item, i) in clients"
                    :key="i">
                    <a 
                        :href="item.link" 
                        target="blank">
                        <img :src="item.image" alt="client link">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./clients.scss"
import gornoesolnce_image from "@/assets/gornoesolnce.png"
import dimashtea_image from "@/assets/dimashtea.png"
import mobilex_image from "@/assets/mobilex.png"
import vivo_image from "../../../assets/vivo.png"
import dnd_image from "../../../assets/d&d.png"
export default {
    data(){
        return{
            clients: [
                {
                    image: gornoesolnce_image,
                    link: "https://gornoesolnce.kz"
                },
                {
                    image: dimashtea_image,
                    link: "https://gornoesolnce.kz"
                },
                {
                    image: dnd_image,
                    link: "https://gornoesolnce.kz"
                },
                {
                    image: vivo_image,
                    link: "https://gornoesolnce.kz"
                },
                {
                    image: mobilex_image,
                    link: "https://gornoesolnce.kz"
                },
            ]
        }
    }
}
</script>
