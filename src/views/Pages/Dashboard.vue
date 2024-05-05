<template>
  <div class="container-fluid bg-dark">
    <div class="header">
      <h1 class="text-white">{{ last_name + ' ' + first_name }}</h1>
    </div>
    
    <div class="container py-5">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Nouveaux produits
        </button>
    </div>

    <!-- Modal -->
    <div v-show="showModal" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ProductForm @close="showModal = false"  :id="user_id" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h1>Vos produits</h1>
      <div>
        <h2>card</h2>
      </div>
      <h1>Produits achetés</h1>
      <div>
        <h2>card</h2>
      </div>
      <h1>Produits Vendus</h1>
      <div>
        <h2>card</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import ProductForm from '@/components/productForm.vue';
import http from '@/services/http';
import { onMounted, ref } from 'vue';
import { useProductsStore } from '@/stores/product';

// const productStore = useProductsStore()

let last_name = ref("")
let first_name = ref("")
const showModal = false
const route = useRoute()
const user_id = route.params.id
console.log(user_id)

const get_user = () => {
  http.get("/user/" + user_id)
  .then(response => 
  {
    last_name.value = response.data.last_name
    first_name.value = response.data.first_name
  })
}

onMounted(() =>
{
  // productStore.fetchProduct()
  get_user()
})

// const products = productStore.products
// console.log(products)
</script>

<style scoped>
.container-fluid {
  height: 100%;
  padding: 0
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: black;
}
</style>