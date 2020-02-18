<template v-slot:img>
    <div class="wrapper">
        <transition name="fade">

            <b-img v-bind:src="src" alt="" v-on:load="onLoaded" v-show="loaded" fluid/>



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

<script>
    export default {
        data: function () {
            return {
                src: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/homepage-img.jpg'),
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
   .jumbo1 {
       height: 500px;
       /*        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);*/
   }


    .jumbo1 a {
        color: white;
    }

    .container {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding-right: 50px;
    }

    .jumbo1 h1 {
        font-weight: 800;
        font-size: 80px;
        /*text outline solid black 1px*/
        /*text-shadow:*/
        /*    -0.75px -0.75px 0 #000,*/
        /*    0.75px -0.75px 0 #000,*/
        /*    -0.75px 0.75px 0 #000,*/
        /*    0.75px 0.75px 0 #000;*/
    }

    .jumbo1 p {
        font-size: 24px;
        font-weight: 300;
        /*text outline solid black 1px*/

    }

.wrapper {
    width: auto;
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

</style>
