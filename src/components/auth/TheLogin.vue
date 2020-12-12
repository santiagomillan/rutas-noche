<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="login.email">
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="login.password">
    </div>

    <pre>
        {{ login }}
    </pre>
    <!-- <div class="form-group"> 
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
     </div> -->
    <button 
    type="submit" 
    class="btn btn-primary"
    @click.prevent="loginUser"
    >Submit</button>
  </form>
</template>


<script>
import swal from 'sweetalert';
export default {
  data() {
    return {
        login:{
            email: "",
            password: "",
            }
        }
    },
    methods:{
        async loginUser(){
            try{
            //console.log(this.login)
                let response = await this.$http.post('/api/usuario/login', this.login);
                console.log(response.data);
                token = response.data.tokenReturn;
                user = response.data.user;

                localStorage.setItem('jwt',token);
                localStorage.setItem('user',JSON.stringify(user))

                if(token){
                    swal("Login exitoso" , "Los datos son correctos" , "success");
                    this.$router.push('/home');
                }
            }
            catch(error){
               swal("Ooops!" , "Los datos son incorrectos" , "error");
                console.log(error)
            }
        }
        
    }
};
</script>


<style scoped>
</style>