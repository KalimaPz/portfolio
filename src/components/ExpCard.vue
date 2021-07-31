<template>
  <div class="card">
    <div class="card-icon">
      <img class="icon" :src="require(`@/assets/icons/${image}`)" />
    </div>
    <div class="card-detail">
      <p id="title">{{ title }}</p>
      <p id="subtitle">{{ subtitle }}</p>
      <p id="subtitle2">{{ subtitle2 }}</p>
      <p id="period">{{ period }}</p>
      <p id="detail">{{ detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpCard",
  props: ["title", "subtitle", "subtitle2", "period", "detail", "image"],
};
</script>

<style scoped>
.card-detail {
  flex: 2;
}
.card-icon {
  flex: 1;
  text-align: center;
  align-self: center;
}
.icon {
  width: 64px;
  transition: 0.5s;
}
#title {
  font-size: 1.5rem;
  font-weight: 600;
}

#subtitle,
#subtitle2 {
  font-size: 1rem;
  font-weight: 600;
}

#period {
  font-size: 1rem;
  font-weight: 300;
}
#detail {
  font-size: 1rem;
  font-weight: 300;
}
.card {
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.4);
  /* backdrop-filter: blur(10px); */
  /* box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.3); */
  max-width: 45vw;
  min-width: 40vw;
  max-height: 35vh;
  min-height: 30vh;
  margin-bottom: 1.5vh;
  padding: 4.5%;
  transition: 0.5s;

  /* border-radius: 10px; */
}
.card:hover {
  background-color: rgb(0, 77, 179);
  color: white;
}
.card:hover .icon {
  width: 96px;
}
p {
  font-size: 1rem;
}
</style>
