var order = prompt("do you need football or basketball");

while(order != 'football'  && order != 'basketball' )

{
    order = prompt("do you need football or basketball");
}
var itemorder = '';

if(order == 'football')
{
itemorder = '<img src="./football.jpg">';
}
else
{
itemorder = '<img src="./basketball.jpg">';
}


var numofball = prompt("how many ball do you watch ?");

var result=" ";

for(var x=0;x<numofball;x++)
{ 
    result= result +itemorder; 
}
document.write (result);

function sum(var1,var2)
{
    return var1/var2
}

console.log(sum(3,6));
document.write(sum(3,6));


