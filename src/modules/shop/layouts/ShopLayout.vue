<template>
  
<!-- Navbar  -->
  <TopMenu/>

  

  <!-- body (Aqui se muestran las views)-->
   <router-view/>
 

  <!-- Footer -->
 <CustomFooter/>
</template>

<script setup lang="ts">
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>

<style></style>
