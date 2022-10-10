<template>
    <div class="aligner">
        <swiper
          :slides-per-view="3"
          :space-between="50"
        >
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
    import CoachItem from "../../components/coaches/CoachItem.vue"
    // Import Swiper styles
    import 'swiper/css';
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