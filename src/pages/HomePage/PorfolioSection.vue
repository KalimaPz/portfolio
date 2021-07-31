<template>
  <div class="portfolio-section">
    <div><h1>Portfolio</h1></div>
    <div>
      <div id="participations"><h2>Participations</h2></div>
      <div id="participations-items-area">
        <PhotoCard
        description="National Software Contest 2019"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/bulma-project.appspot.com/o/IMG_0002.jpg?alt=media&token=b6fbda73-719a-4b12-9503-db976eceaeeb"
        />
        <PhotoCard
        description="Thailand IT Contest 2020"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/bulma-project.appspot.com/o/IMG_0005.jpg?alt=media&token=105e03bb-2f70-4265-b3ed-261418fa8fc2"
        />
        <!-- <PhotoCard/>
          <PhotoCard/>
           -->
      </div>
      <h2 id="projects">Project</h2>
      <div id="project-section">
        <ProjectImage image="noochuap.png" description="Noochuap Application"/>
        <ProjectImage image="noochuap.png" description="Servesook Smartfarm"/>
        
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import PhotoCard from "../../components/PhotoCard.vue";
import ProjectImage from "../../components/ProjectImage.vue";
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
  padding: 2%;
}
#projects {
  text-align: center;
  padding: 2%;
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
</style>
