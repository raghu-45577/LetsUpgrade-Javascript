let str="My madam asked my mom and dad to attend for meeting"
str=str.toLowerCase()
let ar=str.split(" ")
for(let i=0;i<ar.length;i++)
{
    let k=""
    for(let j=0;j<ar[i].length;j++)
    {
        k=ar[i][j]+k
    }
    if(k===ar[i])
    {
        console.log(ar[i])
    }
}