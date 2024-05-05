<script setup>
import Modal_card from "../components/Modal_card.vue"
// import { defineProps } from 'vue'

const props = defineProps({
    name: String,
    image: String,
    description: String,
    payement_method: String
})
console.log(props.image)
</script>

<template>
    <section class="card_shop">
        <div id="card_container" class="container d-flex align-items-center  flex-wrap">
            <div class="card d-flex position-relative flex-column">
                <!-- bouton triger modal -->
                <button type="button" class='btn imgContainer' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img :src="'https://teamsuperhero.codeo.mg' + props.image">
                </button>
                <!-- modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <Modal_card
                                :name="props.name" 
                                :description="props.description" 
                                :image="props.image"
                                :payement="props.payement_method" 
                                 />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- modal -->
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif
}

#card_container {
    margin: auto
}

.card_shop {
    background: #000;
    padding-top: 50px;
}

.card_shop button {
    border-radius: 20px;
}

.container .card {
    max-width: 300px;
    height: 300px;
    margin: 30px 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 20px;
    border: none
}

button {
    border-width: 0px;
}

.container .card .imgContainer {
    position: relative;
    width: 250px;
    height: 100%;
    z-index: 1;
    border-radius: 10px;
}

.container .card .imgContainer img {
    max-width: 100%;
    border-radius: 20px;
    height: 100%;
    object-fit: cover;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}

.container .card .imgContainer img:hover {
    transform: scale(1.1);
    transition: 1s ease-in-out;
}

.modal-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    border-radius: 20px
}

.modal-content {
    border-radius: 20px
}

@media (max-width: 330px) {
    .container .card .imgContainer {
        left: -2px;
    }
}
</style>
