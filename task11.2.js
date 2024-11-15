function printNumber(m,n)
    {
        let value = m;
        const interval = setInterval(()=>{
            console.log(value)
            value++;
            if(value>=n){
                clearInterval(interval)
            }
        },1000)
    } 


printNumber(10,20)

