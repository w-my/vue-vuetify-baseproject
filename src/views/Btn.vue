<template>
  <div>
    <v-btn text :class="mstyle" :color="mcolor" @click="click()">{{ title }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    'title': String,
    'mstyle': String,
    'mcolor': String,
  },
  methods: {
    click() {
      console.log("==> ", this.mstyle);
    }
  }
}
</script>

<style scoped>
.base {
  color: white;
  background-color: red;
}

</style>