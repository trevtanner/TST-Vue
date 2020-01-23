<template>
    <div>
        <b-carousel>
            <b-carousel-slide class="masthead">
                <template v-slot:img>
                    <div class="wrapper">
                        <transition name="fade">

                            <b-img class="img-fluid w-100" v-bind:src="src" alt="" v-on:load="onLoaded" v-show="loaded" fluid/>



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
                        <b-col class="carousel-caption">
                            <div class="site-heading text-right">
                                <h1>Resume</h1>
                                <b-button size="md" class="btn" to="/resumeview" squared>View Resume</b-button>
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
                src: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/resumebg1080.jpg'),
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
        padding-bottom: 0px;
    }

    .btn {
        background-color: transparent;
        border-color: #007373;
        font-family: 'Playfair Display'
    }

    .btn:hover {
        background-color: #007373;
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

    .masthead .post-heading .meta,
    .masthead .post-heading .subheading {
        line-height: 1.1;
        display: block;
    }


    .site-heading h1{
        font-size: 36px;
        margin-top: 0;
        line-height: 1;
    }
    .subheading {
        font-size: 12px;
    }

    /*Everything under 400px*/
    @media (max-width: 400px) {
        .carousel-caption {
            line-height: .75;
        }
        .subheading {
            font-size: 12px;
        }
        .site-heading h1{
            font-size: 30px;
            margin-top: 0;
        }

        .btn {
        }

    }
    /*Everything under 576 to 400px*/
    @media (min-width: 400px) {
        .carousel-caption {
            line-height: 1;
            padding-bottom: 40px;
        }
        .subheading {
            font-size: 12px;
        }
        .site-heading h1{
            font-size: 36px;
            margin-top: 0;
        }

        .btn {
        }

    }


    /*Small devices (landscape phones, 576px and up)*/
    @media (min-width: 576px) {
        .subheading {
            font-size: 14px;
        }
        .site-heading h1{
            font-size: 60px;
            margin-top: 0;
            line-height: 1;
        }

        .carousel-caption {
            padding-bottom: 100px;
        }

    }

    /*Medium devices (tablets, 768px and up)*/
    @media (min-width: 768px) {
        .subheading {
            font-size: 20px;
        }
        .site-heading h1{
            font-size: 80px;
            margin-top: 0;
            line-height: 1;
        }

        .carousel-caption {
            padding-bottom: 50px;
        }

    }

    /*Large devices (desktops, 992px and up)*/
    @media (min-width: 992px) {
        .subheading {
            font-size: 20px;
        }
        .site-heading h1{
            font-size: 100px;
            margin-top: 0;
            line-height: 1;
        }

    }

    /*Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {
        .subheading {
            font-size: 20px;
        }
        .site-heading h1{
            font-size: 100px;
            margin-top: 0;
            line-height: 1;
        }

    }
</style>
