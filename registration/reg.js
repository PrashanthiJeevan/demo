var list=[];
function firstname() {
    var fn = document.getElementById('fn').value;
        if (fn == '') {
            document.getElementById('a1').style.display = "block";
        }
        else {
            document.getElementById('a1').style.display = 'none';
        }
}

function lastname() {
    var ln = document.getElementById('ln').value;
    if (ln == '') {
        document.getElementById('a2').style.display = "block";

    }
    else {
        document.getElementById('a2').style.display = "none";
    }
}
function email() {
    var em = document.getElementById('em').value;
    if (em == '') {
      document.getElementById('a3').style.display = "block";
       
    }
    else {
      
        if (em.indexOf('@') >= 0 && em.indexOf('.com') > em.indexOf('@')) {
            document.getElementById('a3').style.display = "none";
        }
        else {
            document.getElementById('a3').style.display = "block";
        }
    }
}
function password() {
    var pw = document.getElementById('pw').value;
    if (pw == '') {
        document.getElementById('a4').style.display = "block";
   
    }
    else {
        document.getElementById('a4').style.display = "none";
        if (pw.length >= 8) {
            document.getElementById('a4').style.display = "none";
        } else {
            document.getElementById('a4').style.display = "block";   
        }
    }
  
}
function loctn() {
    var loc = document.getElementById('loc').value;
    if (loc == '') {
        document.getElementById('a5').style.display = "block";
}
    else {

    document.getElementById('a5').style.display = "none";
}
}
function compny() {
    var comp = document.getElementById('comp').value;
    if (comp == '') {
        document.getElementById('a6').style.display = "block";
    }
    else {
        document.getElementById('a6').style.display = "none";
    }
}
function gend() {
    if (document.getElementById('male').checked == true || document.getElementById('female').checked == true) {
        
        document.getElementById('a7').style.display = "none";
    }
    else {
        document.getElementById('a7').style.display = "block";
    }
}


function reg() {
    firstname();
    lastname();
    email();
    password();
    loctn();
    compny();
    gend();
    if (document.getElementById('male').checked == true) {
        var gender = 'male';
    }
    else {
        var gender = 'female';
    }
    if ((document.getElementById('a1').style.display == 'none') && (document.getElementById('a2').style.display == 'none') && (document.getElementById('a3').style.display == 'none') && (document.getElementById('a4').style.display == 'none') && (document.getElementById('a5').style.display == 'none') && (document.getElementById('a6').style.display == 'none') && (document.getElementById('a7').style.display == 'none')) {
        var temp = {
            fn: document.getElementById('fn').value,
            ln: document.getElementById('ln').value,
            em: document.getElementById('em').value,
            pw: document.getElementById('pw').value,
            loc: document.getElementById('loc').value,
            comp: document.getElementById('comp').value,
            gen: gender
        }
        list.push(temp);
        localStorage.LIST = JSON.stringify(list);
    }

    console.log(JSON.parse(localStorage.LIST));
}
function table1() {
try{
    list = JSON.parse(localStorage.LIST);
   }
catch(e){
list=[];
} console.log(list);
       var html = '<table >';
       html += '<th>firstname</th><th>lastname</th><th>email</th><th>location</th><th>company</th><th>gender</th>';
       for (var i = 0; i < list.length; i++) {
           html += '<tr><td>' + list[i].fn + '</td><td>' + list[i].ln + '</td><td>' + list[i].em + ' </td><td>' + list[i].loc + ' </td><td>' + list[i].comp + ' </td><td>' + list[i].gen + ' </td></tr>';
       }
       html += '</table>';

       document.getElementById('table').innerHTML = html;
     
   }


