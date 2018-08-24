const laravelNuxt = require("laravel-nuxt")

module.exports = laravelNuxt({
    head: {
        title: "Invoice System",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", content: "Invoice System for Travel Agent" }
        ]
    },
    // Your Nuxt options here...
    router: {
        middleware: ["auth"]
    },
    modules: ["@nuxtjs/auth"],
    plugins: [],
    axios: {
        proxy: true
    },
    proxy: {
        "/api": "http://localhost:8001"
    },
    auth: {
        redirect: {
            login: "/login",
            logout: "/login"
        }
    }

    // Options such as mode, srcDir and generate.dir are already handled for you.
})
