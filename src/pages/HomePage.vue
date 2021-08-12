<template>
  <div>
        <div>
      <show-at breakpoint="mediumAndBelow">
        <a-menu
          style="display: flex; flex-direction: row; justify-content: flex-end"
          mode="horizontal"
          theme="light"
        >
          <a-menu-item class="nav-item"
          @click="openDrawer"
            ><img
              style="width: 16px;"
              src="../assets/icons/hamburger-menu.svg"
          /></a-menu-item>
        </a-menu>
      </show-at>
      <show-at breakpoint="largeAndAbove">
        <a-menu style="display:flex;justify-content:center;" mode="horizontal" theme="light">
          <a-menu-item class="nav-item" v-scroll-to="'#landing'">About</a-menu-item>
          <a-menu-item class="nav-item" v-scroll-to="'#skills'">Skills</a-menu-item>
          <a-menu-item class="nav-item" v-scroll-to="'#exp'">Experiences</a-menu-item>
          <a-menu-item class="nav-item" v-scroll-to="'#portfolio'">Portfolio</a-menu-item>
        </a-menu>
      </show-at>
    </div>
        <a-drawer :visible="visible" @close="closeDrawer" :closable="false">
      <a-menu
        style="border-color: transparent; font-size: 1.5rem; font-weight: 600"
      >
        <a-menu-item  v-scroll-to="'#landing'">Home</a-menu-item>
        <a-menu-item v-scroll-to="'#skills'">Skills</a-menu-item>
        <a-menu-item v-scroll-to="'#exp'">Experiences</a-menu-item>
        <a-menu-item v-scroll-to="'#portfolio'">Portfolio</a-menu-item>
      </a-menu>
    </a-drawer>
    <LandingSection id="landing"/>
    <SkillSection id="skills"/>
    <ExperienceSection id="exp"/>
    <PortfolioSection id="portfolio"/>
    <FooterSection/>
  </div>
</template>

<script>

import LandingSection from "./HomePage/LandingSection.vue";
import SkillSection from "./HomePage/SkillSection.vue";
import ExperienceSection from "./HomePage/ExperienceSection.vue";
import PortfolioSection from "./HomePage/PorfolioSection.vue";
import FooterSection from './HomePage/FooterSection.vue'
import { showAt } from "vue-breakpoints";

export default {
  name: "HomePage",
  components: {
    LandingSection,
    SkillSection,
    ExperienceSection,
    PortfolioSection,
    FooterSection,
    showAt
  },
  data () {
    return {
      visible: false,
    }
  },
    methods: {
    openDrawer() {
      console.log("Drawer")
      this.visible = true;
    },
    closeDrawer() {
      this.visible = false;
    },
  },
  
};
</script>

<style scoped>
.nav-item {
  font-weight: 600;
  font-size: 1rem;
}
</style>
