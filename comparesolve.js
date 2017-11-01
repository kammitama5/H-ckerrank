function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    var a = 0;
    var b = 0;
    // compare a0 with b0
    if (a0 === b0){
        a = a + 0
    }
    else if (a0 > b0){
        a = a + 1
    }
    else if (a0 < b0){
        b = b + 1
    }
        
    // compare a1 with b1
    if (a1 === b1){
        a = a + 0
    }
    else if (a1 > b1){
        a = a + 1
    }
    else if (a1 < b1){
        b = b + 1
    }
    // compare a2 with b2
        if (a2 === b2){
        a = a + 0
    }
    else if (a2 > b2){
        a = a + 1
    }
    else if (a2 < b2){
        b = b + 1
    }
    result = a.toString() + " " + b.toString()
    //c = result.join(" ")
    return result  
    
}

solve(5, 6, 7, 3, 6, 10)
