function validate(){
var Industry=document.getElementById("industry").value
var Consultancy=document.getElementsByName("consultancy")
var Amount=document.getElementById("amount").value
var Faculty=document.getElementById("faculty").value
var Output=document.getElementById("output")
document.getElementById("industry_").innerHTML=Industry;
document.getElementById("cons_").innerHTML=Consultancy;
document.getElementById("amount_").innerHTML=Amount;
document.getElementById("faculty_").innerHTML=Faculty;
var Per_faculty=Amount/Faculty;
document.getElementById("per_faculty_").innerHTML="Rs."+Per_faculty;
Output.style.display="block"
return false
}
