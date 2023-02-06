// let name1 = "Arif";
// let name2 = "Ariful Islam";

// if (name2 > name1) {
//   console.log(name1.split("").reverse().join(""));
// } else {
//   console.log("name2 boro");
// }

function reversenam( name1,name2 ){



if (name2 > name1) {
   return(name1.split("").reverse().join(""));
  } else {
    return("name2 boro");
  }
  


}

let result = reversenam('Arif', 'Islam')
console.log(result);