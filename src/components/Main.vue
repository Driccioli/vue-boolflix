<template>
    <div class="container-fluid pt-5 pb-5 d-flex flex-column main">
        ORIGINALI NETFLIX
        <div class="row pt-5 g-2 flex-wrap align-items-center justify-content-around">
            <Movie 
            v-for="(movie, index) in movies" :key="index" 
            :movie="movie"
            />
            <Movie 
            v-for="(tv, index) in series" class="series" :key="index" 
            :movie="movie"
            />
        </div>
    </div>
</template>

<script>
import Movie from "./Movie.vue";
export default {
    name:"Main",
    components:{
        Movie,
    },
    props:{
        movies: Array,
        series: Array,
    },
    computed:{
        title(){
            return this.title;
        },
        ogTitle(){
            return this.original_title;
        },
        ogLanguage(){
            return this.original_language;
        },
        rating(){
            return this.vote_average;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
.main{
    font-size: 20px;
    color: $netflix-bold-text;
}
</style>