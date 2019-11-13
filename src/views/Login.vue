<template>
    <div class="container auth-contain">
        <div class="row my-5">
            <div class="col-md-4 offset-md-4">
                <form>
                    <h3 class="text-center my-4">Login</h3>
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control"  placeholder="Name@eden.ng">
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password">
                  </div>

                  <button type="submit" class="btn form-control btn-success">Login</button>
                </form>
            </div>
        </div>
    </div> <!--ending div for the page content-->
</template>

<script>

export default {
    name: 'SignIn',
    components: {

    },

} // end of component class
</script>

<style scoped>

</style>
