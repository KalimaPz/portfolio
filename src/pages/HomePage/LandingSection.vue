<template>
  <div class="landing-page">
    <div id="navigator">
      <p class="nav-item">About</p>
      <p class="nav-item">Skills</p>
      <p class="nav-item">Experience</p>
      <p class="nav-item">Portfolio</p>
      <p class="nav-item">Repositories</p>
      <p class="nav-item">Contact</p>
    </div>
    <div id="content-section">
      <div class="my-info">
        <div id="greeting">Hello, My name is</div>
        <h1 class="info-item" id="name">Donnukrit Satirakul</h1>
        <h2 class="info-item" id="position">Front End / Mobile Developer</h2>
        <h3 class="info-item" id="work-place">Alicorn Tech Co. Ltd.</h3>
        <div class="info-item">
          <pin-icon class="icon" />
          <p class="info-text" id="place">Phuket, Thailand</p>
        </div>
        <div class="info-item">
          <phone-icon class="icon" />
          <p class="info-text" id="tel">+66 910533948</p>
        </div>
        <div class="info-item">
          <email-icon class="icon" />
          <p class="info-text" id="email">donnukrit@weserve.co.th</p>
        </div>
      </div>
      <div class="profile-image">
        <img :src="avatarUrl" id="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSection",
  data: () => {
    return {
      avatarUrl:
        "https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/170615322_4069305883090622_5280854000416563373_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JpJi1h56tyoAX_FgYYH&_nc_ht=scontent.fbkk5-4.fna&oh=05f17ad484b595a86be3508383816204&oe=60FEAECD",
    };
  },
};
</script>

<style scoped>
#name {
  font-weight: bold;
}
#tel,
#email,
#place {
  font-size: 1.5vw;
  font-weight: 600;
}

#position,
#work-place {
  padding-bottom: 1.75vw;
  font-weight: 600;
}

h1 {
  font-size: 2.5vw;
  
}
h2 {
  font-size: 1.75vw;
}
#avatar {
  width: 25vmax;
  min-width: 10vmax;
  border-radius: 50%;
  border-style: solid;
  border-color: #5dcbb0;
  border-width: 15px;

  box-shadow: 5px 10px #5252524f; /*, 10px 15px #9C9C9C */
}
#greeting {
    
  width: fit-content;
  background-color: #5dcbb0;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 20px 30px 30px 0px;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 1.5px;
  font-size: 16px;
}
.landing-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #211f26;
}
#navigator {
  width: 100vw;
  height: 60px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  padding-top: 60px;
  /* background-color: steelblue; */
  /* opacity: 0.1; */
}
.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 145px;
  min-height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px;
  color: white;
  transition: 0.75s;
  text-shadow: 2px 1px 10px #00000010;
}

.nav-item:hover {
  color: white;
  background-color: #32C732;
  border-radius: 30px 0px 30px 0px;
}

#content-section {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: cornflowerblue; */
  padding-left: 20%;
  padding-right: 20%;
}

.my-info {
  flex: 2;
  height: fit-content;
  width: fit-content;
  color: white;
  letter-spacing: 0.2ch;
  /* padding-left: 20%; */
  /* background-color: red; */
}

.info-item {
  display: flex;
  color: white;
  /* padding-top: 5px; */
  /* padding-bottom: 5px; */
}
.profile-image {
  flex: 2;
  text-align: center;
  /* background-color: cadetblue; */
}

.info-text {
  padding-left: 10px;
}
.icon {
  color: #5dcbb0;
}
</style>
