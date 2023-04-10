<template>
    <div>
        
        <div class="d-inline-flex p-2 bd-highlight row">
            <table class="table ">
                <thead>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="col">#</th>
                    <th scope="row">P {{projectNumber}} </th>
                    <!-- <th scope="col">{{projectNumber}}</th> -->
                    
                    </tr>
                </thead>
                <tbody>
                  
                    <tr>
                    <!-- <th scope="row">Initial cost - {{projectNumber}}</th> -->
                    <!-- <th :class="{testHead: projectNumber>1}" scope="row">Initial Cost</th>  -->
                    <th :class="{testHead: projectNumber>1}" scope="col">Init. Cost</th> 
                    
                    <td >
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input v-model="storeData.project_details[projectNumber].init_cost" type="number" class="form-control" > 
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                            
                        </div>
                                                
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Exp. life</th>
                    <td >
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].exp_life" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">yrs</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                     
                    
                    <!-- <td :class="{testHead: projectNumber>1}" colspan="2"> Annual </td>  -->
                        <!-- <th class="d-inline-flex p-2 bd-highlight row">Annual</th> -->
                    <tr class="table-light fw-bold ">
                    <td colspan="12"  v-if="projectNumber === 1">  Annual Costs</td> 
                    <td colspan="2" v-else>AC</td>
 

                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="col">Energy</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].an_en" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Material</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].an_mt" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Labour</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].an_lb" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Income</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].an_in" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr class="table-light fw-bold ">
                    <td colspan="2" v-if="projectNumber === 1"> Multi Annual Costs</td> 
                    <td colspan="2" v-else>MAC</td>
                    
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Energy</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].mulAn_en" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Material</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].mulAn_mt" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Labour</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number" v-model="storeData.project_details[projectNumber].mulAn_lb" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">{{storeData.currency}}</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th :class="{testHead: projectNumber>1}" scope="row">Cycle</th>
                    <td>
                        <div class="col">
                            <div class="input-group mb-1">
                            
                                <input type="number"  v-model="storeData.project_details[projectNumber].mulAn_cy" class="form-control" >
                                <span class="input-group-text" id="basic-addon1">yr</span>
                            </div>
                        </div>
                    </td>
                    </tr>
                </tbody>    
            </table>
  
        </div>
  
    </div>
    <hr>
    
  </template>
  
  <script setup>
   import { useDataStore } from '../stores/data'
   const storeData = useDataStore()

   const props = defineProps(['projectNumber'])

//    console.log("PN: " , props.projectNumber)
   if (props.projectNumber>1){
        
   }
  </script>
  
  <style>
  p.aboveOne {
    box-sizing: border-box;
    color: blue;
    
  }
  .testHead {
    display:none;
    
  }
  </style>