<template>
    <b-navbar toggleable="sm" class="header" type="custom" variant="custom">
        <b-navbar-brand to="/home"><b-img :src="src"/></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item to="/home" right>Home</b-nav-item>
                <b-nav-item to="/about" right>About</b-nav-item>
                <b-nav-item right to="/portfolio">Portfolio</b-nav-item>
                <b-nav-item right to="/resume">Resume</b-nav-item>
                <b-nav-item right to="/contact">Contact</b-nav-item>
                <b-nav-item right disabled to="/blog">Blog</b-nav-item>

            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        data: function () {
            return {
                src: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/TTlogoBlkBG50.jpg'),
                loaded: false,
            }
        }
    }
</script>

<style scoped>


    .header {
        padding-bottom: 5px;
        padding-top: 5px;
        background-color: #232732;
        text-decoration-color: white;
        font-family: 'Rubik';
        font-size: 16px;
    }

    a{
        color: white;
    }


    a:hover {
        color: #007373;
    }

    button {
        color: white;
        border-color: #007373;
        background-color: #232732;
    }



</style>
