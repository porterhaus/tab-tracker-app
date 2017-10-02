<template>
  <div>
    <h1>Register</h1>

    <input 
        type="email"
        name="email"
        v-model="email"
        placeholder="email" />
    <br>
    <input 
        type="password"
        name="password"
        v-model="password"
        placeholder="password" />
    <br>
    <div class="error" v-html="error" />
    <button
      @click="register">
      Register
    </button>

  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red
}
</style>
