<template>
    <div class="tama-footer">
        <b-container class="pt-4 pb-3">
            <b-row class="pt-4 pb-2">
                <b-col class="text-center header">
                    <h1><b>Building great websites for all of your needs.</b></h1>
                    <h2><i>Let's get started today.</i></h2>
                </b-col>
            </b-row>
            <hr class="tama">
            <b-row class="pt-2 pb-2">
                <b-col class="text-center">
                    <span class="social">
                        <a href="/home">Home</a>
                    </span>
                    <span class="social">
                        <a href="/about">About</a>
                    </span>
                    <span class="social">
                        <a href="/portfolio">Portfolio</a>
                    </span>
                    <span class="social">
                        <a href="/resume">Resume</a>
                    </span>
                    <span class="social">
                        <a href="/contact">Contact</a>
                    </span>
                    <span class="social">
                       Blog (Coming Soon)
                    </span>
                </b-col>
            </b-row>
            <hr class="tama">
            <b-row class="pt-2 pb-2">
                <b-col class="text-center pt-2">
                    <p>
                        <span class="social"><a href="https://www.facebook.com/trevortannerdev"><i class="fab fa-facebook-square fa-3x"></i></a></span>
                        <span class="social"><a href="https://twitter.com/trevortannerdev"><i class="fab fa-twitter-square fa-3x"></i></a></span>
                        <span class="social"><a href="https://github.com/trevtanner"><i class="fab fa-github-square fa-3x"></i></a></span>
                        <span class="social"><a href="https://www.linkedin.com/in/trevorstanner"><i class="fab fa-linkedin fa-3x"></i></a></span>
                        <span class="social"><a href="mailto:contactus@trevorstanner.com"><i class="fas fa-envelope-square fa-3x"></i></a></span>
                    </p>
                </b-col>
            </b-row>
            <hr class="tama">
            <b-row class="pt-2">
                <b-col class="text-center">

                    <p class="muted">
                        Full stack developer using PHP and SQL for the backend, and Vue.js for the frontend, brought together in Laravel for stunning websites.
                    </p>
                </b-col>
            </b-row>
            <b-row class="pt-2 pb-5">
                <b-col>
                    <div class="footer-copyright text-center py-2 pb-1"  ><a href="/home" class="copytags">Trevor Tanner</a> © {{ new Date().getFullYear() }} Copyright
                        TT Web Development & Design <a href="/privacy" class="copytags">Privacy Policy</a>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .tama-footer {
        background-color: #232732;
        background-size: cover;
        font-family: 'Rubik';
        color: white;
    }
    .tama-footer a {
        color: white;
    }

    .social a:hover {
        opacity: 50%;
        text-decoration: none;
        color: #007373;
    }


    .footer-copyright a {
        color: #007373;
    }

    .footer-copyright a:hover {
        color: grey;
    }

    hr.tama {
        border: 1px;
        width: 80%;
        opacity: 50%;
    }
    .footer-copyright {
        color: white;
    }
    .muted {
        opacity: 75%;
        font-style: italic;
    }
    .social {
        padding-right: 5px;
        padding-left: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .header {

    }

</style>
