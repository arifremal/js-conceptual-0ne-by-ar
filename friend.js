// {name: 'abul', friend: 'babu'}
// {name: 'babu', friend:'abul'}
// {name: 'Alex', friend: 'babu'}
// {name: 'babu', friend:'sabul'}

function friend (object1,object2){
    
if (object1.name== object2.friend && object2.name == object1.friend){
    return true
}else {
    return false
}

}
console.log (friend({name: 'abul', friend: 'babu'},
{name: 'babu', friend:'abul'}
));