$(document).ready(function(){
    var key = sessionStorage.getItem("username");
    $.ajax({
        type:"GET",
        url:"../Php/history.php",
        data:{key:key},
        dataType:'json',
        success:function(response){
            console.log(response);
            if(response.length){
                response.forEach(element => {
                    //console.log(element);
                    var purposediv = document.createElement("div");
                    var purposetext = document.createTextNode(element.purpose);
                    purposediv.appendChild(purposetext);
                    document.getElementById('purposecolumn').appendChild(purposediv);
                    
                    //console.log(element.raised);
                    
                    var doddiv = document.createElement("div");
                    var dodtext = document.createTextNode(element.dod);
                    doddiv.appendChild(dodtext);
                    document.getElementById('dodcolumn').appendChild(doddiv);
                    
                    
                    var dordiv = document.createElement("div");
                    var dortext = document.createTextNode(element.dor);
                    dordiv.appendChild(dortext);
                    document.getElementById('dorcolumn').appendChild(dordiv);

                    if(element.accepted === 1){
                        var statusdiv = document.createElement("div");
                        var statustext = document.createTextNode("Approved");

                        var statusSpan = document.createElement("span");
                        statusSpan.style.fontWeight = "bold";
                        statusSpan.style.color = "#66cc77";
                        statusSpan.appendChild(statustext);
                        statusdiv.appendChild(statusSpan);
                        
                        document.getElementById('statuscolumn').appendChild(statusdiv);
                    }
                    
                    if(element.cancelled === 1){
                        var statusdiv = document.createElement("div");
                        var statustext = document.createTextNode("Rejected");

                        var statusSpan = document.createElement("span");
                        statusSpan.style.fontWeight = "bold";
                        statusSpan.style.color = "#d53355";
                        statusSpan.appendChild(statustext);
                        statusdiv.appendChild(statusSpan);
                        

                        document.getElementById('statuscolumn').appendChild(statusdiv);
                    }

                    if(element.cancelled === 0 && element.accepted === 0){
                        var statusdiv = document.createElement("div");
                        var statustext = document.createTextNode("Processing");

                        var statusSpan = document.createElement("span");
                        statusSpan.style.fontWeight = "bold";
                        statusSpan.style.color = "#388087";
                        statusSpan.appendChild(statustext);
                        statusdiv.appendChild(statusSpan);
                        

                        document.getElementById('statuscolumn').appendChild(statusdiv);
                    }

                

                });
            }
            else{
                alert("No Records Found");
                window.location = 'home.html';
            }
        },

        error:function(xhr,status,error){
            console.error(error);
        }
    })
})