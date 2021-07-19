<template>
    <div class="movie col-2">
        <img class="poster" src="../assets/placeholder.jpg" alt="Placeholder">
        <div class="movie-info">
            Titolo: {{title}} <br>
            Titolo originale: {{ogTitle}} <br>
            Lingua originale: 
            <object :data="flag" type="image/png">
            {{ogLanguage}}
            </object>
            <!-- <img onerror="this.style.display='none'" :src="flag" :alt="ogLanguage"> -->
            <br>
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
    data(){
        return{
            flag: `https://www.countryflagicons.com/FLAT/24/${this.result.original_language.toUpperCase()}.png`,
        }
    },
    computed:{
        title(){
            return this.result.title;
        },
        ogTitle(){
            return this.result.original_title;
        },
        ogLanguage(){
            return this.result.original_language.toUpperCase();
        },
        rating(){
            return this.result.vote_average;
        },
    },
    methods:{
        flagHandler(){
            if(this.ogLanguage === "EN"){
               this.ogLanguage = "US";
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
.movie{
    position: relative;
    .poster{
        width: 100%;
    }
    .movie-info{
        display: none;
    }
    &:hover{
        .movie-info{
            display:block;
        }
        .poster{
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