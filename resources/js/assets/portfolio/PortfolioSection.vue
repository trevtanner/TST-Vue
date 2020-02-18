<template>
    <div class="section">
    <b-container class="pb-4 pt-4">
        <b-row align-h="center">
    <b-card-group deck>
            <b-card :img-src="srctst"
                    overlay
                    fluid
                    img-height="250"
                    img-top
                    @mouseover="hover1 = true"
                    @mouseleave="hover1 = false"
                    text-variant="light"
                    :class="{ active:isActive }"
            >
                <transition name="fade">
                <b-card-text v-if="hover1" class="text text-center">
                    <h3>TT WEB DEVELOPMENT & DESIGN</h3>
                    <i>Personal Website</i>
                    <br>
                    <div class="py-2">
                    <b-button class="projectbtn" squared href="/projects/TST">View Project</b-button>
                    </div>
 <!--                   The website your are viewing right now was built by me, using some of the many tools I can bring
                    to
                    your website as well. This website is just a taste, if you'd like to see the true range of my
                    talents
                    please look at my other projects.-->
                </b-card-text>
                </transition>
            </b-card>
            <b-card :img-src="srctts"
                    overlay
                    img-top
                    img-height="250"
                    @mouseover="hover2 = true"
                    @mouseleave="hover2 = false"
                    text-variant="dark"
                    shadow
                    class="card"

            >
                <transition name="fade">
                <b-card-text v-if="hover2" class="text text-center">
                    <h2>TAMA TEAM SPORTS</h2>
                    <i>Product display site</i>
                    <br>
                    <div class="pt-4">
                        <b-button class="projectbtn" squared href="/projects/TTS">View Project</b-button>
                    </div>
                    <!--A website built for a custom logo-ing company. This site was to display a basic selection of
                    what goods
                    and services they offered, as well as giving the client an option to add and remove products.-->
                </b-card-text>
                </transition>
            </b-card>
            <b-card :img-src="srcblog"
                    overlay
                    img-height="250"
                    img-top
                    @mouseover="hover3 = true"
                    @mouseleave="hover3 = false"
                    text-variant="dark"
                    shadow
                    class="card"

            >
                <transition name="fade">
                <b-card-text v-if="hover3" class="text text-center">
                    <h3>TREVOR TANNER'S BLOG</h3>
                    <i>Blog Website</i>
                    <br>
                    <div class="pt-4">
                        <b-button class="comingsoon" squared disabled>Coming Soon</b-button>
                    </div>
                  <!--  A blog about many things going on in my life. IF you want a deep, inside look into who Trevor
                    Tanner
                    really is, this is the place to go. I talk about my interests and things I do in my free time,
                    as well
                    as any large life events I need to share.-->
                </b-card-text>
                </transition>
            </b-card>
   <!-- <div class="row pt-2">
        <div class="col-4">
        <div class="card">
            <div class="card-header">
                VaporWave GG Website
            </div>
            <div class="card-body">
                A website for a gaming organization. Their site consisted of information about games they play, and
                the players they currently have on the team, each with customizable profiles the fans could visit.
            </div>
            <div class="card-footer">
                <a href="#">vaporwavegg.com</a>
            </div>
        </div>
    </div>
    </div>-->
    </b-card-group>
    </b-row>
    </b-container>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                hover1: false,
                hover2: false,
                hover3: false,
                srctst: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/tst-project.jpg'),
                srctts: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/tts-project.jpg'),
                srcblog: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/ttblog-project.jpg'),

            }
        },
        methods: {
            dim:function () {
            if(hover1=false){
            }
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active {
        transition: opacity .5s ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;


    }

    .fade-enter {
        opacity: 0;

    }





    .section {
        background-color: white;
        background-size: cover;
    }

    p {
        font-size: 18px;
    }

    .projectbtn {
        background-color: transparent;
        border-color: #007373;
        color: white;
    }
    .comingsoon {
        background-color: #007373;
        border-color: #007373;
        color: black;
    }

    .projectbtn:hover {
        background-color: #007373;
    }

    .text {
        color: white;
    }

</style>
