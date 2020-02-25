<template>
    <b-container class="py-3">
    <b-row>
        <b-col class="text-center">
            <b-img :src="src" fluid/>
        </b-col>
        <b-col class="text-center">
            <p>
                Location: westdrift Manhattan Beach<br>
                Address: 1400 Parkview Avenue Manhattan Beach, California 90266 USA<br>
                Time:
            </p>
        </b-col>
    </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "location",
        data: function () {
            return {
                src: require('/opt/lampp/htdocs/projects/tt-web-dev/TTS-Vue/public/images/weddingimages/location.jpg'),
            }
        }
    }
</script>

<style scoped>

</style>
