



let result = document.getElementById('inputscreen');
 
let printNumber = (number)=>{
    result.value +=   number;
}

let time = new Date().getHours();
let min = new Date().getMinutes();

document.getElementById('tim').innerHTML = time+':'+min;






// my functions  <------------

function on(){

    
    result.value = '';
    document.getElementById('screenResult').innerHTML = '0.';
    document.getElementById("inputscreen").style.backgroundColor = 'rgb(190, 190, 190)';
    back = document.querySelector('.screen')
    back.style.background = 'rgb(190, 190, 190)'
}

let printResult=()=>{
 try {
    document.getElementById('screenResult').innerHTML =  eval(result.value);
 }
 catch(err) {
    document.getElementById('screenResult').innerHTML = "-------- Error!! ---------";
 }
}

function del(){
    result.value = result.value.slice(0, -1);
}

function ans(){
  
    document.getElementById('screenResult').innerHTML =  eval(result.value) * 0.1245325;
}

function off(){
    document.getElementById('screenResult').innerHTML = '--------- Bye.!! ---------';
    setTimeout(function() {
        document.getElementById("inputscreen").style.backgroundColor = 'rgb(153, 153, 153)';
        back = document.querySelector('.screen')
        back.style.background = 'rgb(153, 153, 153)'
        document.getElementById('screenResult').innerHTML = '';
        document.getElementById('inputscreen').value = '';
    }, 2500);
}




  











// functions//