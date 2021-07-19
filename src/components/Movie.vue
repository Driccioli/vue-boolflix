<template>
    <div class="movie col-2">
        <img src="../assets/placeholder.jpg" alt="Placeholder">
        <div class="movie-info">
            Titolo: {{title}} <br>
            Titolo originale: {{ogTitle}} <br>
            Lingua originale: {{ogLanguage}} <br>
            Voto: {{rating}} 
        </div>
    </div>
</template>

<script>
export default {
    name:"Movie",
    props:{
        // title: String,
        // ogTitle: String,
        // ogLanguage: String,
        // rating: Number,
        result: Object,
    },
    computed:{
        title(){
            return this.result.title;
        },
        ogTitle(){
            return this.result.original_title;
        },
        ogLanguage(){
            return this.result.original_language;
        },
        rating(){
            return this.result.vote_average;
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
.movie{
    position: relative;
    img{
        width: 100%;
    }
    .movie-info{
        display: none;
    }
    &:hover{
        .movie-info{
            display:block;
        }
        img{
            filter:brightness(0.5);
        }
    }
}

.movie-info{
    color: $netflix-bold-text;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1002;
    font-size: 12px;
    line-height: 20px;
}
</style>