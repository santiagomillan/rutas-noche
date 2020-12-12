<template>
  <div class="home">
   <the-home />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import TheHome from '../components/auth/TheHome.vue'

export default {
  name: 'Home',
  components: {
    TheHome
  }
}
</script>
