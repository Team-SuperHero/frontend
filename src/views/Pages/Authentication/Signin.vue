<template>
    <div class="container-fluid big_container">
        <div class="signin-form">
            <div class="form">
                <div class="label px-5 py-5">
                    <h1 class="mb-3">Connectez-vous !</h1>
                    <div class="mb-3">
                        <input required class="form-control" id="exampleFormControlInput1" placeholder="pseudo"
                            v-model="pseudo">
                    </div>
                    <div class="mb-3">
                        <input required class="form-control" id="exampleFormControlTextarea1" rows="3" type="password"
                            placeholder="mot de passe" v-model="password" />
                    </div>
                    <button type="button" class="btn btn-primary" @click="signin">Se connecter</button>
                    <p><small class="text-danger">{{ errorMessage }}</small></p>
                    <p class="mb-3 reset_password" @click="create_account"><a href="#">Créer un compte</a></p>
                    <hr>
                </div>
                <img class="potion" src="../../../assets/img/potion.webp" alt="">
                <!-- <div class="imgSignin"></div> -->
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import http from '@/services/http';
import { jwtDecode } from "jwt-decode";
import { useRouter } from 'vue-router';

const pseudo = ref("");
const password = ref("");
const errorMessage = ref();
const router = useRouter();

const signin = () => {
    http.post('auth/pair',
        {
            username: pseudo.value,
            password: password.value
        }
    )
        .then(response => {
            console.log(response)
            localStorage.setItem('acces_token', response.data.access)
            const user = jwtDecode(response.data.access)
            router.push('/dashboard/' + user.user_id)
        })
}

const create_account = () => {
    router.push("/register")
}

</script>

<style scoped>
.big_container {
    height: 100vh;
    background: url("../../../assets/img/maison-hantee.webp");
    background-repeat: no-repeat;
    background-size: cover
}

.signin-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    background-image: url("../../../assets/img/papyrus.webp");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

.signin-form .form {
    width: 70%;
    display: flex;
    justify-content: center;
}

.signin-form h1,
.signin-form a {
    color: #4e1702;
}

.signin-form a,
.signin-form button,
input::placeholder {
    font-family: "Briem Hand", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.signin-form h1 {
    font-family: "Jaini Purva", system-ui;
    font-weight: 400;
    font-style: normal;
}

.signin-form input {
    background-color: transparent;
    border: 0px;
    border-bottom: 2px solid #4e1702;
    border-radius: 0px;
}

.label {
    width: 50%;
}

.imgSignin {
    background: url("../../../assets/img/cadenas.jpg");
    width: 50%;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.reset_password:hover {
    opacity: 0.8;

}

.googleBtn {
    height: 50px;
    align-items: center;
    border-radius: 5px
}

.potion {
    width: 15%;
    object-fit: contain;
    transform: rotate(21deg);
    animation: animate 2s linear infinite;
    opacity: 0.9;
}

.googleBtn img {
    height: 100%;
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