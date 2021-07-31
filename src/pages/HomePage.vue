<template>
  <div>
    <LandingSection />
    <SkillSection />
    <ExperienceSection/>
    <PortfolioSection/>
  </div>
</template>

<script>
import LandingSection from "./HomePage/LandingSection.vue";
import SkillSection from "./HomePage/SkillSection.vue";
import ExperienceSection from './HomePage/ExperienceSection.vue'
import PortfolioSection from "./HomePage/PorfolioSection.vue"
export default {
  name: "HomePage",
  components: {
    LandingSection,

    SkillSection,
    ExperienceSection,
    PortfolioSection
  },
};
</script>

<style></style>
