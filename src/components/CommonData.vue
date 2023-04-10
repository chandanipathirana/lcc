<template>
  <div class="container-fluid text-center">
      <h1> Common Data </h1>
      <div class="row">
        <div class="col-sm-12">
           <div class="row mb-1">
             <label for="No of Projects" class="col-sm-1 col-form-label">No of Projects (1 - 3)</label>
            <div class="col-sm-1">
              <input type="number" min="1" max="3" class="form-control" v-model="storeData.n_projects" >
            </div>
            <label for="Currency" class="col-sm-1 col-form-label">Currency</label>
            <div class="col-sm-3">
              <CurrencyCountry />
            </div>
            
            <label for="Interest rate" class="col-sm-1 col-form-label">Interest rate</label>
            <div class="col-sm-2 ">
              <div class="input-group">
                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="5" name="i_rate" v-model="storeData.i_rate">
                <span class="input-group-text">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
         <h4>Escalation Cost</h4>
      </div>

      <div class="row">
        <div class="col-sm-12">    
          <div class="row mb-1">
            <label for="Energy" class="col-sm-1 col-form-label">Energy</label>
            <div class="col-sm-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Energy" placeholder="2" name="es_en" v-model="storeData.es_en">
                <span class="input-group-text">%</span>
              </div>
            </div>
            <label for="Material" class="col-sm-1 col-form-label">Material</label>
            <div class="col-sm-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Meterial" placeholder="2" name="es_mt" v-model="storeData.es_mt">
                <span class="input-group-text">%</span>
              </div>
            </div>
            <label for="Labour" class="col-sm-1 col-form-label">Labour</label>
            <div class="col-sm-2">
              <div class="input-group">
                <input type="number" class="form-control" id="Labour" placeholder="2" name="es_lb" v-model="storeData.es_lb">
                <span class="input-group-text">%</span>
              </div>
            </div>
            <label for="Income" class="col-sm-1 col-form-label">Income</label>
            <div class="col-sm-2">
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