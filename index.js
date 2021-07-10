var cadre = document.getElementById('cadre');
var button = document.getElementById('button');
var content =  document.getElementById('content');
var field  = document.getElementById('field');
var todolist = document.getElementById('todolist');
var plus = document.getElementById('plus');

var button2 = document.getElementById('button2');
var content2 =  document.getElementById('content2');
var field2  = document.getElementById('field2');
var todolist2 = document.getElementById('todolist2');
var plus2 = document.getElementById('plus2');

var button3 = document.getElementById('button3');
var content3 =  document.getElementById('content3');
var field3  = document.getElementById('field3');
var todolist3 = document.getElementById('todolist3');


todolist2.style.display = 'none';
todolist3.style.display = 'none';

plus.addEventListener('click', ajout);
plus2.addEventListener('click', ajout2);

function ajout(){
   todolist2.style.display= 'block';
}

function ajout2(){
    todolist3.style.display= 'block';
}

    button.addEventListener('click', click);

    button2.addEventListener('click', click2);

    button3.addEventListener('click', click3);

function click(){

    // creer un div task
    var task = document.createElement('div');
    task.className='task';
    content.appendChild(task); 

    // creer un div ligne
    var ligne = document.createElement('div');
    ligne.className= 'ligne';
    task.appendChild(ligne);

    //creer un div options
    var options = document.createElement('div');
    options.className = 'options';
    task.appendChild(options);

    // creer un li
    var liste = document.createElement('li');
    content.style.listStyleType = 'none';
    ligne.appendChild(liste); 
    liste.innerText = field.value;
    field.value = "";

    // creer un btn fait pour barrer
    var b = document.createElement('button');
    var t = document.createTextNode("Done"); 
    b.className= "stylebtn" ;
    b.appendChild(t);                            
    options.appendChild(b);    

    b.addEventListener('click', barrer);

    function barrer(){
        liste.style.textDecoration = 'line-through';
    }


    // creer un btn pas fait pour enlever la barre
    var n = document.createElement('button');
    var g = document.createTextNode("Not Done");  
    n.className= "stylebtn";     
    n.appendChild(g);                                
    options.appendChild(n);    

    n.addEventListener('click', debar);

    function debar (){
        liste.style.textDecoration = 'none';
    }

    // creer un btn remove pour retirer la tache
    var btn = document.createElement('button');
    btn.className= "stylebtn"; 
    var t = document.createTextNode("Remove");      
    btn.appendChild(t);                             
    options.appendChild(btn);    

    btn.addEventListener('click', ben);

    function ben(){
        task.remove();
    }

}

function click2(){

    // creer un div task
    var task2 = document.createElement('div');
    task2.className='task';
    content2.appendChild(task2); 

    // creer un div ligne
    var ligne2 = document.createElement('div');
    ligne2.className= 'ligne';
    task2.appendChild(ligne2);

    //creer un div options
    var options2 = document.createElement('div');
    options2.className = 'options';
    task2.appendChild(options2);

    // creer un li
    var liste2 = document.createElement('li');
    content2.style.listStyleType = 'none';
    ligne2.appendChild(liste2); 
    liste2.innerText = field2.value;
    field2.value = "";

    // creer un btn fait pour barrer
    var b2 = document.createElement('button');
    var t2 = document.createTextNode("Done"); 
    b2.className= "stylebtn" ;
    b2.appendChild(t2);                            
    options2.appendChild(b2);    

    b2.addEventListener('click', barrer2);

    function barrer2(){
        liste2.style.textDecoration = 'line-through';
    }


    // creer un btn pas fait pour enlever la barre
    var n2 = document.createElement('button');
    var g2 = document.createTextNode("Not Done");  
    n2.className= "stylebtn";     
    n2.appendChild(g2);                                
    options2.appendChild(n2);    

    n2.addEventListener('click', debar2);

    function debar2 (){
        liste2.style.textDecoration = 'none';
    }

    // creer un btn remove pour retirer la tache
    var btn2 = document.createElement('button');
    btn2.className= "stylebtn"; 
    var t2 = document.createTextNode("Remove");      
    btn2.appendChild(t2);                             
    options2.appendChild(btn2);    

    btn2.addEventListener('click', ben2);

    function ben2(){
        task2.remove();
    }

}

function click3(){

    // creer un div task
    var task3 = document.createElement('div');
    task3.className='task';
    content3.appendChild(task3); 

    // creer un div ligne
    var ligne3 = document.createElement('div');
    ligne3.className= 'ligne';
    task3.appendChild(ligne3);

    //creer un div options
    var options3 = document.createElement('div');
    options3.className = 'options';
    task3.appendChild(options3);

    // creer un li
    var liste3 = document.createElement('li');
    content3.style.listStyleType = 'none';
    ligne3.appendChild(liste3); 
    liste3.innerText = field3.value;
    field3.value = "";

    // creer un btn fait pour barrer
    var b3 = document.createElement('button');
    var t3 = document.createTextNode("Done"); 
    b3.className= "stylebtn" ;
    b3.appendChild(t3);                            
    options3.appendChild(b3);    

    b3.addEventListener('click', barrer3);

    function barrer3(){
        liste3.style.textDecoration = 'line-through';
    }


    // creer un btn pas fait pour enlever la barre
    var n3 = document.createElement('button');
    var g3 = document.createTextNode("Not Done");  
    n3.className= "stylebtn";     
    n3.appendChild(g3);                                
    options3.appendChild(n3);    

    n3.addEventListener('click', debar3);

    function debar3 (){
        liste3.style.textDecoration = 'none';
    }

    // creer un btn remove pour retirer la tache
    var btn3 = document.createElement('button');
    btn3.className= "stylebtn"; 
    var t3 = document.createTextNode("Remove");      
    btn3.appendChild(t3);                             
    options3.appendChild(btn3);    

    btn3.addEventListener('click', ben3);

    function ben3(){
        task3.remove();
    }

}