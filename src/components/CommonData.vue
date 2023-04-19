<template>
  <div class="container-fluid text-center">
    <div class="container-fluid p-1 bg-primary text-white text-center">
  <div class="row">
        <div class="col"><h1>Bow-Tie Diagram for Risk Analysis</h1></div>
        <div class="col text-right">An Infrastructure Asset Management Tool 
          (c) Chandani Pathirana 
    <!--<a href="mailto:chandani@pathirana.net" ><mark style="color:white;">//</mark></a> -->
    </div>
    </div>
  </div>
      <div class="row">
        <div class="col-md-12">
           <div class="row mb-1">
             <div class="col-md-4">
              <div class="row">
              <label for="No of Projects" >#Projects </label>
              <select  min="1" max="3" class="form-control" v-model="storeData.n_projects" >
                <option v-for="n in 3" :key="n" :value="n">{{n}}</option>
              </select>
              </div>
            </div>
            <div class="col-md-4">
            <label for="Currency" >Currency</label>

              <CurrencyCountry />
            </div>
            <div class="col-md-4 ">
            <label for="Interest rate" >Interest rate</label>
                   <div class="input-group">
                <input type="number" class="form-control" min="0"  id="autoSizingInputGroup" placeholder="5" name="i_rate" v-model="storeData.i_rate">
                <span class="input-group-text">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
         <h4>Escalation Rates</h4>
      </div>

      <div class="row">
        <div class="col-md-12">    
          <div class="row mb-1">
            <label for="Energy" class="col-md-1 col-form-label">Energy</label>
            <div class="col-md-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Energy" placeholder="2" name="es_en" v-model="storeData.es_en">
                <span class="input-group-text">%</span>
              </div>
            </div>
            <label for="Material" class="col-md-1 col-form-label">Material</label>
            <div class="col-md-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Meterial" placeholder="2" name="es_mt" v-model="storeData.es_mt">
                <span class="input-group-text">%</span>
              </div>
            </div>
            <label for="Labour" class="col-md-1 col-form-label">Labour</label>
            <div class="col-md-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Labour" placeholder="2" name="es_lb" v-model="storeData.es_lb">
                <span class="input-group-text">%</span>
              </div>
            </div>
            <label for="Income" class="col-md-1 col-form-label">Income</label>
            <div class="col-md-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Income" placeholder="2" name="es_in" v-model="storeData.es_in">
                <span class="input-group-text">%</span>
              </div>
            </div>
          </div>
          <!-- <hr>
            <div>
                Number of Projects = {{storeData.n_projects}}
                Currency = {{storeData.currency}}
                Interest Rate = {{storeData.i_rate}}
                <p>Escalation Cost</p>
                Energy = {{storeData.es_en}}
                Material = {{storeData.es_mt}}
                Labour = {{storeData.es_lb}}
                Income = {{storeData.es_in}}
            </div> -->
            <hr>
            
        </div>
      </div>
      
    </div>
</template>

<script setup>
import { useDataStore } from '../stores/data'
import  CurrencyCountry  from './CurrencyCountry.vue'

const storeData = useDataStore()

</script>

<style>

</style>