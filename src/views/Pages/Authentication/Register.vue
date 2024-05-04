<template>
    <div class="container">
        <div class="signin-form">
            <div class="label px-5 py-5">
                <h1 class="text-primary mb-3">Créer un compte</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Adresse email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mot de passe</label>
                    <input class="form-control" id="exampleFormControlTextarea1" rows="3" type="password"
                        placeholder="Password" v-model="password" />
                </div>
                <button type="button" class="btn btn-primary" @click="register">Créer</button>
                <hr>
                <button class="d-flex googleBtn mt-4" @click="signInWithGoogle">
                    <img src="../../../assets/img/google.png" alt="">
                    <p class="mb-0">Connecter avec google</p>
                </button>
            </div>
            <div class="imgSignin"></div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    getAuth,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(data => 
    {
        console.log("Successfully registered");
        router.push('/dashboard')
    })
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then(result => {
            console.log(result.user)
            router.push("/dashboard");
        })
        .catch(error => console.log(error))

}
</script>

<style scoped>
.signin-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 50%;
    border-radius: 10px;
    box-shadow: -8px 3px 22px -7px rgba(99, 97, 99, 0.36);
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

.googleBtn img {
    height: 100%;
}
</style>



<!-- <template>
    <h1>Create an account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Passord" v-model="password"/></p>
    <p><button @click="register"> Submit </button></p>
    <p><button @click="signInWithGoogle"> Sign  in with Google </button></p>
</template>

<script setup>
import { ref } from 'vue';
import {
            getAuth,
            createUserWithEmailAndPassword,
            GoogleAuthProvider,
            signInWithPopup
        } 
    from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(data => 
    {
        console.log("Successfully registered");
        router.push('/dashboard')
    })
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then(result => {
        console.log(result.user)
        router.push("/dashboard");
    })
    .catch(error => console.log(error))

}
</script> -->