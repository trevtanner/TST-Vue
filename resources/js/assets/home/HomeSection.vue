<template>
<b-container class="py-2 pt-4">
    <b-row class="text-center">
        <b-col lg="4" md="4" sm="12" xs="12" class="pt-2">
            <transition name="fade">
            <a
                href="/contact"
                v-if="hover1"
            >
            <h2 class="post-title">
                Crafted to Your Needs
            </h2>
            <h3 class="post-subtitle">
                and what your market demands
            </h3>
            <p class="post-meta">Contact us to get started</p>
            </a>
            </transition>
        </b-col>
        <b-col class="text-center pb-3" lg="8" md="8" sm="12" xs="12">
           <div class="wrapper">
               <a href="/contact"><b-img
                fluid-grow
                :src="src1"
                width="600"
                height="100"
                @mouseover="hover1 = true"
            />
               </a>
           </div>
        </b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
        <b-col class="text-center pb-3" lg="8" md="8" sm="12" xs="12">
            <div class="wrapper">
                <a href="/portfolio">
                <b-img
                fluid-grow
                :src="src2"
                @mouseover="hover2 = true"

            />
                </a>
            </div>
        </b-col>
        <b-col lg="4" md="4" sm="12" xs="12" class="pt-2">
            <transition name="fade">
            <a
                href="/portfolio"
                v-if="hover2"
            >
                <h2 class="post-title">
                    A man is only as good as his work
                </h2>
            <p class="post-meta">Click here to see my previous projects</p>
            </a>
            </transition>
        </b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
        <b-col lg="4" md="4" sm="12" xs="12" class="pt-3">
            <transition name="fade">
        <a
            href="/about"
            v-if="hover3"
        >
                <h2 class="post-title">
                    Who is Trevor Tanner?
                </h2>
            <p class="post-meta">
                Learn more about the person behind the keyboard
            </p>
        </a>
            </transition>
        </b-col>
        <b-col class="pb-3 text-center" lg="8" md="8" sm="12" xs="12">
            <div class="wrapper">
            <transition name="fade">
                <a href="/about">
                <b-img
                :src="src3"
                fluid-grow
                @mouseover="hover3 = true"
           />
                </a>
            </transition>
            </div>
        </b-col>
    </b-row>


</b-container>
</template>

<script>

    export default {
        data: function () {
            return {
                src1: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/plansedited.jpg'),
                src2: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/whiteboardedited.jpg'),
                src3: require('/opt/lampp/htdocs/projects/TTS-Vue/public/img/computer.jpg'),
                hover1: false,
                hover2: false,
                hover3: false,
            }
        },
    }
</script>

<style scoped>

    .wrapper {
        height: 100px;
    }
    .fade-enter-active {
        transition: opacity 1s ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }

    .img-fluid {
        max-height: 100px;
        max-width: 600px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        color: #007373;
    }
    .post-title {
        font-size: 24px;
        font-weight: bold;

    }

    .post-subtitle {
        font-size: 20px;

    }

    .post-meta {
        font-size: 14px;
        opacity: 75%;
        font-style: italic;
    }

    hr {
        border: 1px solid #007373;

        opacity: 50%;
    }

</style>
