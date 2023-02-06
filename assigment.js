function friend (object1,object2){
    
    if (object1.name== object2.friend && object2.name == object1.friend){
        return true
    }else {
        return false
    }
    
    }


    function IsJavaScriptFile(file) {
        if (file != String){
            return 'input a valid string'
        }
     
        if(file.endsWith('.js') ){
            return true
        }else {
            return false
        }
        
    }

    function radianToDegree(radian){
        if (radian != Number){
            return 'input a valid number'
        }
    const PI = 3.1416;
    const degree = radian* 180/ PI
    let finall = degree.toFixed(2)
        // return degree
        return finall
    
    }
    