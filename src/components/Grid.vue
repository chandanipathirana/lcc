<template>
    <table class="table table-bordered">
        <thead>
            <!-- <tr> -->
                <th scope="col"> Parameter </th>
                <th scope ="col" v-for ="i in storeData.n_projects" :key="i">
                    Project {{i}}
                </th>
                <tr >
                    <div class="col">
                        <div class="input-group mb-1">
                            <input type="number">
                            <!-- <input v-model="storeData.project_details[projectNumber].init_cost" type="number" class="form-control" >  -->
                            <span class="input-group-text" id="basic-addon1">Eur</span>
                        </div>
                        
                    </div>
                                            
                </tr>
            <!-- </tr> -->
        </thead>
        <tbody>
            <tr>
                <th scope="row">Initial Cost</th>
                <!-- <td v-for ="i in storeData.n_projects" :key="i">
                    <div class="col">
                        <div class="input-group mb-1">
                        <input type="number">
                        <input v-model="storeData.project_details[pNumber].init_cost" type="number" class="form-control" >
                        <span class="input-group-text" id="basic-addon1">Eur</span>
                        </div>
                        
                    </div>
                                            
                </td> -->
            </tr>
            <tr>
                <th scope="row">Expected life</th>
            </tr>
            <tr>
                <th scope="colgroup">Annual</th>
            </tr>
            <tr>
                <th scope="row">Energy</th>
            </tr>
            <tr>
                <th scope="row">Material</th>
            </tr>
            <tr>
                <th scope="row">Labour</th>
            </tr>
            <tr>
                <th scope="row">Income</th>
            </tr>
            <tr>
                <th scope="colgroup">Multi Annual</th>
            </tr>
            <tr>
                <th scope="row">Energy</th>
            </tr>
            <tr>
                <th scope="row">Material</th>
            </tr>
            <tr>
                <th scope="row">Labour</th>
            </tr>
            <tr>
                <th scope="row">Cycle</th>
            </tr>
            
        </tbody>
    </table>
  
</template>

<script setup>
import { useDataStore } from '../stores/data'
const storeData = useDataStore()
const props = defineProps(['pNumber'])
</script>

<style>

</style>