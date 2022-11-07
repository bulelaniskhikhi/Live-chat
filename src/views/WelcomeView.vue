<template>
    <div class="welcome container ">
       <p>Welcome</p> 

       <div v-if="showLogin">
        <h2>Login</h2>
        <LoginForm @login="enterChat"/>
        <p>
            No account yet? 
            <span 
                @click="showLogin = false"
            >
                SignUp
            </span> 
            instead
        </p>
       </div>

       <div v-else>
        <h2>Sign up</h2>
        <SignupForm @signup="enterChat"/>
        <p>
            already have an account? 
            <span 
                @click="showLogin = true"
            >
                Login
            </span> 
            instead
        </p>
       </div>

    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: {SignupForm, LoginForm },
    setup() {
     const showLogin = ref(true)
     const router = useRouter()

     const enterChat = ( ) => {
        router.push({ name: "Chatroom" })
     }

     return {showLogin, enterChat}
    }
}

</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
/* From styles */
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
} 
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    cursor: pointer;
    color: pink; 
    border-bottom: 2px dotted; 
}
.welcome button {
    margin: 5px auto;
}
</style>