function validation() {
    var rollno = document.getElementById("rollno");
    var name = document.getElementById("name");
    var gender = document.getElementsByName("gender");
    var areaofintrest=document.getElementById("area of intrest")
    var aoi=document.getElementById("aoierror")
    var phone=document.getElementById("phone")
    var mail=document.getElementById("mail")
    var password=document.getElementById("password")
    var language=document.getElementsByName("language")
    var target=true;  

   
    //rollno  
    if(rollno.value=="")
    {
        rollno.style.border="2px solid red"
        target=false;
    }
    else{
        if(/^\d{2}[A-z]{3}\d{3}$/.test(rollno.value))
        {
           document.getElementById("rollerror").innerHTML=""
        }
        else{
            document.getElementById("rollerror").innerHTML="Rollno is in the form of 22ITR105."
            target=false;
        }
    }

    //name
    var pattern=/^[A-z]+$/g;
    if(name.value=="")
    {
        name.style.border="2px solid red"
        target=false;  

    }
    else{
    if(pattern.test(name.value))
    {
        document.getElementById("nameerror").innerHTML=""
    }
    else{
        document.getElementById("nameerror").innerHTML="Only characters are allowed."
        target=false;
    }
   }

     //gender
     var check=false;
     for(var i=0;i<gender.length;i++)
     {
      if(gender[i].checked)
      {
          
          check=true
          break
      }
     }
     if(!check)
     {
      document.getElementById("gendererror").innerHTML="&nbsp;required"
      target=false
     }
    else{
        document.getElementById("gendererror").innerHTML=""
    }
   //phone
   if(phone.value=="")
    {
        phone.style.border="2px solid red"
        target=false;  
    }
   else{
    if(/^[6789]\d{9}$/.test(phone.value))
    {
        document.getElementById("phoneerror").innerHTML=""
    }
    else{
        document.getElementById("phoneerror").innerHTML="The phone number must contain 10 digits."
        target=false;
    }
   }

   //mail
    if(mail.value=="")
    {
        mail.style.border="2px solid red"
        target=false;  
    }
    else{
        if(/^[a-z]+[.]\d{2}[a-z]{2,3}@[a-z]{5}[.][a-z]{3}([.][a-z]{2,3})?$/.test(mail.value))
        {
            document.getElementById("mailerror").innerHTML=""
        }
        else{
            document.getElementById("mailerror").innerHTML="Other than Kongu Mail, it is not allowed."
            target=false;
        }
    }

    //password
    if(password.value=="")
    {
        password.style.border="2px solid red"
        target=false;  
    }
    else{
        if(/\w{8,16}/.test(password.value))
        {
            document.getElementById("passworderror").innerHTML=""
           
        }
        else{
            document.getElementById("passworderror").innerHTML="it must be 8-16 characters"
            target=false;
        }
    }

   
    //area of intrest
   if(areaofintrest.value=="")
   {
          aoi.innerHTML="&nbsp;required";
          target=false;  

   }
  else{
      aoi.innerHTML="";
   }
   
    //language
    var c=false;
    for(var i=0;i<language.length;i++)
    {
        if(language[i].checked)
        {
            c=true
            break;
        }
    }
    if(!c){
        document.getElementById("leo").innerHTML="&nbsp;required"
        target=false
    }   
    else{
        document.getElementById("leo").innerHTML=""
    }
    
 

   
   //submit
   if(target==false)
   {
        return false;
   }
   else{
    document.getElementById("form_action").action="sucess.html"
   }
    
}

 //show password
 function showpass()  
 {   
       if(password.type=="password")
         password.type="text"
       else 
         password.type="password"
}

function focusinput(x)
{

    x.style.border="1px solid black"

    
}