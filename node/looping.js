var coord = [];
coord.push({x:23, y:53});
coord.push({x:28, y:55});
coord.push({x:63, y:55});
coord.push({x:25, y:55});


var i = coord.length;
console.log('While looping');
while(i--){
    console.log(coord[i].x+' '+coord[i].y);
}
console.log('For multi-var looping');
var l = coord.length;
for(l,k=0;l&&k;(k>0? k-- : l--)){
    console.log(coord[l].x+' '+coord[l].y);
}
console.log('For looping');
var j = coord.length;
for(j;j;j--){
    console.log(coord[j].x+' '+coord[j].y);
}
