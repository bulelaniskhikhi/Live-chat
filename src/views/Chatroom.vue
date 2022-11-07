<template >
    <div class="container">
        <Navbar/>
        <ChatWindow/>
        <NewChatFormVue/>
    </div>
</template>
<script>
import NewChatFormVue from "@/components/NewChatForm.vue";
import ChatWindow from "@/components/ChatWindow.vue";
import Navbar from "../components/Navrbar.vue"
import getUser from "@/composables/getUser";
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { Navbar, NewChatFormVue, ChatWindow},
    setup() {
        const { user } = getUser();
        const router = useRouter()
        
        watch(user, () => {
            if (!user.value) {
                router.push({name: 'welcome'})
            }
        })
}
}
</script>
<style >
  
</style>