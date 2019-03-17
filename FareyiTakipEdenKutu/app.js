
/*script etiketini body kapatma etiketinden hemen önce yazdım. 
hız ve nesnelerin yüklenmesi açısından kullanılan bir yöntemdir.*/
var kutu=document.getElementById("kutu");
kutu.style.position="absolute"; 
window.onmousemove=function(e){
kutu.style.left=e.clientX+"px";
kutu.style.top=e.clientY+"px";
//console.log(e.offsetX);
}
