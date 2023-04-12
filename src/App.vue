<template>
  <v-app>
    <v-app-bar class="app-bar" app clipped-left dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Topics</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://vuetify.cn/zh-Hans/components/application/" target="_blank">
        <v-icon large>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app clipped v-model="drawer">
      <v-list nav dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group active-class="list-item-group" v-for="item in items" :key="item.title">
          <template v-if="item.items">
            <!-- <v-list-group v-model="item.active" no-action> -->
            <v-list-group no-action >
              <template v-slot:activator>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="subItem in item.items" :key="subItem.title" :to="item.path + subItem.path">
                <v-list-item-content>
                  <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :to="item.path">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-main class="container">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app absolute inset>
      <div class="mx-auto">&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      {
        title: 'Vuetify', icon: 'mdi-vuetify', path: '/vuetify', active: true, items: [
          { title: 'Vuetify UI', path: "/ui" + `/${'012345'}/${'titleA'}` },
          { title: 'Vuetify Style', path: '/style' },
        ]
      },
      {
        title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard', items: [
          { title: 'Vuetify UI', path: '/ui' },
          { title: 'Vuetify Style', path: '/style' },
        ]
      },
      { title: 'Photos', icon: 'mdi-image', path: '/photos' },
      { title: 'About', icon: 'mdi-help-box', path: '/about' },
    ],
    drawer: true,
  }),
  mounted() {

  },
  methods: {

  },
};
</script>

<style scpoed>
.list-item-group {
  color: var(--color-primary) !important;
}
</style>