<script setup>
import { useRouter } from 'vue-router';
import http from '../../services/http'
import { onMounted, ref } from 'vue';

const posts = ref(null);
const router = useRouter();

const fetch_post = () =>
{
  http.get('/posts')
  .then(response => {
  posts.value = response.data;
  console.log(posts.value);
  })
}
fetch_post();

const to_connect = () =>
{
  router.push("/signin")
}

</script>

<template>
  <div class="container-fluid cover">
    <div class="container wrapper_cover">
      <div class="text_box_cover">
        <h1 class="fw-bold">Superhero prod</h1>
        <p class="text-white lh-lg fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        <button class=" text-white btn btn-lg btn-primary mt-5" @click="to_connect()">Se connecter</button>
      </div>
      <img class="guard" src="/src/assets/img/3d-internet-secuirty-badge-removebg-preview.png" alt="">
      
    </div>
    <div class="wrap_cities">
        <img class="cities" src="/src/assets/img/building.png" alt="">
        <img class="moon" src="/src/assets/img/moon.png" alt="">
    </div>
  </div>

  <div class="container-fluid">
    <div class="container introduction">
      <img src="" alt="">
      <div>
        <h2>Introduction</h2>
        <p></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cover
  {
    background-color: black;
    width: 100%;
    height: 100vh;
  }
  
  .wrapper_cover
  {
    display: flex;
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .text_box_cover h1
  {
    color: #18636f;
    font-size:  70px;
  }

  .cover .guard
  {
    vertical-align: middle;
    z-index: 10;
    animation: animate 3s ease infinite;
    animation-delay: 0;
    object-fit: none;
  }

  .cover .wrap_cities
  {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }


  .cover .cities
  {
    opacity: 0.5;
    bottom: 0;
    position: absolute;
    width: 100%;
    left: 0%;
    z-index: 2;
  }

  .cover .wrap_cities .moon
  {
    width: 10%;
    position: absolute;
    z-index: 1;
    top: 20%;
    left: 10%;
    opacity: 0.7;
  }

  @keyframes animate {
    0% { transform: translateY(0px); }
    50% { transform: translateY(7px);}
    100% { transform: translateY(0px); }
  }



</style>


