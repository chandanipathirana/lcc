
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('maindata', () => {
  const n_projects = ref(1)
  const currency = ref('')
  const i_rate = ref(5)
  const es_en = ref(2)
  const es_mt = ref(2)
  const es_lb = ref(2)
  const es_in = ref(2)
  const test_projects = []
  const project_details = ref({})
  for (var i = 1; i < 10; i++ ){
    // project_details.value['P'+i]={
      project_details.value[i]={
      init_cost: 25, 
      exp_life: 2,
      an_en: 1,
      an_mt: 1,
      an_lb: 1,
      an_in: 1,
      mulAn_en: 1,
      mulAn_mt: 1,
      mulAn_lb: 1,
      mulAn_cy: 3,
    }
  }
  // console.log(project_details.value.P1.init_cost)

  const data = ref([])
  const config = ref({})
  const layout = ref({})

  config.value= { displayModeBar: true }
  layout.value= { margin: {l:20, r:20, t:30, b:20} }


  function getData(type){
    var d = [{
      x: [],
      y: [],
      type: "scatter"
    }]

    for (var step = 1; step <= n_projects.value; step++){
      console.log("Project - ", step)
      console.log("project_details", project_details.value)
      d[0].x.push(step)
      d[0].y.push(project_details.value[step].init_cost)
    }
  
    console.log(d)
    if (type=="pie"){
      d=[{values: d[0].y,
        labels: d[0].x,
        type:type, 
        sort:false}]
    }
  
    const c=config.value
    const l=layout.value
  
    //Plotly seem to mutate these values. So, to ensure it does not happen, we deepcopy things. 
    return  {data: JSON.parse(JSON.stringify(d)), 
      config: JSON.parse(JSON.stringify(c)), 
      layout: JSON.parse(JSON.stringify(l)) }
  }



  return { n_projects, currency, i_rate, 
    es_en, es_mt, es_lb, es_in,  
    project_details, getData}
})


function setData() {
  return [{
    x: [1, 2, 3, 4],
    y: [10 + Math.random(), 15 + Math.random(), 13 + Math.random(), 27 * Math.random()],
    type: "scatter"
  }]
}