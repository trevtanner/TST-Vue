<template>
        <footer>
            <cookie-law/>
        </footer>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'
    export default {
        components: {CookieLaw }
    }
</script>

<style scoped>
    .Cookie {
        background-color: black;
    }

    .Cookie_content {
        color: white;
    }

    .cookie_button {
        color: red;
    }
</style>
