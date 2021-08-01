<template>
  <div class="portfolio-section">
    <div class="topic" data-aos="fade-up" data-aos-duration="1000">
      Portfolio
    </div>
    <div>
      <div id="participations" data-aos="fade-up" data-aos-duration="1000">
        Participations
      </div>
      <div id="participations-items-area">
        <PhotoCard
          data-aos="fade-up"
          data-aos-duration="1000"
          description="National Software Contest 2019"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/bulma-project.appspot.com/o/IMG_0002.jpg?alt=media&token=b6fbda73-719a-4b12-9503-db976eceaeeb"
        />
        <PhotoCard
          data-aos="fade-up"
          data-aos-duration="1000"
          description="Thailand IT Contest 2020"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/bulma-project.appspot.com/o/IMG_0005.jpg?alt=media&token=105e03bb-2f70-4265-b3ed-261418fa8fc2"
        />
        <!-- <PhotoCard/>
          <PhotoCard/>
           -->
      </div>
      <div class="topic" data-aos="fade-up" data-aos-duration="1000">
        Projects
      </div>
      <div id="project-section">
        <ProjectImage
          image="noochuap.png"
          description="Noochuap Application"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <ProjectImage
          image="servesook.png"
          description="Servesook Smartfarm"
          data-aos="fade-up"
          data-aos-duration="1000"
        />

        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import PhotoCard from "../../components/PhotoCard.vue";
import ProjectImage from "../../components/ProjectImage.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default {
  name: "PortfolioSection",
  components: { PhotoCard, ProjectImage },
};
</script>

<style scoped>
.portfolio-section {
  width: 100vw;
  /* height: 100vh; */
  padding: 3.5%;
  background-color: aliceblue;
}
#participations {
  text-align: center;
  padding: 1.25rem 0px;
  font-size: 1rem;
  font-weight: bold;
}
#projects {
  text-align: center;
  padding: 1.25rem 0px;
}
#participations-items-area {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
#project-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.topic {
  padding: 1.25rem 0px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
}
</style>
