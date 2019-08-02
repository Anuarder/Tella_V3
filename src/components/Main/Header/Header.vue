<template>
    <div class="header-section section">
        <div class="header">
            <div class="header__sphere">
                <v-sphere></v-sphere>
            </div>
            <div class="header__text">
                <p>
                    <a v-html="$t('header.text1')"></a>
                    <span
                        class="colored-text"
                        :class="header_text == 1 ? 'text-animate' : ''">
                        {{$t("header.design")}}
                    </span>
                    <span
                        class="colored-text"
                        :class="header_text == 2 ? 'text-animate' : ''">
                        {{$t("header.marketion")}}
                    </span>
                    <span
                        class="colored-text"
                        :class="header_text == 3 ? 'text-animate' : ''">
                        {{$t("header.mobile")}}
                    </span>
                    <span
                        class="colored-text"
                        :class="header_text == 4 ? 'text-animate' : ''">
                        {{$t("header.site")}}
                    </span>
                    <br />
                    {{$t("header.text2")}}
                </p>
                <a 
                    href="#meeting" 
                    class="header__link">
                    <button class="header__button">
                        {{$t("header.send_request")}}
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import "./header.scss"
import VSphere from "@/components/Sphere/Sphere"
import anchor from "@/plugins/AnchorTarget/Anchor"
export default {
    components: {
        VSphere
    },
    data(){
        return{
            header_text: 1,
        }
    },
    mounted(){
        this.setTextAnimation();
        anchor(".header__link");
    },
    methods: {
        setTextAnimation() {
            setInterval(() => {
                this.header_text += 1;
                if (this.header_text >= 5) {
                    this.header_text = 1;
                }
            }, 3000);
        }
    }
}
</script>
