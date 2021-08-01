<template>
  <div class="landing-page">
    <a-menu class="navigator" mode="horizontal" theme="dark">
      <a-menu-item class="nav-item">About</a-menu-item>
      <a-menu-item class="nav-item">Skills</a-menu-item>
      <a-menu-item class="nav-item">Experiences</a-menu-item>
      <a-menu-item class="nav-item">Portfolio</a-menu-item>
    </a-menu>

    <div id="content-section">
      <div class="my-info">
        <div class="profile-image">
          <img :src="avatarUrl" id="avatar" />
        </div>

        <div id="info-area">
          <div id="name">Donnukrit Satirakul</div>
          <div id="position">Front End / Mobile Developer</div>

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
              donnukrit@weserve.co.th
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  .landing-page {
    height: 100vh;
  }
  .navigator {
    display: flex;

    flex-direction: column;
    justify-content: center;
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
  }
  .landing-page {
    height: 100vh;
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
</style>
