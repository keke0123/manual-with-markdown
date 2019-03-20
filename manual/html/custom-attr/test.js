
var testBox=document.querySelector("#test__box");
console.log("testBox.dataset.num : "+testBox.dataset.num);
testBox.dataset.num = 4;
console.log("testBox.dataset.num : "+testBox.dataset.num);
testBox.dataset.num = 3;
console.log("testBox.dataset.num : "+testBox.dataset.num);

var test__box__02=document.querySelector("#test__box__02");
console.log(test__box__02.hasAttribute("is-actived"));