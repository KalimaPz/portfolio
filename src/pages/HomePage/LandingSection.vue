<template>

<div>
    <div style=""><img style="width:100%; position:absolute;" src="../../assets/Live-Background-1.svg"/></div>
    <div class="landing-page">


    <div id="content-section">
      <div class="my-info" >
        <div class="profile-image" data-aos="fade-up"
        data-aos-duration="1500">
          <img :src="avatarUrl" id="avatar" />
        </div>

        <div id="info-area" data-aos="fade-up"
        data-aos-duration="1500">
          <div id="name" >Donnukrit Satirakul</div>
          <div id="position">Software Engineer</div>

          <div id="contact">
            <div class="info-item">
              <pin-icon class="icon" />
              Muang Phuket, Phuket, Thailand
            </div>
            <div class="info-item">
              <phone-icon class="icon" />
              +66 910533948
            </div>
            <div class="info-item">
              <email-icon class="icon" />
              donnukrit.s@digital.organic
            </div>
            <div>
              <a-button id="download-cv" type="primary" href="/cv.pdf"
                >Download CV</a-button
              >

              <!-- <a href="/cv.pdf">resume</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()
export default {
  name: "LandingSection",
  
  data: () => {
    return {
      avatarUrl: "https://avatars.githubusercontent.com/u/23716821?v=4",
      
    };
  },

};
</script>

<style scoped>

.landing-page {
    height: 100vh;
   position: relative;
 
  }

.drawer-item {
  background-color: aqua;
}
#download-cv {
  margin: 1rem 0px;
}
@media only screen and (max-width: 768px) {
  #info-area {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0px;
    /* background-color: red; */
    /* text-align: center; */
  }

  #contact {
    width: fit-content;
    padding: 1vw 0vw;
    font-size: 0.8rem;
    font-weight: 300;

    /* background-color: aqua; */
  }
  
 
  #content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 5vh 10vw;

    /* background-color: aqua; */
  }
  .my-info {
    /* background-color: aqua; */
    text-align: center;
  }
  .info-item {
    display: flex;
    align-items: center;
  }

  #avatar {
    max-width: 256px;
    max-height: 256px;
    width: 40vw;
    border-radius: 100%;
    box-shadow: 1px 2px 10px rgba(87, 87, 87, 0.9);
  }

  #name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  #position {
    font-size: 1rem;
    font-weight: 600;
  }
}

@media only screen and (min-width: 768px) {
  .navigator {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
 

  #content-section {
    display: flex;
    height: 100%;

    padding: 5vh 10vw;
    /* background-color: aqua; */
  }
  .info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .my-info {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  #avatar {
    max-width: 256px;
    max-height: 256px;
    width: 50vw;
    border-radius: 100%;
    box-shadow: 1px 2px 10px rgba(87, 87, 87, 0.9);
  }
  .profile-image {
    flex: 2;
  }
  #info-area {
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
  }

  #name {
    font-size: 2rem;
    font-weight: 600;
  }

  #position {
    font-size: 1rem;
    font-weight: 600;
  }

  #contact {
    padding: 1vw 0vw;
    font-size: 1rem;
    font-weight: 300;
  }
  .profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.icon {
  margin-right: 10px;
}

.menu {
  width: 24px;
  margin: 1rem;
}
.menu:hover {
  color: aquamarine;
}
</style>
