var Aadahar= "1234 5678 9012"
var Name= "Pavithra";
var Age =24;
var email="pavi@gmail.com"
var city="aaa";
var company ="bbb";
var contact ="0123456789";

var tags = document.querySelectorAll("span");
tags[0].innerHTML=Aadahar;
tags[1].innerHTML=Name;
tags[2].innerHTML=Age;
tags[3].innerHTML=email;
tags[4].innerHTML=city;
tags[5].innerHTML=company;
tags[6].innerHTML=contact;


var listelement = document.querySelectorAll("li");
for (let index = 0; index < listelement.length; index++) {
    listelement[index].className="listitem";
}

var imagetag = document.createElement("img");
imagetag.src="image.JPG";
document.getElementsByTagName('body')[0].appendChild(imagetag);