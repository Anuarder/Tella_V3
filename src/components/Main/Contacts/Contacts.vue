<template>
    <div class="contacts-section">
        <div class="contacts">
            <div class="contacts__text">
                <div class="contacts__title">
                    {{$t('contacts.title')}}
                </div>
                <div class="contacts__subtitle">
                    {{$t('contacts.subtitle')}}
                </div>
                <div class="contacts__address-container">
                    <div class="contacts__address">
                        <h1>{{$t('contacts.city')}}</h1>    
                        <p>
                            <span v-html="$t('contacts.address')"></span>
                            <a href="tel:+77087385626">+7 708 738 56 26</a>
                            <br>
                            <a href="tel:+77007102822">+7 700 710 28 22</a> 
                        </p>
                    </div>
                    <div class="contacts__address">
                        <h1>{{$t('contacts.city2')}}</h1>    
                        <p>
                            12/F, World Tech Centre, 95 How Ming St., <br>
                            Kowloon, Hong Kong SAR <br>
                            <a href="tel:+85259972555">+852 5997 2555</a>
                        </p>
                    </div>
                </div>
                <div class="contacts__links">
                    <div class="contacts__link">
                        <a 
                            class="contacts__email"
                            target="blank"
                            href="mailto:info@tella.kz">
                            info@tella.kz
                        </a>
                    </div>
                    <div class="contacts__link">
                        <a 
                            class="contacts__facebook"
                            target="blank"
                            href="https://www.facebook.com/tella.design">
                            <img 
                                src="@/assets/social-icon_facebook.svg" 
                                alt="facebook">
                        </a>
                        <a 
                            class="contacts__facebook"
                            target="blank"
                            href="https://www.instagram.com/tella.design">
                            <img 
                                src="@/assets/social-icon_instagram.svg" 
                                alt="instagram">
                        </a>
                    </div>
                </div>
            </div>
            <div class="contacts__map-container">
                <div 
                    class="contacts__map" 
                    id="map" 
                    ref="map"
                    @mousewheel="handleWheel">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./contacts.scss"
export default {
    data(){
        return{
            map: "",
            latLng: {
                lat: 43.204666,
                lng: 76.915911
            },
            marker: ""
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        handleWheel(e){
            e.preventDefault();
        },
        initMap() {
            // eslint-disable-next-line
            this.map = new google.maps.Map(this.$refs.map, {
                center: this.latLng,
                disableDefaultUI: true,
                zoom: 14,
                gestureHandling: "cooperative",
                styles: [{
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                                saturation: 36
                            },
                            {
                                color: "#000000"
                            },
                            {
                                lightness: 40
                            }
                        ]
                    },
                    {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                                visibility: "on"
                            },
                            {
                                color: "#000000"
                            },
                            {
                                lightness: 16
                            }
                        ]
                    },
                    {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 20
                            }
                        ]
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 17
                            },
                            {
                                weight: 1.2
                            }
                        ]
                    },
                    {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 20
                            }
                        ]
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 21
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 17
                            }
                        ]
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 29
                            },
                            {
                                weight: 0.2
                            }
                        ]
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 18
                            }
                        ]
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 16
                            }
                        ]
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 19
                            }
                        ]
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                                color: "#000000"
                            },
                            {
                                lightness: 17
                            }
                        ]
                    }
                ]
            });
            // eslint-disable-next-line
            this.marker = new google.maps.Marker({
                position: this.latLng,
                map: this.map,
                title: "meta. digital"
            });
        }
  }
}
</script>
