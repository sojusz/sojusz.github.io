const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
let ile = 0;

function validation() {
    if(a.value === "") {
        a.style.border = "2px solid red";
        ile++;
    }
    else {
        a.style.border = "2px solid green";
    }

    if(b.value === "") {
        b.style.border = "2px solid red";
        ile++;
    }
    else {
        b.style.border = "2px solid green";
    }

    if(c.value === "") {
        c.style.border = "2px solid red";
        ile++;
    }
    else {
        c.style.border = "2px solid green";
    }
    if(ile === 0) {
        return true;
    }
    else {
        return false;
    }
}