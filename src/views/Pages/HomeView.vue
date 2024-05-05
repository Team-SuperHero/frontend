<script setup>
import { useRouter } from 'vue-router';
import http from '../../services/http'
import { onMounted, ref } from 'vue';

import Card from '../../components/Card.vue'

const categories = ref([])
const router = useRouter();

let allProducts = ref([])

const getCategories = () => {
  http.get("/category")
    .then((response) => {
      categories.value = response.data.results
    })
    .catch(e => alert(e))
}

const getProducts = () => {
  http.get("/product")
    .then((res) => {
      console.log(res.data)
      allProducts.value = res.data.results
    })
}

const filterProducts = (id) => {
  
  allProducts.value = allProducts.value.filter(product => {
    return id == product.category.id
})
}


onMounted(() => {
  getProducts()
  getCategories();
  console.log("==>" + allProducts.value)
})


const to_connect = () => {
  router.push("/signin")
}

</script>

<template>
  <div class="container-fluid cover">
    <div class="container wrapper_cover">
      <div class="row">
        <div class=" col-md-6 text_box_cover">
          <h1 class="fw-bold jaini-purva-regular">Boutique de l'ombre</h1>
          <p class="text-white lh-lg fs-5 font_text">Bienvenue dans le royaume enchanté de nos produits magiques et mystiques! 🌟✨
            Nous sommes ravis de vous accueillir dans notre boutique en ligne dédiée à l'enchanteur et au mystérieux. Ici, chaque article est un voyage à travers les dimensions, un passage vers des mondes où la magie réside dans chaque grain de sable et chaque étoile filante.
          </p>
          <button class=" text-white btn btn-lg btn_color mt-5" @click="to_connect()">Invoquer votre esprit</button>
        </div>
        <img class="col-md-6 guard" src="/src/assets/img/sorcier.png" alt="">
      </div>

    </div>
    <div class="wrap_cities">
      <img class="cities" src="/src/assets/img/fond.jpg" alt="">
      <img class="moon" src="/src/assets/img/moon.png" alt="">
    </div>
  </div>

  <div class="container my-5">

  <p class="text-white">Nos produits, conçus avec amour et passion, sont le fruit de traditions ancestrales et de recherches surnaturelles. Que vous soyez un sorcier en herbe, une apprentie sorcière, ou simplement quelqu'un qui aime l'extraordinaire, vous trouverez ici des objets qui éveilleront votre imagination et enrichiront votre quotidien avec des touches de magie.

De la Grimoire de Magie pour débutant, qui vous guidera dans vos premiers pas dans le monde de la magie, à la Tunique pour Mage Expert, conçue pour protéger et magnifier votre pouvoir, chaque article est choisi pour son potentiel à transformer votre vie.

Nous sommes fiers de notre engagement à offrir des produits de haute qualité, fabriqués avec soin et attention. Chaque article est enveloppé dans un emballage protecteur pour assurer sa sécurité pendant son voyage jusqu'à vous.

Alors, prêtez-vous à plonger dans l'aventure? Que vous cherchiez à explorer de nouvelles dimensions, à renforcer votre magie, ou simplement à ajouter un peu de magie à votre vie quotidienne, nous sommes impatients de vous accompagner dans ce voyage incroyable.

N'hésitez pas à nous contacter si vous avez des questions ou si vous avez besoin d'aide pour choisir le bon produit pour vous. Nous sommes là pour vous aider à trouver le bonheur magique.

Accueillez-vous dans notre royaume, et laissez la magie commencer. 🌈🔮

Votre équipe enchantée</p>
  </div>

  <div container-fluid recent>
    <div class="catalogue">
      <ul>
        <li  v-for="category in categories" :key="category.id" @click="filterProducts(category.id)">{{ category.name }}</li>
      </ul>
    </div>
    <div class="container text-center mt-5">
      <h2 class="text-white">Les produits phares :</h2> 
    </div>
    <div class="d-flex flex-wrap wrap-card"> 
      <Card class="card_list" v-for="p in allProducts" :key=p.id :name="p.name" :description="p.description" :image="p.image"
        :payement="p.payement_method" />
    </div>
  </div>


</template>

<style scoped>
.wrapper_cover button:hover
{
  background-color: #4e1702;
  transition: 1s ease-in-out;
}

.wrap-card
{
  background-color: black;
  width: 80%;
  margin: auto;
  justify-content: space-around;
}

.recent {
  background-color: black;
}

.recent h2 {
  font-family: "Jaini Purva", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #4e1702;
}

.catalogue {
  background-color: #4e1702;
}

.catalogue ul {
  display: flex;
  width: 60%;
  justify-content: space-around;
  margin: auto;
  padding: 0px
}

.catalogue ul li {
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: white;
  font-family: "Jaini Purva", system-ui;
  font-weight: 400;
  font-style: normal;
}

.cover {
  background-color: black;
  width: 100%;
  height: 100vh;
}

.wrapper_cover {
  display: flex;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text_box_cover h1 {
  color: #C69F89;
  font-size: 70px;
}

.jaini-purva-regular {
  font-family: "Jaini Purva", system-ui;
  font-weight: 400;
  font-style: normal;
}

.jacquard-24-charted-regular {
  font-family: "Jacquard 24 Charted", system-ui;
  font-weight: 400;
  font-style: normal;
}


h1,
.font_text {
  font-family: 'jaini Purva';
}

.cover .guard {
  vertical-align: middle;
  z-index: 10;
  animation: animate 3s ease infinite;
  animation-delay: 0;
  object-fit: none;
}

.cover .wrap_cities {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.btn_color {
  border-color: #C69F89;
}


.cover .cities {
  opacity: 0.3;
  bottom: 0;
  position: absolute;
  width: 100%;
  left: 0%;
  z-index: 2;
}

.cover .wrap_cities .moon {
  width: 10%;
  position: absolute;
  z-index: 1;
  top: 20%;
  left: 10%;
  opacity: 0.3;
}

@keyframes animate {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(7px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
