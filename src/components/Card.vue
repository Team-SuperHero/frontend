<script setup>
    import Modal_card from "../components/Modal_card.vue"
</script>


<template >
   <section class="card_shop">
        <div class="container d-flex align-items-center justify-content-center position-relative flex-wrap">
            <div class="card d-flex position-relative flex-column">
                <!-- bouton triger modal -->
                <button type="button" class='btn imgContainer' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src='https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
                </button>
                <!-- modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Modal_card />
                            </div>
                        </div>
                    </div>
                    </div>
                <!-- modal -->
                <div class="content">
                    <h2>Card One</h2>
                </div>
            </div>
            <!-- <div class="card d-flex position-relative flex-column">
                <div class='imgContainer'>
                    <img src='https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
                </div>
                <div class="content">
                    <h2>Card Two</h2>
                </div>
            </div>
            <div class="card d-flex position-relative flex-column">
                <div class='imgContainer'>
                    <img src='https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
                </div>
                <div class="content">
                    <h2>Card Three</h2>
                </div>
            </div> -->
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
body
{
    min-width: 100vw;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #16384c;
}

.card_shop
{
    background: #000;
    padding-top: 50px;
}
.container .card
{
    max-width: 300px;
    height: 215px;
    margin: 30px 10px;
    padding: 20px 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
}

button
{
    border-width: 0px;
}
.container .card:hover
{
    height: 250px;
}
.container .card .imgContainer
{
    position: relative;
    width:250px;
    height:250px;
    top:-50px;
    /* left:10px; */
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}
.container .card .imgContainer img
{
    max-width: 100%;
    border-radius: 4px;
}
.container .card .content
{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color:#111;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease-in-out;
}
.container .card:hover .content
{
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}

@media (max-width: 330px){
    .container .card .imgContainer{
        left: -2px;
    }
}
</style>
