<template>
   <div >
      
      <CommonData />
                 
   </div>
   
   <div class="container-fluid text-center">
      <div class="row">
         <div class="col-xl-12">
            <div class="row mb-1">
               <div class="col-xl-6">
                  <h3>Project Details</h3>
                  <div class="row" >
                  
                     <div :class="projectcolclass(i)" v-for="i in storeData.n_projects" :key="i">
                        <!-- <h3>Project : {{('P'+i)}}</h3> -->
                        <!-- <ProjectDetails :project-number="('P'+i)" /> -->
                        <ProjectDetails :project-number="(i)" />
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <h3>Data Analysis</h3>
                  <PlotlyEx type="scatter"/>
                  <PlotlyEx type="bar" />
                  
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
 import { computed } from 'vue'
//  import Grid from './Grid.vue'
 import PlotlyEx from './PlotlyEx.vue'
 import { useDataStore } from '../stores/data'
 const storeData = useDataStore()
 function projectcolclass(i) {
   if (i==1){
      return storeData.n_projects==1?'col-xl-12': storeData.n_projects==2? 'col-xl-7': 'col-xl-5';
   }else{
      return storeData.n_projects==1?'col-xl-12': storeData.n_projects==2? 'col-xl-5': 'col-xl-3';
   }
}
</script>

<style>

</style>