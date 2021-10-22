#!/usr/bin/env node
let inputArray=process.argv.slice(2);
let fs =require("fs");
let optionArr=[];
let fileArray=[];

for(let i=0;i<inputArray.length;i++)
{
    if(inputArray[i].charAt(0)=="-")
    {
        optionArr.push(inputArray[i]);
    }
    else{
        fileArray.push(inputArray[i]);
        
    }
}
if(optionArr.includes("-b")&& optionArr.includes("-n"))
{
    console.log("Either use -n or -b");
    return;
}
for(let i=0;i<fileArray.length;i++)
{
    if(fs.existsSync(fileArray[i])==false)
    {
        console.log("please enter valid filename");
        return;
    }
}


let content="";
for (let i=0;i<fileArray.length;i++)
{
    let buffercontent=fs.readFileSync(fileArray[i]);
    content+=buffercontent+"\r\n";
}
//console.log(content);
let contentArray=content.split("\r\n");
let isScontains=optionArr.includes("-s");
if(isScontains)
{
    for(let i=1;i<contentArray.length;i++)
    {
        if(contentArray[i]=="" && contentArray[i-1]=="")
        {
            contentArray[i]=null;
        }
        else if(contentArray[i]=="" && contentArray[i-1]==null)
        {
            contentArray[i]=null;
        }
    }
    let tempArray=[];
    for(let i=0;i<contentArray.length;i++)
    {
       
        if(contentArray[i]!=null)
        {
            tempArray.push(contentArray[i]);
        }
    }
    contentArray=tempArray;
    if(optionArr.length==1 && optionArr.includes("-s"))
    {
        console.log(contentArray.join("\n"));
    }
  
}

let isNcoitains=optionArr.includes("-n");
if(isNcoitains)
{
    for(let i=0;i<contentArray.length;i++)
    {
        contentArray[i]=`${i+1} ${contentArray[i]}`;
    }
    console.log(contentArray.join("\n"));
}

let isBcontains=optionArr.includes("-b");
let c=1;
if(isBcontains)
{
    for(let i=0;i<contentArray.length;i++)
    {
        if(contentArray[i]!="")
        {
            contentArray[i]=`${c} ${contentArray[i]}`;
            c++;
        }
    }
    console.log(contentArray.join("\n"));
}