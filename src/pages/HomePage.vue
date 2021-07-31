<template>
  <div>
    <LandingSection />
    <SkillSection />
    <ExperienceSection/>
  </div>
</template>

<script>
import LandingSection from "./HomePage/LandingSection.vue";
import SkillSection from "./HomePage/SkillSection.vue";
import ExperienceSection from './HomePage/ExperienceSection.vue'
export default {
  name: "HomePage",
  components: {
    LandingSection,

    SkillSection,
    ExperienceSection,
  },
};
</script>

<style></style>
