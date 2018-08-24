<template lang="pug">
    div
        h1 Login
        input(v-model="username")
        input(v-model="password", type="password")
        button(@click="login") test
</template>

<script>
export default {
    data() {
        return {
            username: 'test',
            password: 'test'
        }
    },
    methods: {
        async login() {
            return this.$auth
            .loginWith('local', {
                data: {
                    username: this.username,
                    password: this.password
                }
            })
            .catch(e => {
                this.error = e + ''
             })
        }
    }
}
</script>

<style>
</style>
