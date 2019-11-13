<template>
    <div class="container auth-contain">
        <div class="row my-5">
            <div class="col-md-4 offset-md-4">
                <form>
                    <h3 class="text-center my-4">Sign Up</h3>
                  <div class="form-group">
                    <label>User name</label>
                    <input v-model="name" type="text" class="form-control"  placeholder="John Doe">
                  </div>
                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="email" type="email" class="form-control"  placeholder="Name@eden.ng">
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="password" type="password" class="form-control" placeholder="Password">
                  </div>

                  <button v-on:click="registerUser()" type="submit" class="btn form-control btn-success">Submit</button>
                </form>
            </div>
        </div>
    </div> <!--ending div for the page content-->
</template>

<script>
// import Axios from 'axios';

export default {
    name: 'SignUp',
    components: {

    },
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        registerUser() {
            // console.log(this.email, this.name, this.password);
            Axios.post('http://cabasa.test/api/cabasa', {
                name: this.name,
                email: this.email,
                password: this.password
            }).then(response =>{
                // console.log(response);
            }).catch(error => {
                // console.log(error)
            })
        }
    }
}
// end of component class
</script>

<style scoped>


</style>
