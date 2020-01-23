<template>
<div>
    <portfolio-jumbotron></portfolio-jumbotron>
    <portfolio-building></portfolio-building>
    <portfolio-section></portfolio-section>
</div>
</template>

<script>
    import PortfolioJumbotron from "../portfolio/PortfolioJumbotron";
    import PortfolioSection from "../portfolio/PortfolioSection";
    import PortfolioBuilding from "../portfolio/PortfolioBuilding";
    export default {
        name: "Portfolio",
        components: {
            PortfolioJumbotron, PortfolioSection, PortfolioBuilding
        }
    }
</script>

<style scoped>

</style>
