
var form=document.querySelector("#addForm")
var filter=document.querySelector("#filter")

var list=document.querySelector('#items')
form.addEventListener("submit", onsubmit);

var l=document.getElementById('items')



filter.addEventListener('keyup',onsearch)



function onsubmit(e){
    e.preventDefault();
    var inputtext=document.querySelector("#item").value;
    var inputdesc=document.querySelector("#item-des").value;
    console.log(inputtext)


    var newli=document.createElement('li')
    newli.className="list-group-item font-weight-bold";

    var btn=document.createElement('button')
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.appendChild(document.createTextNode('x'));
     newli.appendChild(document.createTextNode(inputtext))
    //newli.appendChild(document.createTextNode("fsf"))
    newli.appendChild(btn)

    var editbtn=document.createElement('button')
    editbtn.className="btn btn-dark btn-sm float-right edit"
    editbtn.appendChild(document.createTextNode('edit'));
   
    newli.appendChild(editbtn)


    /////div for description
    var desc=document.createElement('div')
    desc.className="item-description font-weight-light"
    desc.appendChild(document.createTextNode(inputdesc));
   
    newli.appendChild(desc)


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



function onsearch(e){
    var text=e.target.value.toLowerCase();
   // console.log(text)

    var List=list.getElementsByTagName('li');
    
    Array.from(List).forEach(function(item){
        var itemname=item.firstChild.textContent;
        var de=item.children[2].textContent
        //console.log(itemname)
        if(itemname.toLowerCase().indexOf(text)!=-1 ||de.toLowerCase().indexOf(text)!=-1 ){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    });
   // console.log(arr[1].firstChild.textContent)
    
}