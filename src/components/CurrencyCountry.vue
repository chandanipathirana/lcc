<template>
   <div>
        <select name="currencyCountry" id="btn-froup" v-model="storeData.currency">
            <option v-for="country in countries" :key="country.countryCode"  
            :value="country.currencyCode" :selected="EUR">{{country.currencyCode}} ({{ country.countryName }}>
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