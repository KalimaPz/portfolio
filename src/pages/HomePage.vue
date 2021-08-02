<template>
  <div>
    <LandingSection />
    <SkillSection/>
    <ExperienceSection/>
    <PortfolioSection />
    <FooterSection/>
  </div>
</template>

<script>

import LandingSection from "./HomePage/LandingSection.vue";
import SkillSection from "./HomePage/SkillSection.vue";
import ExperienceSection from "./HomePage/ExperienceSection.vue";
import PortfolioSection from "./HomePage/PorfolioSection.vue";
import FooterSection from './HomePage/FooterSection.vue'

export default {
  name: "HomePage",
  components: {
    LandingSection,
    SkillSection,
    ExperienceSection,
    PortfolioSection,
    FooterSection
  },
  
};
</script>

<style></style>
