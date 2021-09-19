<template>
  <div class="skill-section">
    <div class="section-topic" data-aos="fade-up"
          data-aos-duration="1000">Skills</div>
    <div id="center-skill">
      <div class="card-area">
        <SkillCard
          image="programming.png"
          title="Web Development"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <SkillCard
          image="user-interface.png"
          title="Mobile App Development"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <SkillCard
          image="agile.png"
          title="SCRUM"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <SkillCard
          image="internet-of-things.png"
          title="Internet of Things"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </div>
    <div class="section-topic" data-aos="fade-up"
          data-aos-duration="1000" >Programing Skills</div>
    <div>
      <div id="chart-area" ref="chartdiv" data-aos="fade-up"
          data-aos-duration="1000"></div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCard from "../../components/SkillCard.vue";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
AOS.init();
export default {
  name: "SkillSection",
  components: { SkillCard },
  methods: {

    async check() {
      return "check";
    }
  },
  mounted() {
    let chart = am4core.create(
      this.$refs.chartdiv,
      am4plugins_forceDirected.ForceDirectedTree
    );
    let series = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    let main_node_size = 800;
    let sub_node_size = 600;
    let last_node_size = 400;
    series.data = [
      {
        name: "Front-End",
        value: main_node_size,
        children: [
          {
            name: "Basic",
            value: sub_node_size,
            children: [
              {
                name: "HTML 5",
                value: last_node_size,
              },
            ],
          },
          {
            name: "Intermediate",
            value: sub_node_size,
            children: [
              {
                name: "React",
                value: last_node_size,
              },

              {
                name: "Vue",
                value: last_node_size,
              },
              {
                name: "CSS3",
                value: last_node_size,
              },
            ],
          },
          {
            name: "Expert",
            value: sub_node_size,
            children: [
              {
                name: "Flutter",
                value: last_node_size,
              },
            ],
          },
        ],
      },
      {
        name: "Back-End",
        value: main_node_size,
        children: [
          {
            name: "Basic",
            value: sub_node_size,
            children: [
              {
                name: "Express",
                value: last_node_size,
              },
              {
                name: "Mongo",
                value: last_node_size,
              },
               {
                name: "FastApi",
                value: last_node_size,
              },
            ],
          },
        ],
      },
      {
        name: "Other",
        value: main_node_size,
        children: [
          {
            name: "Basic",
            value: sub_node_size,
            children: [
              {
                name: "Docker",
                value: last_node_size,
              },
              {
                name: "Kotlin",
                value: last_node_size,
              },
                            {
                name: "GO",
                value: last_node_size,
              },
            ],
          },
          {
            name: "Intermediate",
            value: sub_node_size,
            children: [
              {
                name: "C",
                value: last_node_size,
              },

            ],
          },
          {
            name: "Expert",
            value: sub_node_size,
            children: [
              {
                name: "Dart",
                value: last_node_size,
              },
              {
                name: "Java",
                value: last_node_size,
              },
              {
                name: "Shell",
                value: last_node_size,
              },
              {
                name: "Git",
                value: last_node_size,
              },
                            {
                name: "JavaScript",
                value: last_node_size,
              },
            ],
          },
        ],
      },
    ];

    series.dataFields.linkWith = "linkWith";
    series.dataFields.name = "name";
    series.dataFields.id = "name";
    series.dataFields.value = "value";
    series.dataFields.children = "children";

    series.nodes.template.tooltipText = "{name}";
    series.nodes.template.fillOpacity = 1;

    series.nodes.template.label.text = "{name}";
    series.fontSize = 16;
    series.maxLevels = 2;
    series.maxRadius = am4core.percent(6);
    series.manyBodyStrength = -16;
    series.nodes.template.label.hideOversized = true;
    series.nodes.template.label.truncate = true;
    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
<style scoped>
@media only screen and (max-width: 768px) {
  /* Mobile */
  .card-area {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
  }
  #chart-area {
    /* background-color: aliceblue; */
    min-height: 50vh;
    /* height: 500px; */
  }

  .section-topic {
    padding: 1.25rem 0px;
    font-size: 1.25rem;

    font-weight: bold;
  }
}
@media only screen and (min-width: 768px) {
  /* Desktop */
  .card-area {
    /* width: 50%; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }

  #chart-area {
    /* background-color: aliceblue; */
    min-height: 50vh;
    /* height: 500px; */
  }
  .section-topic {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1.25rem 0px;
  }
}

.skill-section {
  /* height: 100vh; */
  width: 100vw;
  padding: 2.5%;
  /* background-color: aqua; */
}
</style>
