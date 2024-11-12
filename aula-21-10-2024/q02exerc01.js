var h = 15, p = 9, f = 8, d = -1

for(let i=0; i < 15; i++){
    if(d==-1){
        if(f==0){
            f = 15
        }else{
            f -= 1
        }
        if(f==h){
            console.log("S")
            break
        }else if(f==p){
            console.log("N")
            break
        }
    }else if(d==1){
        if(f==15){
            f = 0
        }
        f += 1
        if(f==h){
            console.log("S")
            break
        }else if(f==p){
            console.log("N")
            break
        }
    }
}