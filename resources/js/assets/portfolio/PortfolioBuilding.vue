<template>
    <div class="section py-4">
    <b-container>
        <b-row>
            <b-col lg="6" md="6" sm="12" xs="12" class="text-center pb-2">
                <b-img
                    fluid-grow
                    :src="src"/>
            </b-col>
            <b-col lg="6" md="6" sm="12" xs="12" class="pb-2 text-center">
                <h1>Site Building: Bringing Your Ideas to Life</h1>
                <p>
                    Building website is my passion and I will work tirelessly to get you the site that you want.
                    Whether its for personal use, your business, or even an online store; I know I have the tools and ideas
                    to take your site to the next level. I take pride in my work, and I like to think it shines in my previous
                    projects. Each project is started from scratch, thus each website is unique and open to any customizations
                    to make your site truly personal.</p>
                <p>
                    I am a self taught developer with Vue.js and Laravel, however I have taken some Computer Programming college courses,
                    and am working towards a Bachelor's Degree in the field. While being self-taught does present some challenges, I feel that
                    it has helped me work through any problems I come across, and gives me a stronger base to work from. I do know that I am far
                    from knowing everything, but I have learned some great tricks from researching my issues, and I'm sure they will lend
                    to a great final product for any site I am working on.
                </p>
            </b-col>
        </b-row>
    </b-container>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                src: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/personaldesk.jpg'),
            }
        },
    }
</script>

<style scoped>
    .img-fluid {
        max-height: 450px;
        max-width: 400px;
    }
    .section {
        background-color: #232732;
        color:white;
        background-size: cover;
    }
</style>
