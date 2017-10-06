<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form 
          name="tab-tracker-form"
          autocomplete="off"
        >
          <v-text-field
            label="Email"
            v-model="email"></v-text-field>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <div class="danger-alert" v-html="error"></div><br>
        <v-btn
          large
          @click="register"
        >Submit</v-btn>
      </panel>
    </v-flex>
  </v-layout>
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
        if (response.status === 200) {
          console.log(response)
          this.email = ''
          this.password = ''
          this.error = 'Account created successfully.'
        }
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped></style>
