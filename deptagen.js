//function to hide and show the first element
var i = 0;

function toggleAGS() {
    //Put id in "x" for cleaner code
    var x = document.getElementById("ags");
    if (x.style.display==="none") {
        x.style.display="block";
    } else {
        x.style.display = "none";
    }

}
    // if (i=0){
    //     i++;
    //     document.getElementById("ags").style.display="show";
    // } else {
    //     i=0;
    //     document.getElementById("ags").style.display="none";
    // }