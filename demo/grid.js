

var mouseStickImg;
var mouseCastleSelect = -1;
// above can be collected to a mouse class
var castlePicTable = ["patchCancel", "road", "castle0", "castle1", "castle2", "castle3", "castle4", "castle5"];
function set()
{

}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("Map-Row").style.marginLeft = "250px";
  var list = document.getElementsByClassName("Map-Row");
  for(var i = 0; i < list.length; i++){
      list[i].style.marginLeft = "250px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("Map-Row").style.marginLeft= "0";
  var list = document.getElementsByClassName("Map-Row");
  for(var i = 0; i < list.length; i++){
    list[i].style.marginLeft = "0px";
}

  // added
  mouseCastleSelect = -1;
}

function Select(castle)
{
    var isSelected = false;
    var castleType = castle;
    
    return function()
    {
        mouseCastleSelect = castleType;
        mouseStickImg.src = this.src;
    }
}

function replacePatch()
{
    return function()
    {
        if(mouseCastleSelect >= 0){
            // var target = document.getElementById("castle" + mouseCastleSelect.toString());
            // var newPatch = target.cloneNode(true);
            // newPatch.removeAttribute("id");
            // this.replaceWith(newPatch);
            // console.log(mouseCastleSelect.toString());

            var target = document.getElementById(castlePicTable[mouseCastleSelect]).getElementsByClassName("info")[0];
            var newPatch = target.cloneNode(true);
            this.getElementsByClassName("info")[0].replaceWith(newPatch);
            console.log(mouseCastleSelect.toString());
        }
    }
}
/* build preview effect, not finished
function hoverPatch()
{
    var oldPic = this.getElementsByClassName("info")[0];
    return function(){
        var el = this.getElementsByClassName("info")[0];
        if(mouseCastleSelect >= 0){
            oldPic = el;
            el.src = castlePicTable[mouseCastleSelect];
        }
        el.style.filter = "brightness(50%)";
    }
}
function leavePatch(){
    var el = this.getElementsByClassName("info")[0];
    el.style.filter = "brightness(100%)";
}
*/
window.onload = function(){
    var addCastleBtns = document.getElementsByClassName("castleSample");
    
    for(var i = 0; i < addCastleBtns.length; i++){
        addCastleBtns[i].onclick = Select(i).bind(addCastleBtns[i]);
    }
    
    var field = document.getElementsByClassName("Map-Row")[0];
    var h = 25, w = 24;
    for(var i = 0; i < h; i++){
        var row = document.createElement("div");
        row.setAttribute("class", "d-flex flex-row");
        for(var j = 0; j < w; j++){
            // var img = document.createElement("img");
            // img.setAttribute("class", "patch");
            // img.setAttribute("src", "patch.png");
            // row.appendChild(img);

            var ins_id = document.getElementById('patchUnit');
            var ins = ins_id.cloneNode(true);
            ins.classList.add("patch");
            ins.removeAttribute("id");
            // ins.style.display = "block";
            row.appendChild(ins);
        }
        field.appendChild(row);
    }

    var patches = document.getElementsByClassName("patch");
    for(var i = 0; i < patches.length; i++){
        patches[i].onclick = replacePatch().bind(patches[i]);
    }
    
    mouseStickImg = document.getElementById("mouseStickImg");
    document.body.onmousemove = function(e){
        if(mouseCastleSelect >= 0){
            mouseStickImg.style.visibility = "visible";
            mouseStickImg.style.left = (e.pageX - 50).toString() + "px";
            mouseStickImg.style.top = (e.pageY - 50).toString() + "px";
            // mouseStickImg.style.left = (e.PageX).toString() + "px";
            // mouseStickImg.style.top = (e.PageY).toString() + "px";
        }
        else{
            mouseStickImg.style.visibility = "hidden";
        }
    };
}