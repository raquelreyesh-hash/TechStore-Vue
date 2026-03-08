<template>
  <v-app>
    <HeaderTs/>
    <v-main><ProductList/></v-main>
    <FooterTs/>
  </v-app>
  </template>

<script>
import HeaderTs from "./components/HeaderTs.vue"
import FooterTs from "./components/FooterTs.vue"
import ProductList from "./views/ProductList.vue"

export default{

components:{
HeaderTs,
FooterTs,
ProductList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e6d3b7;
  margin-top: 60px;
}
</style>
