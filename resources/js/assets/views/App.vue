<template>
    <div>
        <app-header></app-header>
        <div>
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
        <footer>
            <cookie-law/>
        </footer>
    </div>
</template>

<script>
    import Header from "../../components/layout/Header";
    import Footer from "../../components/layout/Footer";
    import CookieLaw from "vue-cookie-law";
    export default {
        components: {
            AppHeader: Header,
            AppFooter: Footer,
            CookieLaw: CookieLaw
        },
        metaInfo: {
            // if no subcomponents specify a metaInfo.title, this title will be used
            title: 'Default Title',
            // all titles will be injected into this template
            titleTemplate: 'TT Web Development & Design - %',
            description: '',
        }
    }
</script>

<style scoped>
    .Cookie {
        background-color: black;
        color: white;
    }

    .Cookie.Cookie__content {
        color: white;
    }

    .cookie__button {
        color: red;
    }
</style>
