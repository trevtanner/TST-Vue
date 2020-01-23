<template>
    <div>
        <b-carousel>
            <b-carousel-slide class="masthead">
                <template v-slot:img>
                    <div class="wrapper">
                        <transition name="fade">

                            <b-img class="img-fluid w-100" v-bind:src="src" alt="" v-on:load="onLoaded" v-show="loaded" fluid height="550px"/>



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
                            <div class="site-heading text-right">
                                <h1>Contact</h1>
                                <span class="subheading text-right">Let's get started on your website today</span>
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
                src: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/contactus1080.jpg'),
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
        height: 15%;
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
        padding-left: 50px;
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

    .masthead .post-heading .meta,
    .masthead .post-heading .subheading {
        line-height: 1.1;
        display: block;
    }

    .masthead .post-heading .subheading {
        font-size: 4vw;
        font-weight: 600;
        margin: 10px 0 30px;
        font-family: 'Big Shoulders Text', cursive;    }


    /*@media only screen and (min-width: 768px) {*/
    /*    .masthead .post-heading h1 {*/
    /*        font-size: 55px;*/
    /*    }*/

    /*    .masthead .post-heading .subheading {*/
    /*        font-size: 30px;*/
    /*    }*/
    /*}*/
</style>
