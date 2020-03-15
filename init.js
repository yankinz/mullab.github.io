function tes() {
  document.write("test");
}
dsssss.onmouseover = function(evant) {
  if (evant.target.className == "labl") {
    evant.target.className = "lablover";
  }
};
dsssss.onmouseout = function(evant) {
  if (evant.target.className == "lablover") {
    evant.target.className = "labl";
  }
};
select.onselect = function() {
  var xend = document.getElementsByName("xend")[0].value;
  var yend = document.getElementsByName("yend")[0].value;
  var resu = Math.sqrt(xend * xend + yend * yend);
  this.value = resu;
};
pos1.onblur = function() {
  var pos2 = document.getElementsByName("position2")[0].value;
  document.getElementsByName("position2")[0].value = document.getElementsByName(
    "position1"
  )[0].value;
  document.getElementsByName("position1")[0].value = pos2;
};
pos2.onblur = function() {
  var pos1 = document.getElementsByName("position1")[0].value;
  document.getElementsByName("position1")[0].value = document.getElementsByName(
    "position2"
  )[0].value;
  document.getElementsByName("position2")[0].value = pos1;
};
foc.onfocus = function() {
  this.value = "";
  document.getElementById("nowonfocus").innerText = "on focus";
};

function r() {
  var radius = document.getElementsByName("radius_in")[0].value;
  document.getElementById("radius_out").innerText = 3.14 * (radius * radius);
}
function gipot() {
  var k1 = document.getElementsByName("katet1")[0].value;
  var k2 = document.getElementsByName("katet2")[0].value;
  document.getElementById("gipot").innerText = Math.sqrt(k1 * k1 + k2 * k2);
}
function myFunction() {
  document.write("ss");
}
function treangl() {
  var x1 = document.getElementsByName("x1")[0].value;
  var x2 = document.getElementsByName("x2")[0].value;
  var x3 = document.getElementsByName("x3")[0].value;
  var y1 = document.getElementsByName("y1")[0].value;
  var y2 = document.getElementsByName("y2")[0].value;
  var y3 = document.getElementsByName("y3")[0].value;
  var sr = (x1 - x3) * (y2 - y3);
  var res = sr - (y1 - y3) * (x2 - x3);
  document.getElementById("resultreangl").innerText = Math.abs(res / 2);
}
function maxitm() {
  var itms = document.getElementsByName("itm1");

  document.getElementById("maxitmout").innerText = Math.max.apply(null, [
    itms[0].value,
    itms[1].value,
    itms[2].value,
    itms[3].value,
    itms[4].value
  ]);
}
function side_trued() {
  side_t = document.getElementsByName("side_T");
  a = Number(side_t[0].value);
  b = Number(side_t[1].value);
  c = Number(side_t[2].value);
  if (a + b >= c && a + c >= b && c + b >= a) {
    document.getElementById("side_trued").innerText = "true";
  } else {
    document.getElementById("side_trued").innerText = "false";
  }
}
function Fourth() {
  fourth = document.getElementsByName("fourth");
  var x = fourth[0].value;
  var y = fourth[1].value;
  var F;
  if (y > 0) {
    if (x > 0) f = 1;
    else f = 2;
  } else {
    if (x > 0) f = 4;
    else f = 3;
  }
  document.getElementById("fourth").innerText = "fourth " + f;
}
function img(n) {
  var imgs = document.images;
  if (n == 1) {
    var buf = imgs[1].src;
    imgs[1].src = imgs[2].src;
    imgs[2].src = buf;
  }
  if (n == 0) {
    var buf = imgs[0].src;
    imgs[0].src = imgs[1].src;
    imgs[1].src = imgs[2].src;
    imgs[2].src = buf;
  }
}
function resize(img, x, y) {
  img.width = x;
  img.height = y;
}
