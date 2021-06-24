var noCols;
var noRows;
var arr;
var blankindexrow;
var blankindexcol;
var value;
var index = new Array(2);
function reply_click(clicked_id) {
    noRows = (parseInt(clicked_id)) / 10;
    noCols = noRows;
    var x = document.getElementById("a");
    x.style.display = "none"
    arr = new Array(noCols);
    createarray(arr);
    start();
}



function start() {

    var add = document.getElementById('game');
    var k = 0;
    for (var i = 0; i < (noRows); i++) {
        add.innerHTML += "<div class='row'>"
        for (var j = 0; j < noCols; j++) {
            var n = arr[i][j];
            add.innerHTML += "<canvas id='" + n + "' class='myCanvas col'  onclick='reply(this.id)'                     >h</canvas>"
            k++;
        }
        add.innerHTML += "</div>"
    }



    for (var i = 1; i <= noCols * noRows - 1; i++) {

        var s = i.toString();
        var c = document.getElementById(s);
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText(s, 30, 50);
        
        
    }

}
function createarray(ar) {
    var k = 1;

    for (var i = 0; i < (noRows); i++) {
        ar[i] = new Array(noCols);
        for (var j = 0; j < noCols; j++) {
            ar[i][j] = k;
            k++;
        }
    }
    for (var i = 0; i < noCols; i++) {
        shuffleArray(arr[i]);
    }
}

function shuffleArray(ar) {

    for (var i = 0; i < noCols - 1; i++) {
        var i2 = getRandomIntInclusive(0, noCols - 1);
        var t = ar[i];
        ar[i] = ar[i2];
        ar[i2] = t;

    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkclickable(i, j) {
    findblankindex();
    if (i == blankindexrow + 1 && j == blankindexcol) { return 1; }
    else if (i == blankindexrow - 1 && j == blankindexcol) { return 1; }
    else if (i == blankindexrow && j == blankindexcol + 1) { return 1; }
    else if (i == blankindexrow && j == blankindexcol - 1) { return 1; }
    else { return 0; }

}
function findblankindex() {

    for (var i = 0; i < noCols; i++) {
        for (var j = 0; j < noCols; j++) {
            if (arr[i][j] == noCols * noCols) { blankindexrow = i; blankindexcol = j; }
        }
    }
}


function movetile(i, j) {
    var a = checkclickable(i, j);
    if (a) {
    

    }

}
function reply(clicked_id) {
    value = clicked_id;
}
function findindexgivenvalue(value) {

    for (var i = 0; i < noCols; i++) {
        for (j = 0; j < noCols; j++) {
            if (arr[i][j] == value) { index.push(i); index.push(j); }
        }

    }
}
var c = document.getElementById("1");
var ctx = c.getContext("2d");

ctx.clearRect()