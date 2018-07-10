var right = document.getElementById("right").value;
var left = document.getElementById("left").value;
var f1;
var f2;

function fwdtemp() {
   left =  document.getElementById("left").value;
   right =  document.getElementById("right").value;
     var len = left.length;
   if(len > 0)
    {
    var temp1 = left.charAt(0).toString();
    right = right + temp1;
    console.log("right is " +right);
    var temp2 = left.substring(1);
    document.getElementById("left").value = temp2;
    document.getElementById("right").value = right;
    }
 }

function bwdtemp(){
  right =  document.getElementById("right").value;
  left = document.getElementById("left").value;
     var len = right.length;
   if(len > 0)
    {
    var temp1 = right.charAt(len-1).toString();
    console.log("temp1" +temp1);
    left = temp1 + left;
    console.log("left is " +left);
    var temp2 = right.substring(0,(len-1));
    document.getElementById("right").value = temp2;
    document.getElementById("left").value = left;
    }
}
function forward(){
  clearTimeout(f2);
  f1 = setInterval(fwdtemp,1000);
 }

 function backward(){
clearTimeout(f1);
 f2 = setInterval(bwdtemp,1000);
}

function pause(){
  clearInterval(f1);
  clearInterval(f2);
}






