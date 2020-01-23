<template>
    <div>
        <b-carousel>
            <b-carousel-slide class="masthead" img-height="550">
                <template v-slot:img>
                    <div class="wrapper">
                        <transition name="fade">

                            <b-img class="img-fluid" v-bind:src="src" alt="" v-on:load="onLoaded" v-show="loaded" fluid-grow height="550"/>



                            <!--
                                        <b-carousel
                                            img-width="1024"
                                            img-height="600"
                                            v-on:load="onLoaded"
                                            v-show="loaded"
                                        >
                                            <b-carousel-slide
                                                caption="Trevor Tanner"
                                                text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                                v-bind:img-src="src"

                                            >
                                                <router-link to="/contact"><b-button>Reach Out</b-button></router-link>

                                            </b-carousel-slide>

                                        </b-carousel>
                            -->


                        </transition>
                    </div>
                </template>
                <b-container>
                    <b-row>
                        <b-col class="mx-auto carousel-caption">
                            <div class="site-heading text-center">
                                <h1>My Previous Projects</h1>
                                <span class="subheading">Get an idea of my skills and expertise</span>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>

            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                src: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/workstation1080.jpg'),
                loaded: false,
            }
        },
        methods: {
            onLoaded() {
                this.loaded = true;
                console.log('loaded')
            }
        },
    }
</script>

<style scoped>
    .img-fluid {
        max-height: 550px;
    }

    .wrapper {
        position: relative;
        width: 100%;
        height: auto;
        background: black;
    }

    .fade-enter-active {
        transition: opacity 2s ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }

    .carousel-caption {

        position: inherit;
        right: auto;
        bottom: auto;
        left: auto;
        top: auto;
        z-index: 10;
        padding: 60px;
    }

    .masthead {
        position: relative;

    }



    .masthead .page-heading,
    .masthead .post-heading,
    .masthead .site-heading {
        font-family: 'Big Shoulders Text', cursive;
        /*padding: 200px 0 150px;*/
        color: white;
    }

    @media only screen and (min-width: 768px) {
        .masthead .page-heading,
        .masthead .post-heading,
        .masthead .site-heading {
            padding: 100px 0;
        }
    }

    .masthead .page-heading,
    .masthead .site-heading {
        text-align: center;
    }

    .masthead .page-heading h1,
    .masthead .site-heading h1 {
        font-size: 8vw;
        margin-top: 0;
    }

    .masthead .page-heading .subheading,
    .masthead .site-heading .subheading {
        font-size: 4vw;
        font-weight: 300;
        line-height: 1.1;
        display: block;
        margin: 10px 0 0;
        font-family: 'Big Shoulders Text', cursive;
    }

    @media only screen and (min-width: 768px) {
        .masthead .page-heading h1,
        .masthead .site-heading h1 {
            font-size: 80px;
            font-family: 'Big Shoulders Text', cursive;
        }
    }

    .masthead .post-heading h1 {
        font-size: 6vw;
    }

    /*Everything under 400px*/
    @media (max-width: 400px) {
        .carousel-caption {
            padding: 20px;
        }

    }

    /*Everything under 576 to 400px*/
    @media (min-width: 400px) {
        .carousel-caption {
            padding: 50px;
        }

    }


    /*Small devices (landscape phones, 576px and up)*/
    @media (min-width: 576px) {
        .carousel-caption {
            padding: 50px;
        }

    }

    /*Medium devices (tablets, 768px and up)*/
    @media (min-width: 768px) {
        .carousel-caption {
            padding: 20px;
        }

    }

    /*Large devices (desktops, 992px and up)*/
    @media (min-width: 992px) {
        .carousel-caption {
            padding: 50px;
        }

    }

    /*Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {
        .carousel-caption {
            padding: 50px;
        }
    }



    /*@media only screen and (min-width: 768px) {*/
    /*    .masthead .post-heading h1 {*/
    /*        font-size: 55px;*/
    /*    }*/

    /*    .masthead .post-heading .subheading {*/
    /*        font-size: 30px;*/
    /*    }*/
    /*}*/
</style>
