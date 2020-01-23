<template>
<div>
    <contact-jumbotron></contact-jumbotron>
    <contact-section></contact-section>
</div>
</template>

<script>
    import ContactJumbotron from "../contact/ContactJumbotron";
    import ContactSection from "../contact/ContactSection";
    export default {
        name: "Contact",
        components: {
            ContactJumbotron, ContactSection
        }
    }
</script>

<style scoped>

</style>
