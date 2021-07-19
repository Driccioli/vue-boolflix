<template>
  <div id="app">
    <Header @search="this.searchMovies"/>
    <Main :results="results"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  data(){
    return{
      results: [
        {
            "adult": false,
            "backdrop_path": "/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",
            "genre_ids": [
                12,
                35,
                878,
                10751
            ],
            "id": 105,
            "original_language": "en",
            "original_title": "Back to the Future",
            "overview": "Marty McFly è stato catapultato per errore nel 1955, grazie alla macchina del tempo ideata dal suo amico scienziato Doc. Non avendo più \"carburante\" per poter tornare nel futuro si rivolge alla versione più giovane di Doc, che nonostante l'incredulità iniziale si farà in quattro per aiutarlo. Ma nel 1955 non è solo Doc ad essere più giovane, Marty infatti si imbatte casualmente nei suoi genitori, all'epoca teenager, ma l'incontro aggiungerà altri problemi.",
            "popularity": 55.567,
            "poster_path": "/6NfLuSGpJiwjdYC7j5AxbAcV6Qf.jpg",
            "release_date": "1985-07-03",
            "title": "Ritorno al futuro",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 15239
        },
        {
            "adult": false,
            "backdrop_path": "/a4qvbI9x3nqu3hKQyDRVVBpMklx.jpg",
            "genre_ids": [
                12,
                35,
                10751,
                878
            ],
            "id": 165,
            "original_language": "en",
            "original_title": "Back to the Future Part II",
            "overview": "Il film comincia dove terminava il primo capitolo, ovvero con Marty e Jennifer che partono insieme allo scienziato Doc, inventore della macchina del tempo, per il 2015 allo scopo di evitare che il futuro dei loro figli possa essere in pericolo. Ma la situazione precipita e ad essere in pericolo non è più il futuro, ma il passato. Marty dovrà tornare nuovamente nel 1955 e...",
            "popularity": 25.706,
            "poster_path": "/pqWQIGt8MXcaikTjy9Zm5zwdAiW.jpg",
            "release_date": "1989-11-22",
            "title": "Ritorno al futuro - Parte II",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 9755
        },
        {
            "adult": false,
            "backdrop_path": "/igaRMweCynEGoS6w4Rsim7JPnKu.jpg",
            "genre_ids": [
                12,
                35,
                878
            ],
            "id": 196,
            "original_language": "en",
            "original_title": "Back to the Future Part III",
            "overview": "Per questa terza, conclusiva, puntata della trilogia, Marty McFly è costretto a tornare indietro nel tempo fino al 1885 per salvare Doc, che vi era stato catapultato al termine del secondo capitolo. Questa volta tornare nel futuro sarà ancora più difficile.",
            "popularity": 23.183,
            "poster_path": "/hk6pClhh6zgjWSZHXSr2NkKLamQ.jpg",
            "release_date": "1990-05-25",
            "title": "Ritorno al futuro - Parte III",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 7876
        }
    ],
    }
  },
  methods:{
      searchMovies(searchText){
        
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=b17e169f5966a7d3788729bd757a6a93&query="+searchText.toLowerCase())
          .then((incoming) =>{
            this.results = incoming.data.results;
          })
        
      }
  },
}
</script>

<style lang="scss">
@import  "@/style/colors.scss";
#app{
  background-color: $netflix-background;
  color: $netflix-reg-text;
}
</style>
