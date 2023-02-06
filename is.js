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

let reult=IsJavaScriptFile(1)
console.log(reult);