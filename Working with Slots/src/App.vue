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
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoal from "./components/CourseGoal.vue";
export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
