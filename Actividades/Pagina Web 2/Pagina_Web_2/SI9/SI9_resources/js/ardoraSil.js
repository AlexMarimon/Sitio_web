//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()} paintBoard();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function paintBoard(){$("#areaG").css("opacity", 0);var opc_0=[];var opc=[];if (w0[ram_G[indexGame]]){opc_0.push(w0[ram_G[indexGame]])}
if (w1[ram_G[indexGame]]){opc_0.push(w1[ram_G[indexGame]])} if (w2[ram_G[indexGame]]){opc_0.push(w2[ram_G[indexGame]])} if (w3[ram_G[indexGame]]){opc_0.push(w3[ram_G[indexGame]])}
for (i=0;i<opc_0.length;i++) {opc.push("");}for (i=0;i<opc_0.length;i++) {var ind = Math.floor(Math.random()*opc_0.length);while (opc[ind]) {
ind++;if (ind >= opc_0.length) {ind = 0;}}opc[ind]=silWords(opc_0[i]);}var newHtml = "<ul>";for (i=0;i<opc.length;i++) {
newHtml = newHtml + "<li id='cellG" + i.toString() + "' class='bGame'>";
newHtml = newHtml + "<div class='backbGame'><p>" + opc[i] + "</p></div>";newHtml = newHtml + "</li>";}newHtml = newHtml + "</ul>";
$("#leftBut").html(newHtml);$(".bGame").css("border-color", colorButton);$(".bGame").css("box-shadow", "4px 4px 4px rgba(50,50,50,0.5)");$(".bGame").css({
borderColor:colorButton,borderStyle:"dashed"});$(".backbGame").css("background-color", colorBack);$(".backbGame p").css("color", colorText);
newHtml="<span>";if (wIma[ram_G[indexGame]]){newHtml=newHtml+"<img src='"+dirMedia+wIma[ram_G[indexGame]]+ "'/><br>";}
newHtml=newHtml+wGame[ram_G[indexGame]]+"</span>";$("#areaG").html(newHtml);$("#areaG").css("height",$("#leftBut").css("height"));$("#areaG").width($("#ardoraAct").width()-$("#leftBut").width()-60);
$(".bGame").mouseenter(function () {$(this).css("border-color", colorSele);$(this).css("border-style", "solid");newHtml="<span>";
if (wIma[ram_G[indexGame]]){newHtml=newHtml + "<img src='"+dirMedia+wIma[ram_G[indexGame]]+ "'/><br>";}newHtml=newHtml+wGame[ram_G[indexGame]].replace("-",$(this).text())+"</span>";
$("#areaG").html(newHtml);$("#areaG").css("height",$("#leftBut").css("height"));});
$(".bGame").mouseleave(function () {if (indexGame<ram_G.length) {$(this).css("border-color", colorButton);
$(this).css("box-shadow", "4px 4px 4px rgba(50,50,50,0.5)");$(this).css({borderColor: colorButton,borderStyle:"dashed"});
newHtml="<span>";if (wIma[ram_G[indexGame]]){newHtml=newHtml+"<img src='"+dirMedia+wIma[ram_G[indexGame]]+ "'/><br>";}
newHtml=newHtml+wGame[ram_G[indexGame]]+"</span>";$("#areaG").html(newHtml);$("#areaG").css("height",$("#leftBut").css("height"));}});
$(".bGame").click(function () {isCorrect($(this).text().toString());});$("#areaG").animate({opacity: 1}, {queue: true,duration: 2000,complete: function () {}});
if (audio[ram_G[indexGame]]){silenceAll();document.getElementById("audio"+ram_G[indexGame]).play();tiAudio=true;$("#areaG").css("cursor", "pointer");
$("#areaG").click(function () {silenceAll();document.getElementById("audio"+ram_G[indexGame]).play();tiAudio=true;});}else {$("#areaG").css("cursor","default");}calcCan();}
function randomSort() {for (i=0;i<ram_G.length;i++) {var ind=Math.floor(Math.random()*ram_G.length);while (ram_G[ind] > -1){ind++;
if (ind >= ram_G.length) {ind=0;}}ram_G[ind] = i;}}
function calcCan() {var canWidth=$("#ardoraAct").css("width").replace("px", "");var canHeight=$("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});}
function silenceAll() {if (tiAudio) {$("audio").each(function (ind, e) {$(e)[0].pause();$(e)[0].currentTime = 0;});tiAudio=false;}}
function isCorrect(ans) {calcCan();var riAns=silWords(w0[ram_G[indexGame]]).trim().substring(0,c[ram_G[indexGame]]);if (ans.localeCompare(riAns)==0){score=score+scoreInc;
timeAct=timeAct+timeBon;successes++;indexGame++;if (indexGame>=ram_G.length) {showMessage("Ok");} else {paintBoard();}}
else{attempts++;score=score-scoreDec;if (wW[ram_G[indexGame]]) {messageError = wW[ram_G[indexGame]];} else {messageError = messageErrorG;}
if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function silWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
