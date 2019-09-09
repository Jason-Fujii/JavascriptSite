//GLOBAL VARIABLES
currentspecial = 1;
customerType = "direct"; 

var myName = "Jason Fujii";
var classDescription = "JavaScript Class";
var theDate = "Last updated: Aug. 27, 2019";

function confirmlink(linkname) { 
   if (confirm('Are you sure you want to jump to ' + linkname + '?')) 
        location = linkname; 
} // end ConfirmLink()

function displayinfo()
{
   alert ('My name is ' +myName+ '. I am in: ' + classDescription +'. '+ theDate);
   
} // end displayInfo()

function displayspecial(){

       if (currentspecial == 1) {
          alert('The current special is #1');
       }
       if (currentspecial == 2)  {
          alert('The current special is #2');
       }
       if (currentspecial == 3 )  {
          alert('The current special is #3');
       }
       currentspecial = currentspecial + 1
       if (currentspecial > 3) {
         currentspecial = 1;
       }
   } // end DisplaySpecial

function changeType()
{
     if(customerType == "direct")
     {
         customerType = "advertising";
     }
     else if(customerType == "advertising")
     {
         customerType = "subscription";
     }
     else if(customerType == "subscription")
     {
         customerType = "direct";
     }
     alert("the Customer Type has been changed to: " + customerType);
}//end changeType()

function displayType()
{
     if(customerType == "direct")
     {
         alert("Buy Now! From this web page! My children need new shoes!");
     }
     else if(customerType == "advertising")
     {
         alert("Support our advertisers! Click on an ad, so I can make money!");
     }
     else if(customerType == "subscription")
     {
         alert("Renew your subscription today! My children need medicine!");
     }
}//end displayType()

function getName()
{
    var Name = prompt("Please enter your name", "");
    if(Name.length < 5)
        document.getElementById("name").innerHTML = "You have a short name";
    else if(Name.length < 10)
        document.getElementById("name").innerHTML = "You have a medium name";
    else
        document.getElementById("name").innerHTML = "You have a long name";
}//end getName()

function getAge()
{
    var age = prompt("Please enter your age", "");
    if(age < 18)
        document.getElementById("age").innerHTML = "You are a kid";
    else if(age < 50)
        document.getElementById("age").innerHTML = "You are an adult";
    else
        document.getElementById("age").innerHTML = "You are a senior citizen";
}//end getAge()