<template>
   <div >
      
      <CommonData />
                 
   </div>
   
   <div class="container-fluid text-center">
      <div class="row">
         <div class="col-lg-12">
            <div class="row mb-1">
               <div class="col-lg-6">
                  <h3>Project Details</h3>
                  <div class="d-flex flex-row">
                  
                     <div v-for="i in storeData.n_projects" :key="i">
                        <!-- <h3>Project : {{('P'+i)}}</h3> -->
                        <!-- <ProjectDetails :project-number="('P'+i)" /> -->
                        <ProjectDetails :project-number="(i)" />
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <h3>Data Analysis</h3>
                  <PlotlyEx type="scatter"/>
                  <PlotlyEx type="pie" />
                  
               </div>
            </div>

         </div>
      </div>
   </div>
   <hr>
   <!-- <div>
      <Grid :p-number="('P'+i)"/>
   </div> -->

</template>

<script setup>
 import CommonData from './CommonData.vue'
 import ProjectDetails from './ProjectDetails.vue'
//  import Grid from './Grid.vue'
 import PlotlyEx from './PlotlyEx.vue'
 import { useDataStore } from '../stores/data'
 const storeData = useDataStore()

</script>

<style>

</style>