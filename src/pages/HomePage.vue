<template>
  <div>
    <LandingSection />
    <SkillSection />
  </div>
</template>

<script>
import LandingSection from "./HomePage/LandingSection.vue";
import SkillSection from "./HomePage/SkillSection.vue";
export default {
  name: "HomePage",
  components: { LandingSection, SkillSection },
};
</script>

<style>
</style>