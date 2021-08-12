<template>
  <div style="padding: 1rem; display: flex">
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      link: [
        {
          icon: require("../../assets/icons/facebook-circular-logo.png"),
          title: "facebook",
        },
        {
          icon: require("../../assets/icons/linkedin.png"),
          title: "facebook",
        },
        {
          icon: require("../../assets/icons/github.png"),
          title: "facebook",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon {
  width: 2rem;
  transition: 0.5s;

}
.icon:hover {
  flood-color: aqua;
}
</style>