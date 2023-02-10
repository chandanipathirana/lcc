<template>
   <div>
        <select name="currencyCountry" id="btn-froup" v-model="storeData.currency">

            <option v-for="country in countries" :key="country.countyCode" >
                {{country.currencyCode}}
            </option> 
            
        </select>
        
   </div> 
   
</template>

<script setup>

import CountryData from '../assets/countries.json'
import { useDataStore } from '../stores/data'
const storeData = useDataStore()
const countries = CountryData

</script>

<style>

</style>