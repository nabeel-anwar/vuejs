<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResourceTab"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addResourceTab"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResource,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, decs, link) {
      const resource = {
        id: new Date().toISOString(),
        title: title,
        description: decs,
        link: link,
      };
      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resource';
    },
  },
  computed: {
    storedResourceTab() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResourceTab() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>

<style></style>
