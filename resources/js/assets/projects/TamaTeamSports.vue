<template>
    <b-container>
        <br>
        <br>
        <b-row class="text-center py-2 pt-5">
            <b-col cols="12" class="text-center">
                <h1>Tama Team Sports</h1>
                <p>
                    Need a custom website that is both functional and easy for your employees and clients to use? Then look no further
                    than TT Web Development & Design. Started by Trevor Tanner, TT Web Development & Design is a Full Stack design team
                    that can bring any ideas for website to life. This site functions both as an example of my web design skills, and a landing page
                    for potential employers.
                </p>
            </b-col>
            <b-col cols="12" class="text-center py-2">
                <b-img src="https://via.placeholder.com/1000x500?text=TTS+Header" fluid></b-img>

            </b-col>
            <b-col cols="12" class="text-center py-2">
                <h1>Build Specs</h1>
                <p>
                    This website was build using the Laravel framework, with PHP for the backend and Vue.js for the frontend. By using
                    Vue for the frontend, it allowed us to create a site that is a single page application, reducing loading times and strain
                    on the network.
                </p>
            </b-col>
        </b-row>
        <b-row class="text-center sitelayout mb-4">
            <b-col cols="12" class="pb-4 pt-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+Home" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+Products" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+ProductDisplay" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+Manufacturers" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+Contact" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+Imprinting" fluid></b-img>
            </b-col>
            <b-col cols="12" class="pb-4">
                <b-img src="https://via.placeholder.com/600x700?text=TTS+FAQ" fluid></b-img>
            </b-col>
        </b-row>
        <b-row class="pb-4">
            <b-col class="text-right py-4">
                <h2>Previous Project:</h2> <b-button to="./TST" class="tamabtn" squared size="lg">TT Web Development</b-button>
            </b-col>
            <b-col class="text-left py-4">
                <h2>Next Project:</h2> <b-button to="#" class="tamabtn" squared size="lg">Trevor Tanner's Blog</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'TamaTeamSports'
    }
</script>

<style scoped>
    .sitelayout {
        background-color: #e7e7e7;

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
