<template>
    <div>
    <home-carousel/>
        <home-section/>
    </div>
</template>

<script>
    import HomeSection from "../home/HomeSection";
    import HomeBuilding from "../home/HomeBuilding";
    import HomeCollage from "../home/HomeCollage";
    import HomeCarousel from "../home/HomeCarousel";

    export default {
        data: function () {
          return {
              hover: false,
          }
        },
        components: {
            HomeSection,
            HomeBuilding,
            HomeCollage,
            HomeCarousel,
        },
        metaInfo: {
                 title: 'Building personalized websites for modern businesses',
                    description: 'TT Web Development & Design, founded in 2019 provides a client minded experience\n' +
                        '    when it comes building a website for whatever your needs may be. From personal websites to fully scaled professional\n' +
                        '    business websites, TT Web Development & Design has you covered.'
        },

    }
</script>

<style scoped>
    .fade-enter-active {
        transition: opacity 2s ease-in-out;
    }

    .fade-enter-to {
        opacity: 1;
    }

    .fade-enter {
        opacity: 0;
    }
    .wrapper {
        height: 600px;
    }
</style>
