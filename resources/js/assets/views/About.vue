<template>
    <div>
        <about-jumbotron></about-jumbotron>
    <about-section></about-section>
    </div>
</template>

<script>
    import AboutJumbotron from "../about/AboutJumbotron";
    import AboutSection from "../about/AboutSection";
    export default {
        name: "About",
        components: {
            AboutJumbotron: AboutJumbotron,
            AboutSection: AboutSection
        }
    }
</script>

<style scoped>

</style>
