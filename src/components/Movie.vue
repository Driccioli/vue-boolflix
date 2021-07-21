<template>
    <div class="movie col-3">
        <img v-if="posterLink!=null" class="poster" :src="posterLink">
        <img v-else src="../assets/placeholder.jpg" class="poster placeholder" alt="Placeholder">
        <div class="movie-info">
            <b>Titolo:</b> {{title}} <br>
            <b>Titolo originale:</b> {{ogTitle}} <br>
            <b>Lingua originale:</b> <div class="flag-container"><flag :iso="getFlag()" :squared="false"/></div>
            <br>
            <hr>
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
            if(this.movie.title === undefined){
                return this.movie.name;
            }else{
                return this.movie.title;
            }
        },
        ogTitle(){
            if(this.movie.original_title === undefined){
                return this.movie.original_name;
            }else{
                return this.movie.original_title;
            }
        },
        ogLanguage(){
            return this.movie.original_language;
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
            const flagCodes = { 
                //Aggiungere altri casi speciali appena saltano fuori
                "en":"us",
                "uk":"gb",
                "ja":"jp",
                "ko": "sd",
                "hi" : "in",
                "ur" : "in" ,
            }
            return flagCodes[this.ogLanguage] ?? this.ogLanguage;
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
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300&display=swap');
*{
    transition: 0.3s linear;
}
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
            filter:brightness(0.2);
            transform:scale(1.02);
        }
    }
}

.movie-info{
    color: $netflix-bold-text;
    font-family: 'Heebo', sans-serif;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1002;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    hr{
        width: 70%;
        height: 2px;
        opacity: 1;
        margin: 5px auto;
    }
    b{
        display: block;
        font-size: 24px;
    }
}

.flag-container{
    font-size: 34px;
    display: inline-block;
}

.fa-star{
    color: $star;
    font-size: 24px;
}

.placeholder{
    filter: grayscale(1);
}
</style>