<script setup>
const props = defineProps({
    name: String,
    image: String,
    description: String,
    payement_method: String
})

</script>

<template>
    <div class="container d-flex modal_product">
        <figure class="card card-product-grid card-lg"> <a href="#" class="img-wrap" data-abc="true"> <img
            :src="'https://teamsuperhero.codeo.mg' + props.image"> </a>
            <figcaption class="info-wrap">
                <div class="row">
                    <div>
                        <h2>{{props.name}}</h2>
                        <p>{{props.description}}</p>
                    </div>
                </div>
            </figcaption>
            <div class="bottom-wrap"> <a href="#" class="btn btn-primary float-left buy" data-abc="true"> Buy now </a>
            </div>
        </figure>
    </div>
</template>

<style scoped>

.buy
{
    background-color: #4e1702 !important;
    border: 1px solid #4e1702 !important;
    float: inline-end;
}

.modal_product p {
    font-family: "Briem Hand", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: white;
}

.modal_product h2 {
    font-family: "Jaini Purva", system-ui;
    font-weight: 400;
    font-style: normal;
    color: #4e1702;
}


a {
    text-decoration: none !important
}

.card-product-list,
.card-product-grid {
    margin-bottom: 0
}

.card {
    width: 500px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: rgb(8, 8, 8);
    background-clip: border-box;
    border-radius: 23px;
}

.card-product-grid:hover {
    -webkit-box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
    box-shadow: 0 4px 15px rgba(153, 153, 153, 0.3);
    -webkit-transition: .3s;
    transition: .3s
}

.card-product-grid .img-wrap {
    border-radius: 0.2rem 0.2rem 0 0;
    height: 220px
}

.card .img-wrap {
    overflow: hidden
}

.card-lg .img-wrap {
    height: 280px
}

.card-product-grid .img-wrap {
    border-radius: 0.2rem 0.2rem 0 0;
    height: 275px;
    padding: 16px
}

[class*='card-product'] .img-wrap img {
    height: 100%;
    max-width: 100%;
    width: auto;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover
}

.img-wrap {
    text-align: center;
    display: block
}

.img-wrap img {
    width: 100% !important;
    object-position: center;
    object-fit: cover;
}

.card-product-grid .info-wrap {
    overflow: hidden;
    padding: 18px 20px
}

[class*='card-product'] a.title {
    color: #212529;
    display: block
}

.rating-stars {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    white-space: nowrap;
    clear: both
}

.rating-stars li.stars-active {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden
}

.rating-stars li {
    display: block;
    text-overflow: clip;
    white-space: nowrap;
    z-index: 1
}

.card-product-grid .bottom-wrap {
    padding: 18px;
}

.bottom-wrap-payment {
    padding: 0px;
}

.rated {
    font-size: 10px;
    /* color: #b3b4b6 */
}

.btn {
    display: inline-block;
    font-weight: 600;
    color: #343a40;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.45rem 0.85rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.2rem
}

.btn-primary {
    color: #fff;
    background-color: #3167eb;
    border-color: #3167eb
}

.fa {
    color: #FF5722
}
</style>