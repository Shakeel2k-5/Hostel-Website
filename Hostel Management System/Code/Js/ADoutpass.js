var i = 0
$(document).ready(function(){
    nextrequest();
})

function nextrequest(){
    $.ajax({
        url :"../Php/ADoutpass.php",
        dataType:"json",
        success: function(response){
            if(response.length){
                if(i<response.length && response[i].accepted != 1 && response[i].cancelled != 1){
                    console.log(response[i]);
                    $("#requestname").text(response[i].name);
                    $("#requestrollno").text(response[i].rollno);
                    $("#requestdod").text(response[i].dod);
                    $("#requestdor").text(response[i].dor);
                    $("#requestpurpose").text(response[i].purpose);
                }
            }
            else{
                alert("All records accessed");
                window.location = 'ADdashboard.html';
            }
        },
        error : function(xhr,status,error){
            console.log(error);
        }
    })
}

function accepted(){
    var requestrollno = document.getElementById('requestrollno').innerHTML;
    var requestdod = document.getElementById('requestdod').innerHTML;
    console.log(requestrollno);
    $.ajax({
        url : "../Php/accepted.php",
        data : {requestrollno : requestrollno , requestdod:requestdod},
        dataType : 'json',
        success : function(response){
            console.log(response);
            if(response.status && response.status.trim() === "true"){
                alert("Request Approved");
            }
            else{
                alert("Error Occured");
            }
        }
    })
    i++;
    nextrequest();
}

function rejected(){
    var requestrollno = document.getElementById('requestrollno').innerHTML;
    var requestdod = document.getElementById('requestdod').innerHTML;

    console.log(requestrollno);
    $.ajax({
        url : "../Php/cancelled.php",
        data : {requestrollno : requestrollno , requestdod:requestdod},
        dataType : 'json',
        success : function(response){
            console.log(response);
            if(response.status && response.status.trim() === "true"){
                alert("Request Declined");
            }
            else{
                alert("Error occured");
            }
        }
    })
    i++;
    nextrequest();
}

function acceptall(){
    $.ajax({
        url : "../Php/acceptall.php",
        dataType : 'json',
        success : function(response){
            console.log(response);
            if(response.status && response.status.trim() === "true"){
                alert("All requests approved");
                window.location = 'ADdashboard.html';
            }
            else{
                alert("Error occured");
            }
        }
    })
}
