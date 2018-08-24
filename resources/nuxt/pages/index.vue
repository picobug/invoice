<template lang="pug">
    #home
        h1 Hello {{ name }}!
        button(v-if="$auth.$state.loggedIn" @click="$auth.logout()") Logout
</template>

<script>
export default {
    data() {
        return { name: 'world' };
    }
}
</script>

<style>
</style>
