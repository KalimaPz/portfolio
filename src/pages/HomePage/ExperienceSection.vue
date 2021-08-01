<template>
  <div class="experience-section">
    <div id="education-section">
      <div id="education">Education</div>
      <ExpCard
        title="Prince of Songkhla University"
        subtitle2="Kathu Phuket, Thailand"
        period="2016 - 2020"
        detail="Bachelor of Computer Engineering"
        image="bachelors-degree.png"
      />
      <ExpCard
        title="Pakphanang School"
        subtitle2="Pak Phanang Nakorn Sri Thammarat, Thailand"
        period="2010 - 2016"
        detail="High School, Sci-Math Program"
        image="school.png"
      />
    </div>
    <div id="working-section">
      <div id="working">Working Experience</div>
      <ExpCard
        title="Mobile Application Developer"
        subtitle="Alicorn Tech Co. Ltd"
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="1 January 2021 - Current"
        detail="High School, Sci-Math Program"
        image="user-interface.png"
      /><ExpCard
        title="Mobile Application Developer"
        subtitle="Weserve Co. Ltd."
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="Aug - Dec 2020"
        detail="High School, Sci-Math Program"
        image="user-interface.png"
      />
      <ExpCard
        title="Internship Mobile Developer"
        subtitle="Weserve Co. Ltd."
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="May - July 2020"
        detail="High School, Sci-Math Program"
        image="internship.png"
      />
    </div>
  </div>
</template>

<script>
import ExpCard from "../../components/ExpCard.vue";
export default {
  name: "ExperienceSection",
  components: {
    ExpCard,
  },
};
</script>

<style scoped>
@media only screen and (min-width: 769px) {
  /*desktop*/
  .experience-section {
    background-color: aliceblue;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #education {
    padding: 1.25rem 0px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
  #working {
    padding: 1.5rem 0px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
@media only screen and (max-width: 768px) {
  /* mobile */
  .experience-section {
    background-color: aliceblue;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
  #education {
  padding: 1.25rem 0px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
}
#working {
  padding: 1.25rem 0px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
}
}

#education-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

#working-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
</style>
