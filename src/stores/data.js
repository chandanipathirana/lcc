import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import{calc_lcc} from './lcc_cal.js'
import { useLocalStorage } from "@vueuse/core"

export const useDataStore = defineStore('maindata', () => {
  const n_projects = ref(useLocalStorage('n_projects', 1))
  const currency = ref(useLocalStorage('currency', 'EUR'))
  const i_rate = ref(useLocalStorage('i_rate',5))
  const es_en = ref(useLocalStorage('es_en',2))
  const es_mt = ref(useLocalStorage('es_mt',2))
  const es_lb = ref(useLocalStorage('es_lb',2))
  const es_in = ref(useLocalStorage('es_in',2))
  const project_details = ref(useLocalStorage('project_details', init_projects()))
   
  if (n_projects.value < 1 ){
    n_projects.value = 1
  }


  // colors[n_project]log(project_details.value.P1.init_cost)

  const data = ref([])
  const config = ref({})
  const layout = ref({})
  var colors = ['yellow', 'darkblue', 'firebrick', 'purple','darkgray', 'darkgreen']
  config.value= { displayModeBar: true }


  function getData(type){

    layout.value= { 
    margin: {l:60, r:10, t:30, b:40} ,   
    yaxis :
    {
      showline:'True', 
      linewidth:1.5, 
      linecolor:'gray',
      mirror: true,
      title: {
        text: currency.value,
        font: {
          size: 18,
        }
      }
    },
    xaxis :
    {
      showline:'True', 
      linewidth:1.5, 
      linecolor:'gray',
      mirror: true,
      title: {
        text: 'Year',
        font: {
          size: 18,
        }
      }
    },
    legend: {
      x: .0,
      y: 1.,
      orientation: "h",
      bgcolor:  'rgba(0,0,0,0)'
    },
   

  }

    var chartData = scatterTs(n_projects, i_rate, project_details, es_en, es_mt, es_lb, es_in, colors)
  
    if (type=="pie"){
      chartData = pieChart(chartData)
    }
  
  
    //Plotly seem to mutate these values. So, to ensure it does not happen, we deepcopy things. 
    return  {data: JSON.parse(JSON.stringify(chartData)), 
      config: JSON.parse(JSON.stringify(config.value)), 
      layout: JSON.parse(JSON.stringify(layout.value)) }
  }



  return { n_projects, currency, i_rate, 
    es_en, es_mt, es_lb, es_in,  
    project_details, getData}
})



function init_projects() {
  const pdvalue=[]
  for (var i = 1; i <= 3; i++) {
    pdvalue[i] = {
      init_cost: 250000 + (i - 1) * 50000,
      exp_life: 20,
      an_en: 9000 - (i - 1) * 2000,
      an_mt: 12000 - (i - 1) * 3000,
      an_lb: 8000 - (i - 1) * 2000,
      an_in: 50000 + (i - 1) * 20000,
      mulAn_en: 10000,
      mulAn_mt: 9000,
      mulAn_lb: 12000,
      mulAn_cy: 5,
    }
  }
  return pdvalue
}

function pieChart(d) {
  d = [{
    values: d[0].y,
    labels: d[0].x,
    type: "pie",
    sort: false
  }]
  return d
}

function scatterTs(n_projects, i_rate, project_details, es_en, es_mt, es_lb, es_in, colors) {
  var d = [{}]
  for (var n_project = 1; n_project <= n_projects.value; n_project++) {
    // console.log("Project - ", n_project)
    // colors[n_project]log("exp_life - ", project_details.value[n_project].exp_life)
    var results = calc_lcc(i_rate.value,
      n_project,
      project_details.value[n_project].exp_life,
      project_details.value[n_project].an_en,
      project_details.value[n_project].an_mt,
      project_details.value[n_project].an_lb,
      project_details.value[n_project].an_in,
      es_en.value,
      es_mt.value,
      es_lb.value,
      es_in.value,
      project_details.value[n_project].mulAn_en,
      project_details.value[n_project].mulAn_mt,
      project_details.value[n_project].mulAn_lb,
      project_details.value[n_project].mulAn_cy,
      project_details.value[n_project].init_cost)

    // colors[n_project]log("Results : ", n_project, "expected life : ", project_details.value[n_project].exp_life, results)//results.CPVT[5][0], results.CPVT[5].slice(-1))
    // colors[n_project]log("project_details", project_details.value)
    for (var i = 0; i < 6; i++) {
      d.push({
        x: [],
        y: [],
        type: "scatter"
      })
    }
    //console.log("d : ", d.length)
    var current
    current=d[1 + (n_project - 1) * 6 + 0]
    current.x = results.CPVT[0]
    current.y = results.CPVT[1]
    current.line = { "color": colors[n_project], "width": 2, "dash": 'dot'}
    current.name = n_project.toString() + ' Energy'
    current.visible='legendonly'
    current=d[1 + (n_project - 1) * 6 + 1]
    current.x = results.CPVT[0]
    current.y = results.CPVT[2]
    current.line = { "color": colors[n_project], "width": 2, "dash": 'dashdot' }
    current.name = n_project.toString() + ' Material'
    current.visible='legendonly'
    current=d[1 + (n_project - 1) * 6 + 2]
    current.x = results.CPVT[0]
    current.y = results.CPVT[3]
    current.line = { "color": colors[n_project], "width": 2, "dash": 'dash' }
    current.name = n_project.toString() + ' Labour'
    current.visible='legendonly'
    current=d[1 + (n_project - 1) * 6 + 4]
    current.x = results.CPVT[0]
    current.y = results.CPVT[4]
    current.line = { "color": colors[n_project], "width": 2, "dash": 'solid' }
    current.name = n_project.toString() + ' Income'
    current=d[1 + (n_project - 1) * 6 + 5]
    current.x = results.CPVT[0]
    current.y = results.CPVT[5]
    current.line = { "color": colors[n_project], "width": 4, "dash": 'solid' }
    current.name = n_project.toString() + ' Profit'
    current=d[1 + (n_project - 1) * 6 + 3]
    current.x = results.CPVT[0]
    current.y = results.CPVT[6]
    current.line = { "color": colors[n_project], "width": 1, "dash": 'solid' }
    current.name = n_project.toString() + ' Expense'

  }
  return d
}
