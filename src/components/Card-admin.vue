<template>
    <div class="card">
        <p class="text-white"></p>
    </div>
</template>

<style scoped>
.card
{
    width: 200px;
    height: 200px;
    background: url("/src/assets/img/potion.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.card:hover
{
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
}
</style>