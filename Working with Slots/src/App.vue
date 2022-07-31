<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal #default="slotProps">
      <!--If we have one slot | shorthand prop v-slot:default  -->
      <h1>{{ slotProps.item }}</h1>
      <strong>{{ slotProps.status }}</strong>
      <!-- <template v-slot:default="slotProps">
        <h1>{{ slotProps.item }}</h1>
        <strong>{{ slotProps.status }}</strong>
      </template>-->
    </course-goal>
    <br /><br />
    <button @click="toggleComponent('active-goal')">Active Goal</button>
    <button @click="toggleComponent('manage-goal')">Manage Goal</button>
    <!-- Dynamic component -->
    <!-- 
    <active-goal v-if="selectedComponent === 'active-goal'"></active-goal>
    <manage-goal v-if="selectedComponent === 'manage-goal'"></manage-goal> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
    <h1>Dynamic Component Switching</h1>
    <br />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoal from "./components/CourseGoal.vue";
import ActiveGoal from "./components/ActiveGoal.vue";
import ManageGoal from "./components/ManageGoal.vue";
export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent: null,
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    toggleComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
