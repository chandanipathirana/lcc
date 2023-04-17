export function calc_lcc(i_rate,
    n_project,
    exp_life,
    an_en ,
    an_mt,
    an_lb,
    an_in,
    es_en,
    es_mt,
    es_lb,
    es_in,
    mulAn_en,
    mulAn_mt,
    mulAn_lb,
    mulAn_cy,
    init_cost ){
    
  
  const accumulate = arr => arr.map((sum => value => sum += value)(0));
    
    //Annual values
    const AV = [
      [],
      [],
      [],
      [],
      []
    ]
    for (var p=1; p<=exp_life; p++){
      AV[0].push(p)
      AV[1].push(an_en*(1+es_en/100.)**p)
      AV[2].push(an_mt*(1+es_mt/100.)**p)
      AV[3].push(an_lb*(1+es_lb/100.)**p)
      AV[4].push(an_in*(1+es_in/100.)**p)
  
    }
    // colors[n_project]log ("Annual En : ", an_en)
    
    //Present Annual Value
    const PAV = [
        [],
      [],
      [],
      [],
      []
      ]
    for (var p=1; p<=exp_life; p++){
      PAV[0].push(p)
      PAV[1].push(AV[1][p-1]/(1+i_rate/100)**p)
      PAV[2].push(AV[2][p-1]/(1+i_rate/100)**p)
      PAV[3].push(AV[3][p-1]/(1+i_rate/100)**p)
      PAV[4].push(AV[4][p-1]/(1+i_rate/100)**p)
  
    }
    
    //Multi Annual Value
    const MAV = [
        [],
      [],
      [],
      []
      ]
    for (var i=1; i <= exp_life; i ++){
     
       if ((i % mulAn_cy)==0){
            MAV[0].push(i)
         MAV[1].push(mulAn_en*(1+es_en/100)**i)
             MAV[2].push(mulAn_mt*(1+es_mt/100)**i)
           MAV[3].push(mulAn_lb*(1+es_lb/100)**i)
        }
       else {
         MAV[0].push(0)
         MAV[1].push(0)
         MAV[2].push(0)
         MAV[3].push(0)
        }
  
      }
    
    //Multi Annual Present Value
    const MAPV = [
        [],
      [],
      [],
      []
      ]
    for (var i=1; i <= exp_life; i ++){
     
       if ((i % mulAn_cy)==0){
            MAPV[0].push(i)
         MAPV[1].push((mulAn_en*(1+es_en/100)**i)/(1+i_rate/100)**i)
             MAPV[2].push((mulAn_mt*(1+es_mt/100)**i)/(1+i_rate/100)**i)
           MAPV[3].push((mulAn_lb*(1+es_lb/100)**i)/(1+i_rate/100)**i)
        }
       else {
         MAPV[0].push(0)
         MAPV[1].push(0)
         MAPV[2].push(0)
         MAPV[3].push(0)
        }
  
      }
    //Cumulative Annual Present Value
    const CAPV = [
      [],
      [],
      [],
      []
    ]
    CAPV[0] = PAV[0]
    CAPV[1] = accumulate(PAV[1])
    CAPV[2] = accumulate(PAV[2])
    CAPV[3] = accumulate(PAV[3])
    CAPV[4] = accumulate(PAV[4])
    
    //Cumulative Multi Annual Present Value
    const CMAPV = [
      [],
      [],
      [],
     ]
    CMAPV[0] = MAPV[0]
    CMAPV[1] = accumulate(MAPV[1])
    CMAPV[2] = accumulate(MAPV[2])
    CMAPV[3] = accumulate(MAPV[3])
    
    //Cumulative Present Value Total = CAPV + CMAPV
    
      const CPVT = [
      [],
      [],
      [],
      [],
      [],
      [],
      []
      ]
    //   console.log ("HERE", exp_life)
    for (var i=0; i < exp_life; i ++){
      CPVT[0][i] = ( CAPV[0][i])
      CPVT[1][i] = -1*( CAPV[1][i]+ CMAPV[1][i])
      CPVT[2][i] = -1*( CAPV[2][i]+ CMAPV[2][i])
      CPVT[3][i] = -1*( CAPV[3][i]+ CMAPV[3][i])
      CPVT[4][i] = ( CAPV[4][i])
      CPVT[5][i] = CPVT[1][i]+CPVT[2][i]+CPVT[3][i]+CPVT[4][i]-init_cost
      CPVT[6][i] = CPVT[1][i]+CPVT[2][i]+CPVT[3][i]
    //   console.log ("i : ", i)
    }
   
    // add zero values to the beginning of the CPVT
    CPVT[0].unshift(0)
    CPVT[1].unshift(NaN)
    CPVT[2].unshift(NaN)
    CPVT[3].unshift(NaN)
    CPVT[4].unshift(NaN)
    CPVT[5].unshift(-1*init_cost)
    CPVT[6].unshift(NaN)

    return {AV, MAV, PAV, MAPV, CAPV, CMAPV, CPVT}
    }
  