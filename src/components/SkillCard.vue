<template>
  <div class="main">
    <div id="icon">
      <img class="icon" :src="require(`@/assets/icons/${image}`)" />
    </div>

    <div id="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["image", "title", "details"],
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  /* Mobile */
  .main {
    display: flex;
    flex-direction: row;

    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    margin-right: 10px;
    transition: 0.5s;
  }
  #title {
    flex: 3;
    font-weight: 600;
    font-size: 1rem;
    text-align: left;
    letter-spacing: 1.5px;
  }
  .icon {
    width: 10vw;
    transition: 0.5s;
  }
  #icon {
    flex: 1;
  }
}
@media only screen and (min-width: 768px) {
  /* Desktop */
  .main {
    /* background-color: cornflowerblue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    min-height: 25vh;
    max-height: 25vh;
    min-width: 20vw;
    padding: 20px;
    margin-bottom: 10px;
    margin-right: 10px;
    transition: 0.5s;
  }

  .main:hover {
    background-color: rgb(0, 77, 179);
    color: white;
    font-weight: bold;
    font-size: 24px;
    /* width: 64px; */
  }

  .main:hover .icon {
    width: 90px;
  }

  #title {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1.5px;
  }
  .icon {
    width: 64px;
    transition: 0.5s;
  }
}
</style>
