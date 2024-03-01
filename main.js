let turn ='x'
let squers=[];

const result=(n1,n2,n3)=>{
  document.querySelector('.title').innerHTML= `${squers[n1]} Winner`
  
  document.getElementById('item'+n1).style.backgroundColor='rgb(253, 46, 201)'
  document.getElementById('item'+n2).style.backgroundColor='rgb(253, 46, 201)'
  document.getElementById('item'+n3).style.backgroundColor='rgb(253, 46, 201)'
  
  setInterval(function() { document.querySelector('.title').innerHTML+='.'}, 1000);
  setTimeout(function() { location.reload()},4000)
}

const winner=()=>{
    for (let i=1;i<10;i++){
       squers[i]= document.getElementById('item'+i).innerHTML;
    }
    if(squers[1]== squers[2] && squers[2]== squers[3]&& squers[3]!=''){
       result(1,2,3)
    }
    
    else if(squers[4]== squers[5] && squers[5]== squers[6]&& squers[5]!=''){
    result(4,5,6)
    }
    
    else if(squers[7]== squers[8] && squers[8]== squers[9]&& squers[9]!=''){
      result(7,8,9)
    }
    
    else if(squers[1]== squers[4] && squers[4]== squers[7]&& squers[7]!=''){
       result(1,4,7)
    }
    
    else if(squers[2]== squers[5] && squers[5]== squers[8]&& squers[8]!=''){
      result(2,5,8)
    }
    else if(squers[3]== squers[6] && squers[6]== squers[9]&& squers[9]!=''){
      result(3,6,9)
    }
    
    else if(squers[1]== squers[5] && squers[5]== squers[9]&& squers[5]!=''){
      result(1,5,9)
    }
    
    else if(squers[3]== squers[5] && squers[5]== squers[7]&& squers[5]!=''){
    result(3,5,7)
    }
    }


const game=(id)=>{
  
    if(turn ==='x' && document.getElementById(id).innerHTML==''){
         document.getElementById(id).innerHTML='X'
         turn='o'
         document.querySelector('.title').innerHTML="Turn for O"
         
    } 

    else if(turn ==='o' && document.getElementById(id).innerHTML==''){
        document.getElementById(id).innerHTML='O'
        turn='x'
        document.querySelector('.title').innerHTML="Turn for X"
    }

   winner() 
}


