<template>
  <div class="container">
    <img class="image" :src="require(`@/assets/portfolio/${image}`)" />
    <div id="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "ProjectImage",
  props: ["image", "description"],
};
</script>

<style scoped>
.container {
  /* background-color: red; */
  text-align: center;
  margin: 10px;
}
.image {
  object-fit: cover; /* width: 20%; */
  width: 200px;
  /* height: 400px; */
  transition: transform 0.5s;
}
.image:hover {
  transform: scale(1.25);
}

#description {
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1.15px;
  /* background-color: aqua; */
}
</style>