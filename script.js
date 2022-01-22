
var form=document.querySelector("#addForm")

var list=document.querySelector('#items')
form.addEventListener("submit", onsubmit);

var l=document.getElementById('items')




function onsubmit(e){
    e.preventDefault();
    var inputtext=document.querySelector("#item").value;
    console.log(inputtext)


    var newli=document.createElement('li')
    newli.className="list-group-item";

    var btn=document.createElement('button')
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode('x'));
    newli.appendChild(document.createTextNode("fsf"))
    newli.appendChild(btn)

    var editbtn=document.createElement('button')
    editbtn.className="btn btn-dark btn-sm float-right edit"
    editbtn.appendChild(document.createTextNode('edit'));
    newli.appendChild(document.createTextNode(inputtext))
    newli.appendChild(editbtn)



    list.appendChild(newli)

}
l.addEventListener("click", addclick);
function addclick(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
       var prnt=e.target.parentElement;
       list.removeChild(prnt)
    }
}