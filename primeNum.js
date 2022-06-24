
for(var i=2;i<=20;i++){
    flag=0;
    for(var j=2;j<=i/2;j++){

        if(i%j==0){

            console.log("Not prime Number" + i);
            flag=1;
            break;
           
        }
    }
    if(flag==0){
        console.log("Prime Number" +i)
    }
}