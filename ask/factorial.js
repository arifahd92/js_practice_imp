//recurrance relation
// f(n) = 2*f(n-1)

function facto(n){
if(n==0||n==1){
    return 1
}

const smaller = facto(n-1)
const bigger = n*smaller
return bigger 
}
console.log(facto(5))