$(document).ready(function(){
    $.ajax({
        url : "../Php/ADreport.php",
        dataType: "json",
        success:function(response){
            console.log(response);
            if(response.length){
                response.forEach(element => {
                    //console.log(element);
                    var rollnodiv = document.createElement("div");
                    var rollnotext = document.createTextNode(element.rollno);
                    rollnodiv.appendChild(rollnotext);
                    document.getElementById('rollnocolumn').appendChild(rollnodiv);
                    
                    //console.log(element.raised);
                    
                    var blockdiv = document.createElement("div");
                    var blocktext = document.createTextNode(element.blockno);
                    blockdiv.appendChild(blocktext);
                    document.getElementById('blockcolumn').appendChild(blockdiv);
                    
                    
                    var roomnodiv = document.createElement("div");
                    var roomnotext = document.createTextNode(element.roomno);
                    roomnodiv.appendChild(roomnotext);
                    document.getElementById('roomnocolumn').appendChild(roomnodiv);

                    var reportdiv = document.createElement("div");
                    var reporttext = document.createTextNode(element.report);
                    reportdiv.appendChild(reporttext);
                    document.getElementById('reportcolumn').appendChild(reportdiv);

                });
            }
            else{
                alert("No Reports Found");
                window.location = 'ADdashboard.html';
            }
        },

        error:function(xhr,status,error){
            console.error(error);
        }
    })
})

function clearall(){
    $.ajax({
        url : "../Php/clearall.php",
        datatype:"json",
        success : function(Jsonresponse){
            console.log(Jsonresponse);
            response = JSON.parse(Jsonresponse)
            if(response.status && response.status.trim() == 'true'){
                alert("All reports cleared");
                window.location = "ADdashboard.html";
            }
            else{
                alert("Error occured");
            }
        },
        error : function(xhr,error,status){
            console.log(error);
        }
    })
}