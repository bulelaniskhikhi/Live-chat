import { projectAuth } from "@/Firebase/config"
import { ref } from "vue"

const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const res = await  projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        return res
    } catch(err) {
        console.log(err.value)
        error.value = 'incorrect login'
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin