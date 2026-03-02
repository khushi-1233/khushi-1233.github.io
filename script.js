let names=[1,2,2,3,4,4];
let i=0;
for(let j=i+1; j<names.length; j++){
 if(names[j]!=names[i]){
    names[i+1]=names[j];
    i++;
 }
}
return {i+1};


