<template>
  <div class="card">
    <div class="card-icon">
      <img class="icon" :src="require(`@/assets/icons/${image}`)" />
    </div>
    <div class="card-detail">
      <div id="title">{{ title }}</div>
      <div id="subtitle">{{ subtitle }}</div>
      <div id="subtitle2">{{ subtitle2 }}</div>
      <div id="period">{{ period }}</div>
      <div id="detail">{{ detail }}</div>
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
@media only screen and (min-width: 768px) {
  /*desktop*/
  .card {
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0.4);
    max-width: 45vw;
    min-width: 40vw;
    max-height: 35vh;
    min-height: 30vh;
    margin-bottom: 1.5vh;
    padding: 4.5%;
    transition: 0.5s;
    align-items: center;
  }

  .icon {
    width: 64px;
    transition: 0.5s;
  }
  .card-icon {
    flex: 1;
  }
  .card-detail {
    flex: 2;
  }
  .card:hover {
    background-color: rgb(0, 77, 179);
    color: white;
  }
  .card:hover .icon {
    width: 96px;
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
}
@media only screen and (max-width: 768px) {
  /*mobile*/

  .card {
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0.4);

    width: 90vw;
    max-height: 30vh;
    min-height: 20vh;
    padding: 3.5%;
    margin: 1.5vh;
    align-items: center;
  }
  .card-detail {
    flex: 3;
  }
  .icon {
    width: 32px;
  }
  .card-icon {
    flex: 1;
    text-align: center;
    align-self: center;
  }
  #title {
    font-size: 1rem;
    font-weight: 600;
  }

  #subtitle,
  #subtitle2 {
    font-size: 0.75rem;
    font-weight: 600;
  }

  #period {
    font-size: 0.5rem;
    font-weight: 300;
  }
  #detail {
    font-size: 0.5rem;
    font-weight: 300;
  }
}
</style>
