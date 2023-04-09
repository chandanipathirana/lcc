
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import{calc_lcc} from './lcc_cal.js'

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
      init_cost: 250000, 
      exp_life: 20,
      an_en: 9000,
      an_mt: 12000,
      an_lb: 8000,
      an_in: 50000,
      mulAn_en: 10000,
      mulAn_mt: 9000,
      mulAn_lb: 12000,
      mulAn_cy: 5,
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

    for (var n_project = 1; n_project <= n_projects.value; n_project++){
      console.log("Project - ", n_project)
      console.log("exp_life - ", project_details.value[n_project].exp_life)

      var results = calc_lcc(i_rate.value,
        n_project,
        project_details.value[n_project].exp_life,
        project_details.value[n_project].an_en ,
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
        
        console.log("Results : ", n_project, "expected life : ", project_details.value[n_project].exp_life, results)//results.CPVT[5][0], results.CPVT[5].slice(-1))


      // console.log("project_details", project_details.value)
      d[0].x.push(n_project)
      d[0].y.push(project_details.value[n_project].init_cost)
    }
  
    // console.log(d)
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


// function setData() {
//   return [{
//     x: [1, 2, 3, 4],
//     y: [10 + Math.random(), 15 + Math.random(), 13 + Math.random(), 27 * Math.random()],
//     type: "scatter"
//   }]
// }