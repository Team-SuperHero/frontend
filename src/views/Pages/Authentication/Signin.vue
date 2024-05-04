<template>
    <!-- <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Passord" v-model="password" /></p>
    <p><button @click="signin"> Submit </button></p>
    <p><button @click="signInWithGoogle"> Sign in with Google </button></p>
    <p v-if="errorMessage">{{ errorMessage }}</p> -->
    <div class="container">
        <div class="signin-form">
            <div class="label px-5 py-5">
                <h1 class="text-primary mb-3">Connectez-vous !</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Adresse email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mot de passe</label>
                    <input class="form-control" id="exampleFormControlTextarea1" rows="3" type="password" placeholder="Password" v-model="password" />
                </div>
                <button type="button" class="btn btn-primary" @click="signin">Se connecter</button>
                <p class="mt-3 mb-0 text-primary reset_password" @click="reset_password"><a href="#">Mot de passe oublié ? </a></p>
                <p class="mb-3 text-primary reset_password" @click="create_account"><a href="#">Créer un compte</a></p>
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
            signInWithEmailAndPassword, 
            GoogleAuthProvider,
            signInWithPopup
        } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const errorMessage = ref();
const router = useRouter();
const signin = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(data => {
            console.log("Successfully registered");
            router.push('/dashboard')
        })
        .catch(error => {
            switch (error.code) {
                case "auth/invalid-email":
                    errorMessage.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errorMessage.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errorMessage.value = "Incorect password"
                default:
                    errorMessage.value = "Email or password incorrect";
                    break;
            }
        }
        )
}
const reset_password = () => {
    sendPasswordResetEmail(getAuth(), email)
    .then(() => {
        alert("email sent")
    })
    .catch(err => console.log(err))
}

const create_account = () => {
    router.push("/register")
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
.signin-form
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 50%;
    border-radius: 10px;
    box-shadow: -8px 3px 22px -7px rgba(99,97,99,0.36);
}
.label
{
    width: 50%;
}
.imgSignin
{
    background: url("../../../assets/img/cadenas.jpg");
    width: 50%;
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.reset_password:hover
{
    opacity: 0.8;
}
.googleBtn {
    height: 50px;
    align-items: center;
    border-radius: 5px
}
.googleBtn img
{
    height: 100%;
}
</style>