const laravelNuxt = require("laravel-nuxt")

module.exports = laravelNuxt({
    // Your Nuxt options here...
    router: {
        middleware: ["auth"]
    },
    modules: ["@nuxtjs/auth"],
    plugins: []

    // Options such as mode, srcDir and generate.dir are already handled for you.
})
