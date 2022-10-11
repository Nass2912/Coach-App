<template>
    <div class="aligner">
        <swiper
        class="parallax-slider"
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        parallax
        :slides-per-view="2.3"
        :space-between="50"
        grabCursor
        @swiper="onSwiperInitialized"
        >
            <div class="parallax-slider-navigation">
            <div class="nav-indicator prevArrow">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="nav-indicator nextArrow">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            </div>
            <swiper-slide v-for="coach in filteredCoaches" :key="coach.id">
                <CoachItem
                :lastName="coach.lastName"
                :firstName="coach.firstName"
                :areas="coach.areas"
                :rate="coach.hourlyRate"
                :id="coach.id"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore, { Navigation, Parallax } from "swiper";
    import CoachItem from "../../components/coaches/CoachItem.vue"
    // Import Swiper styles
    import 'swiper/css';
    SwiperCore.use([Navigation, Parallax]);
    export default {
      components: {
        Swiper,
        SwiperSlide,
        CoachItem
      },
      computed: {
        filteredCoaches() {
            return this.$store.getters.coaches;
        },
      }
    };
</script>
<style>
    .aligner {
        margin-top: 20vh;
    }
    .sliderer {
        height: 20vh;
        background-color: red;
    }
</style>