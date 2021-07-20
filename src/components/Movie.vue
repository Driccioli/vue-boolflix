<template>
    <div class="movie col-3">
        <img v-if="posterLink!=null" class="poster" :src="posterLink">
        <img v-else src="../assets/placeholder.jpg" class="poster" alt="Placeholder">
        <div class="movie-info">
            Titolo: {{title}} <br>
            Titolo originale: {{ogTitle}} <br>
            Lingua originale: <div class="flag-container"><flag :iso="getFlag()" :squared="false"/></div>
            <br>
            <!-- Voto: {{rating}} 
            Stelle: {{starRating}} -->
            <div class="stars">
                <i v-for="index in 5" :key="index" :class="starSwitch(index)" class="fa-star"></i>
            </div>
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
        movie: Object,
    },
    data(){
        return{
            flag: `https://www.countryflagicons.com/FLAT/24/${this.movie.original_language.toUpperCase()}.png`,
        }
    },
    computed:{
        title(){
            if(this.movie.title ===undefined){
                return this.movie.name;
            }else{
                return this.movie.title;
            }
        },
        ogTitle(){
            if(this.movie.original_title ===undefined){
                return this.movie.original_name;
            }else{
                return this.movie.original_title;
            }
        },
        ogLanguage(){
            return this.movie.original_language;
        },
        rating(){
            return this.movie.vote_average;
        },
        starRating(){
            return Math.ceil(this.movie.vote_average/2);
        },
        posterLink(){
            if(this.movie.poster_path == null){
                return null;
            }   else{
                return "https://image.tmdb.org/t/p/w780" + this.movie.poster_path; 
            }
        }
    },
    methods:{
        getFlag(){
            switch (this.ogLanguage) {
                // Aggiungere altri casi speciali appena saltano fuori
                case "en":
                    return "us";

                case "uk":
                    return "gb";

                case "ja":
                    return "jp"; 
                    
                case "ko":
                    return "sd";
                case "hi", "ur":
                    return "in";
                default:
                    return this.ogLanguage;
            }
        },        
        starSwitch(index){
            if(index <= this.starRating){
                return "fas";
            }   else{
                return "far";
            }
        },
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

.flag-container{
    font-size: 18px;
    display: inline-block;
}

.fa-star{
    color: $star;
    font-size: 16px;
}
</style>