<template>
  <div class="main">
    <div><img class="icon" :src="require(`@/assets/icons/${image}`)" /></div>
    <br />
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
</style>
