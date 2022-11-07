import { projectAuth } from "@/Firebase/config"
import { ref } from "vue"

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
       const res = await projectAuth.createUserWithEmailAndPassword(email, password)
       if (!res) {
        throw new Error('Could not complete sign up')
       }
       await res.user.updateProfile({ displayName })
       error.value = null

       console.log(res.user)

       return res

    } catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {

    return {error , signup}

}

export default useSignup