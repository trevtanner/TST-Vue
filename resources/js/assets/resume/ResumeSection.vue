<template>
<b-container class="pt-4">
    <b-row>
            <b-col class="text-center paperworktitle">
                <h2>Trevor Tanner: The Paperwork</h2>
            </b-col>
    </b-row>
    <b-row class="pt-4">
            <b-col class="text-left">
                <p class="paperworktext">
                The best way to get to know my skills is to look over my previous work on my <a
                href="/portfolio">Portfolio Page.</a> I'm always going back and tweaking
                little things in my projects; so I'm constantly updating them with anything new I learn. If you like
                more of a list of my
                abilities with programming then this is the place. You can download my resume above and I lay out my
                skills
                and other relevant information below. As always please feel free to <a href="/contact">Contact
                Me</a> with any questions/inquires.
                </p>
            </b-col>
            <b-col class="text-center">
            <b-img :src="src" fluid/>
            </b-col>
    </b-row>
        <br>
        <hr>
        <br>
        <b-row>
            <b-col class="text-center basetitle">
                <h2>Knowledge Base</h2>
            </b-col>
        </b-row>
    <b-row>
            <b-col class="text-center">

                    <b-table
                        :items="items"
                        :fields="fields"
                        bordered
                        table-variant="dark"
                        table-class="basetable"
                    />

              <!--  <h4>Everyday Use</h4>
                <br>
                <ul class="text-center">
                    <li>Laravel//PHP</li>
                    <li>HTML5//CSS</li>
                    <li>Javascript//JS//Vue.js</li>
                    <li>Laravel Forge//DigitalOcean</li>
                    <li>Linux Based OS</li>
                    <li>Github//Version Control</li>
                </ul>
                <hr>-->
            </b-col>

                <!--                <h4>Previous Experience</h4>
                <br>
                <ul class="text-center">
                    <li>Visual Studio//Visual Basic</li>
                    <li>C++</li>
                </ul>-->
    </b-row>
</b-container>
</template>

<script>
    export default {
            data: function() {
                return {
                    src: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/img/resume-section.jpg'),
                    fields: ['everyday_use', 'previous_experience'],
                    items: [
                        { everyday_use:'Laravel', previous_experience:'Visual Studio // Visual Basic'},
                        { everyday_use:'PHP',  previous_experience:'C'},
                        { everyday_use:'Vue.js // JS', previous_experience:'Linux Based OS'},
                        { everyday_use:'Laravel Forge // DigitalOcean', previous_experience:'SQL'},
                        { everyday_use:'Github // Version Control'},
                    ],
                }
            }
    }
</script>

<style scoped>
    .paperworktext {
        font-size: 20px
    }

    .paperworktext a {
        color: #007373;
    }

    .paperworktitle h2 {
        font-size: 30px;

    }

    .basetable {
        color: white;
        background-color: #232732;
        font-size: 20px;

    }

</style>
