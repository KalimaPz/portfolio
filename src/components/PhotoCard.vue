<template>
  <div class="container">
    <div id="photo">
      <img class="zoom" :src="imageUrl" />
    </div>
    <div id="description">{{ description }}</div>
  </div>
</template>
Î

<script>
export default {
  name: "PhotoCard",
  props: ["imageUrl", "description"],
};
</script>

<style scoped>
.container {
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  background-color: white;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  margin: 10px;
}
.container:hover {
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.3);
}
#photo {
  width: 400px;
  text-align: center;
  flex: 3;
}

#description {
  flex: 2;
  margin-top: 1rem;
  /* background-color: aqua; */
  text-align: center;
  font-weight: 600;
}
.zoom {
  transition: transform 0.5s;

  height: 200px;
  margin: 0 auto;
}
.zoom:hover {
  transform: scale(2);
}
</style>
