<template>
    <div>
        <div class="container-fluid big_container">
            <div class="signin-form">
                <div class="form">
                    <div class="label px-5 py-5">
                        <h1 class="mb-3">Créer un compte</h1>
                        <div class="mb-3">
                            <input required type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="email" v-model="email">
                        </div>
                        <div class="mb-3">
                            <input required class="form-control" id="exampleFormControlTextarea1" rows="3"
                                type="password" placeholder="mot de passe" v-model="password" />
                        </div>
                        <div class="d-flex">
                            <button type="button" class="btn btn-primary" @click="register">Créer</button>
                            <div v-if="isLoading" class="spinner-border loader mx-3" role="status">
                                <span class="sr-only"></span>
                            </div>
                        </div>
                        <p><small class="text-danger">{{ errorMessage }}</small></p>
                    </div>
                    <img class="potion" src="../../../assets/img/potion.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
let errorMessage = ref("");
let isLoading = ref(false);
const router = useRouter();
const register = () => {
    isLoading.value = true;
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(data => {
            isLoading.value = false;
            router.push('/dashboard')
        })
        .catch(e => {
            errorMessage.value = "*Erreur lors du création"
        })
}

// const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(getAuth(), provider)
//         .then(result => {
//             console.log(result.user)
//             router.push("/dashboard");
//         })
//         .catch(error => console.log(error))

// }
</script>

<style scoped>
.big_container {
    height: 100vh;
    background: url("../../../assets/img/Default_maison_hante_halloween_3D_1.webp");
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
