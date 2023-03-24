<template>
  <v-container>
    <v-expansion-panels hover>
      <v-expansion-panel>
        <v-expansion-panel-header>v-btn</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="my-2">
            <v-btn class="btn-primary">Primary</v-btn>
            <v-btn class="btn-secondary">Secondary</v-btn>
            <v-btn class="btn-accent">Accent</v-btn>
            <v-btn class="btn-info">Info</v-btn>
            <v-btn class="btn-error">Error</v-btn>
            <v-btn class="btn-success">Success</v-btn>
            <v-btn class="btn-warning">Warning</v-btn>
          </div>
          <div class="my-2">
            <v-btn text class="c-primary">Primary</v-btn>
            <v-btn text class="c-secondary">Secondary</v-btn>
            <v-btn text class="c-accent">Accent</v-btn>
            <v-btn text class="c-info">Info</v-btn>
            <v-btn text class="c-error">Error</v-btn>
            <v-btn text class="c-success">Success</v-btn>
            <v-btn text class="c-warning">Warning</v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>v-btn</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="my-2">
            <v-btn @click="loadData">load data</v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'VuetifyUI',
  mounted() {
    console.log("==> id title: ", this.$route.params.id, this.$route.params.title);
  },
  methods: {
    loadData() {
      this.$axios.get('http://loaclhost:8080/students').then(
        response => {
          console.log('请求成功了：', response.data)
        },
        error => {
          console.log('请求失败了：', error.message)
        }
      )
    }
  },
}
</script>

<style scoped>
.panels {
  width: 100%;
}
</style>