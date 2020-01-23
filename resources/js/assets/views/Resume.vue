<template>
    <div>
        <resume-jumbotron></resume-jumbotron>
        <resume-section></resume-section>
    </div>
</template>

<script>
    import ResumeJumbotron from "../resume/ResumeJumbotron";
    import ResumeSection from "../resume/ResumeSection";
    export default {
        name: "Resume",
        components: {
            ResumeJumbotron, ResumeSection
        }
    }
</script>

<style scoped>

</style>
