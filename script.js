function insert (num){
document.form.textview.value = document.form.textview.value + num;
}


function equal(){
var exp = document.form.textview.value;

   document.form.textview.value= eval(exp)

}


function clean(){
 document.form.textview.value = "";

}

function back(){
  exp = document.form.textview.value;
  n = exp.length-1;
  document.form.textview.value = exp.substr(0,n);

}
