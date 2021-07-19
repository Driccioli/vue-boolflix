<template>
    <div class="header d-flex p-2 justify-content-between align-items-center">
        <div class="logo-container">
            <img src="../assets/Netflix_Logo_RGB.png" alt="Netflix Logo">
        </div>
        <div class="search-bar flex-grow-1 d-flex justify-content-end">
            <input v-model="inputText" @keyup.enter="$emit('search', inputText)" class="p-1" type="search" name="title" id="title" placeholder="Write title">
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
        max-width: 150px;
    }
}

.search-bar{
    input{
        border-radius: 12px;
        border: none;
    }
}

button{
    border: none;
    background: none;
    color: $netflix-bold-text;
    font-size: 25px;
}
</style>