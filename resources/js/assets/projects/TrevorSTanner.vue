<template>
    <b-container>
        <br>
        <br>
        <b-row class="text-center py-2 pt-5">
            <b-col cols="12" class="text-center">
        <h1>TT Web Development & Design</h1>
        <p>
            Need a custom website that is both functional and easy for your employees and clients to use? Then look no further
            than TT Web Development & Design. Started by Trevor Tanner, TT Web Development & Design is a Full Stack design team
            that can bring any ideas for website to life. This site functions both as an example of my web design skills, and a landing page
            for potential employers.
        </p>
            </b-col>
        </b-row>
        <b-row class="text-center sitelayout mb-4">
            <b-col cols="12" class="pb-4 pt-4">
            <b-img :src="srchome" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img :src="srcabout" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img :src="srcportfolio" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img :src="srcresume" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img :src="srccontact" fluid></b-img>
            </b-col>
        </b-row>
        <b-col cols="12" class="text-center py-2">
            <h1>Build Specs</h1>
            <p>
                This website was build using the Laravel framework, with PHP for the backend and Vue.js for the frontend. By using
                Vue for the frontend, it allowed us to create a site that is a single page application, reducing loading times and strain
                on the network.
            </p>
        </b-col>
        <b-row class="pb-4">
            <b-col class="text-center py-4">
                <h2>Next Project:</h2> <b-button to="./TTS" class="tamabtn" squared size="lg">Tama Team Sports</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "TrevorSTanner",
        data: function () {
            return {
                srchome: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/sgb/TSTHomeSG.jpg'),
                srcabout: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/sgb/TSTAboutSG.jpg'),
                srcportfolio: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/sgb/TSTPortfolioSG.jpg'),
                srcresume: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/sgb/TSTResumeSG.jpg'),
                srccontact: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/sgb/TSTContactSG.jpg'),
            }
        }
    }
</script>

<style scoped>
    .sitelayout {
        background-color: #e7e7e7;

    }

    img {
        width: 650px;
    }

    .header{
        height: 500px;
        width: 1000px;
    }
    .tamabtn {
        background-color: transparent;
        color: #007373;
        border-color: #007373;
    }

    .tamabtn:hover {
        background-color: #007373;
        color: #232732;
    }
</style>
