<template>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input class="form-control" id="name" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="stock" class="form-label">Nombre(s)</label>
            <input class="form-control" id="stock" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="categorie" class="form-label">Categories</label>
            <select class="form-control" v-model="selectedValue">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
        </div>
        <div class="mb-3">
            <label for="payement" class="form-label">Paiement</label>
            <select class="form-control" v-model="transactionValue">
                <option v-for="transaction in transactions" :key="transaction.id" :value="transaction.name">
                  {{ transaction.name }}
                </option>
              </select>
        </div>
        <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="file" class="image" id="image">
        </div>
        <div class="d-flex">
            <button @click="create" type="submit" class="btn btn-primary">Créer</button>
            <div v-if="isLoading" class="spinner-border loader mx-3" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    </form>
</template>

<script setup>
import http from '@/services/http';
import { defineProps, onMounted, ref } from 'vue';

const emit = defineEmits(['close'])

const props          = defineProps({id : Number})
let categories       = ref([])
let transactions     = ref([
    {
        id : 1, name: "Ame"
    },
    {
        id : 2, name: "Sang"
    },
    {
        id : 3, name: "Vie"
    },
    {
        id : 4, name: "Argent"
    }

])
let selectedValue    = ref(null)
let transactionValue = ref(null)
let name             = ref("")
let description      = ref("")
let number           = ref(null)
let image            = ref("")
let isLoading      = ref(false)

const get_category = () => {
    http.get('/category')
    .then((response) =>
        {
            categories.value = response.data.results
        })
}
onMounted(() =>
{
    get_category()
})



const create = () => {
    isLoading.value = true
    console.log("selected :" + selectedValue.value)
    
    http.post("/product",
    {
        name : name.value,
        description : description.value,
        stock : number.value,
        category_id : selectedValue.value,
        payement : transactionValue.value,
        image : image.value
    })
    .then(() =>
    {
        isLoading.value = false
        emit('close')
    })
}

console.log(props.id)
</script>