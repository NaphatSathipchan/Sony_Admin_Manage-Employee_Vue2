<template>
  <div>
    <input class="email" type="email" v-model="email" placeholder="Email">


    <input class="password" type="password" v-model="password" placeholder="Password">
    <router-view/>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      
      this.$router.push("/Admin");
      
      
    }
  }
};
</script>

<style scoped>
.r{
  
}

</style>


