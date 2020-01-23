<template>
    <b-container class="pt-3 pb-2">
        <b-row>
        <b-col>
            <h1 class="post-title">
                Who am I?
            </h1>
                <p class="post-text">
                    Programming is my passion, and love to work and projects even in my free time. When I'm not
                    writing code I'm working on my PC, or playing video games. My computer is my home and the
                    best work is done when the two are perfectly integrated.
                </p>
            <p class="post-meta">"Coffee and a freshly started PC are the best way to start a day"</p>
        </b-col>
        </b-row>
        <hr>
        <b-row>
               <b-col>
                    <h1 class="post-title">
                        Favorite Things to do Outside of Development
                    </h1>
                    <ul class="post-text">
                        <li>Gaming</li>
                        <li>Working out</li>
                        <li>All things related to the Bay Area teams (Giants, 49ers, and Warriors)</li>
                        <li>Anything involving lacrosse, but I enjoy watching or playing most sports</li>
                    </ul>
               </b-col>
        </b-row>
                <hr>
               <b-row>
                   <b-col>
                    <h1 class="post-title">
                        Trevor's Personal Blog (Coming Soon)
                    </h1>
                    <p class="post-text">
                        This page is just a small glimpse into who Trevor Tanner is. If you'd like to get a more in-depth
                        look at my day-to-day life, as well as any major events, please head over to my blog. Here you can
                        get a real idea of who I am, as well as things I do in my free time. A working relationship works best if
                        you really know who you're working with, and this a great way to get that insight on me.
                    </p>
                   </b-col>
               </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "AboutSection"
    }
</script>

<style scoped>
    .post-title {
        text-align: center;
        font-size: 40px;

    }

    .post-meta {
        opacity: 75%;
        font-style: italic;
    }

    .post-text {
        font-size: 18px;

    }
    hr {
        border: 1px solid #007373;
        opacity: 50%;
    }
</style>
