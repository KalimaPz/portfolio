<template>
  <div class="experience-section">
    <div id="education-section">
      <div id="education" data-aos="fade-up" data-aos-duration="1000">
        Education
      </div>
      <ExpCard
        title="Prince of Songkhla University"
        subtitle2="Kathu Phuket, Thailand"
        period="2016 - 2020"
        detail="Bachelor of Computer Engineering GPA 2.65"
        image="bachelors-degree.png"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
      <ExpCard
        title="Pakphanang School"
        subtitle2="Pak Phanang Nakorn Sri Thammarat, Thailand"
        period="2010 - 2016"
        detail="High School, Sci-Math Program"
        image="school.png"
        data-aos="fade-right"
        data-aos-duration="1000"
      />
    </div>
    <div id="working-section">
      <div id="working" data-aos="fade-up" data-aos-duration="1000">
        Working Experience
      </div>
        <ExpCard
        title="Software Engineer"
        subtitle="Digital Organic Co. Ltd"
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="1 October 2021 - Current"
        image="backend.png"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
      <ExpCard
        title="Mobile Application Developer"
        subtitle="Alicorn Tech Co. Ltd"
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="1 January 2021 - 30 September 2021"
        image="user-interface.png"
        data-aos="fade-left"
        data-aos-duration="1000"
      /><ExpCard
        title="Mobile Application Developer"
        subtitle="Weserve Co. Ltd."
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="Aug - Dec 2020"
        image="user-interface.png"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
      <ExpCard
        title="Internship Mobile Developer"
        subtitle="Weserve Co. Ltd."
        subtitle2="Muang Phuket, Phuket, Thailand"
        period="May - July 2020"
        image="internship.png"
        data-aos="fade-left"
        data-aos-duration="1000"
      />
    </div>
  </div>
</template>

<script>
import ExpCard from "../../components/ExpCard.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
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
