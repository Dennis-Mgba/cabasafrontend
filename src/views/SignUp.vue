<template>
   <div class="container auth-contain">
       <div class="row my-5">
           <div class="col-md-4 offset-md-4">
               <form>
                   <h3 class="text-center my-4">Sign Up</h3>
                 <div class="form-group">
                   <label>User name</label>
                   <input v-bind:class="{ 'is-invalid': errors.name, 'is-valid': !errors.name && this.submitted }" v-model="username" type="text" class="form-control"  placeholder="John Doe">
                   <div class="" v-if="errors.name">
                       <small class="text-danger" v-for="error in errors.name" :key="error">{{ error }}</small>
                   </div>
                 </div>

                 <div class="form-group">
                   <label>Email</label>
                   <input v-bind:class="{ 'is-invalid': errors.email, 'is-valid': !errors.email && this.submitted }" v-model="email" type="email" class="form-control"  placeholder="name@mail.com">
                   <div class="" v-if="errors.email">
                       <small class="text-danger" v-for="error in errors.email" :key="error">{{ error }}</small>
                   </div>
                   <div>
                       <small class="alert" id="msg">{{emailMsg}}</small>
                   </div>
                 </div>

                 <div class="form-group">
                   <label>Password</label>
                   <input v-bind:class="{ 'is-invalid': errors.password, 'is-valid': !errors.password && this.submitted }" v-model="password" type="password" class="form-control" placeholder="Password">
                   <div class="" v-if="errors.password">
                       <small class="text-danger" v-for="error in errors.password" :key="error">{{ error }}</small>
                   </div>
                 </div>

                 <div class="form-group">
                   <label>Confirm password</label>
                   <input v-bind:class="{ 'is-invalid': errors.confirm_password, 'is-valid': !errors.confirm_password && this.submitted }" v-model="confirm_password" type="password" class="form-control" placeholder="Password">
                   <div class="" v-if="errors.confirm_password">
                       <small class="text-danger" v-for="error in errors.confirm_password" :key="error">{{ error }}</small>
                   </div>
                 </div>

                 <button v-on:click="registerUser()" :disabled="isDisabled, loading" type="submit" class="btn form-control btn-success">
                     <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                     {{ loading ? '' : 'Sign up' }}
                 </button>
               </form>
           </div>
       </div>
   </div> <!--ending div for the page content-->
</template>

<script>
import Axios from 'axios';

export default {
    name: 'SignUp',
    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem("auth")) {
            return next({ path: "/" });
        }
        next();
    },
    data(){
        return {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            errors: {},
            submitted: false,
            loading: false,
            emailMsg: '',
        }
    },
    computed: {
      isDisabled() {
        return !this.email || !this.password
      }
    },
    methods: {
        registerUser() {
            const url = 'https://cabasa.herokuapp.com/api/cabasa/register';
            let domain = this.email.indexOf("@edenlife");
            let dotpos = this.email.lastIndexOf('.ng');

            if (!domain || domain<1 || dotpos<domain+2 || dotpos+2 >= this.email.length) {
                this.emailMsg = "Please enter an eden email";
             // console.log('the if statement is working')
         }else {
             this.loading = true
            Axios.post(url, {
                name: this.username,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            }).then(response =>{            // get the response form that post api call
                this.loading = false;
                this.submitted = true;
                localStorage.setItem('auth', JSON.stringify(response.data.success))
                this.$root.auth = response.data.success;     // in the line of code above we are grabbing the auth object data defined main.js file, in the vue instance and assiging the response gotten from our api request to it
                this.$router.push('/');
            }).catch(({ response }) => {
                this.loading = false;
                this.submitted = true;
                this.errors = response.data.error;
            })
            }
        }
    }
}
// end of component class
</script>

<style scoped>
    #msg {
        color: red;
    }
</style>
