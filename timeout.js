var time=0;
var timer=setInterval(function () {
  time +=2;
console.log(time + '  seconds have passed Sucessfully');
if(time>5){
  clearInterval(timer);
console.log('kuria njoo na uku');
}
}, 2000);
