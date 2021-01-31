document.write("Line 1 </br>");
document.write("Line 2</br>");
document.write("Line 3</br>");
document.write("Line 4</br>");
document.write("Line 5</br>");
document.write("Line 6</br>");
document.write("Line 7</br>");
document.write("Line 8</br>");
document.write("Line 9</br>");
document.write("Line 10</br>");
document.write("Line 11 </br>");
document.write("Line 12</br>");
document.write("Line 13</br>");
document.write("Line 14</br>");
document.write("Line 15</br>");
document.write("Line 16</br>");
document.write("Line 17</br>");
document.write("Line 18</br>");
document.write("Line 19</br>");
document.write("Line 20</br>");
for(var x=0;x<=5;x+=19){
    document.write("Line" + x + "</br>");
   }



for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      document.write( i + "</br>")
    } 
  }

  var cash=100;
var price=101;

  if (price<=cash){
    document.write("It's yours");
}else{
    document.write("You are broke");
}