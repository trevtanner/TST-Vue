<template>
    <b-container class="py-4 text-center">
       <b-row align-h="center" align-v="center">
           <b-col cols="4" class="leftside">
               <h2>
                   Do any of these apply to you?
               </h2>
           </b-col>
            <b-col cols="4" class="middleside">
                <b-table
                    :items="items"
                    :fields="fields"
                    outlined
                    striped
                    table-variant="light"
                    table-class="basetable"
                />
<!--                <ul>-->
<!--                    <li>Have a question about a built website</li>-->
<!--                    <li>Interest in me building your website</li>-->
<!--                    <li>A current client with a question about your product</li>-->
<!--                    <li>You have feedback you would like me to see</li>-->
<!--                    <li>Looking to give me a job</li>-->
<!--                </ul>-->
            </b-col>
           <b-col cols="4" class="rightside">
                <p>
                    If so, please click:
                </p>
               <b-button squared class="contactbutton" size="lg" href="mailto:contactus@trevorstanner.com">Contact</b-button>
               <p class="pt-3">
                   or reach out to me at
                    contactus@trevorstanner.com at your convenience.
                </p>
            </b-col>
       </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "AboutSection",
        data: function() {
            return {
                fields: ['FAQ'],
                items: [
                    { FAQ:'Have a question about a built website?'},
                    { FAQ:'Interest in me building your website?'},
                    { FAQ:'A current client with a question about your product?'},
                    { FAQ:'You have feedback you would like me to see?'},
                    { FAQ:'Looking to give me a job?'},

                ],
            }
        }
    }
</script>

<style scoped>
.leftside h2{
    font-weight: bold;
    font-size: 40px;
}
    .middleside {
        font-size: 18px;
    }

    .rightside p{
        font-size: 20px;
    }

    .contactbutton {
        background-color: #007373;
        border-color: #007373;
    }

    .contactbutton:hover {
        background-color: #232732;
        border-color: #232732;
    }
</style>
