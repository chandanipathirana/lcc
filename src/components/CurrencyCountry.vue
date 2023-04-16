<template>
   <div>
        <select name="currencyCountry" id="btn-froup" style="width:200px;" v-model="storeData.currency">
            <option v-for="country in countries" :key="country.countryCode"  
            :value="country.currencyCode">{{country.currencyCode}} ({{ country.countryName }})
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