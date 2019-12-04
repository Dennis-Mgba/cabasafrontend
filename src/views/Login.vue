<template>
    <div class="container auth-contain">
        <div class="row my-5">
            <div class="col-md-4 offset-md-4">
                <form>
                    <h3 class="text-center my-4">Login</h3>
                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="email" type="email" class="form-control"  placeholder="Name@eden.ng">
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="password" type="password" class="form-control" placeholder="Password">
                  </div>

                  <div class="text-center unauth" v-if="error">
                      <small class="text-danger unauth-text">{{ error }}</small>
                  </div>

                  <button @click="loginUser()" type="submit" class="btn form-control btn-success">
                      <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                      {{ loading ? '' : 'Login' }}
                  </button>
                </form>
            </div>
        </div>
    </div> <!--ending div for the page content-->
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Loginn',

    beforeRouteEnter(to, from, next) {
        if (localStorage.getItem("auth")) {
            return next({ path: "/" });
        }
        next();
    },
    data() {
        return {
            email: '',
            password: '',
            error: '',
            loading: false,
        }
    },
    methods: {
        loginUser() {
            this.loading = true
            const url = 'http://laravel-api-passport.test/api/login';

            Axios.post(url, {
                email: this.email,
                password: this.password
            }).then(response =>{
                this.loading = false;
                // console.log(response);
                localStorage.setItem('auth', JSON.stringify(response.data.success))
                this.$root.auth = response.data.success;
                this.$router.push('/');
            }).catch(({ response }) => {
                this.loading = false;
                this.error = response.data.error;
            });
        }
    }

} // end of component class
</script>

<style scoped>

</style>
