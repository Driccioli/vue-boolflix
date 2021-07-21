<template>
    <div class="header d-flex p-2 justify-content-around align-items-center ">
        <div class="logo-container">
            <img src="../assets/Netflix_Logo_RGB.png" alt="Netflix Logo">
        </div>
        <div class="search-bar flex-grow-1 d-flex justify-content-end align-items-center">
            <input v-model="inputText" @keyup.enter="$emit('search', inputText)" class="p-1 ps-3 col-4" type="search" name="title" id="title" placeholder="Write title">
            <button @click="$emit('search', inputText)" ><i class="fas fa-search"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            inputText: "",
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../style/colors.scss";
.header{
    width: 100%;
}

.logo-container{
    img{
        max-width: 200px;
    }
}

.search-bar{
    input{
        border-radius: 12px;
        font-size: 20px;
        border: none;
        background-color: $netflix-reg-text;
        color: $netflix-bold-text;

        &::placeholder{
            color:$netflix-placeholder;
        }

    }
}

button{
    border: none;
    background: none;
    color: $netflix-bold-text;
    font-size: 25px;
}
</style>