var text='{"jobs":['+ '{"company":"apple" , "salary":"5000$"},'+'{"company":"google" , "salary":"4500$"},'+'{"company":"we" , "salary":"3000$"}]}';

var obj=JSON.parse(text);

for(var i=0;i<3;i++)
{
    document.getElementById("com"+(i+1)).innerHTML=obj.jobs[i].company;
    document.getElementById("sal"+(i+1)).innerHTML=obj.jobs[i].salary;
}
