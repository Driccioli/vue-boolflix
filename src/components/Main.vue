<template>
    <div class="container-fluid pt-3 pb-3 d-flex flex-column main">
        ORIGINALI NETFLIX
        <div class="row pt-2 justify-content-left align-items-center">
            <button @click="$emit('popular')" class="col-1">Popular</button>
        </div>
        <div class="row pt-3 pb-5 g-3 flex-wrap align-items-center justify-content-around">
            <Movie 
            v-for="(movie, movieIndex) in movies" :key="movieIndex" 
            :movie="movie"
            />
            <Movie 
            v-for="(tv, tvIndex) in series" class="series" :key="tvIndex" 
            :movie="tv"
            />
        </div>
        <div v-if="movies.length === 0 && series.length === 0" class="pt-5 error">
            No results found. Sorry :(
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
    font-size: 40px;
    color: $netflix-bold-text;
    min-height: 78.8vh;
}
.error{
    text-align: center;
    font-size: 30px;
    color: $netflix-reg-text;
}

button{
    background: none;
    color: $netflix-reg-text;
    border: none;
    text-align: left;
    font-size: 20px;
    &:hover{
        color: $netflix-bold-text;
    }
}
</style>