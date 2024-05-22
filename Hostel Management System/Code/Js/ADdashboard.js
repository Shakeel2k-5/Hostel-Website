$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"../Php/ADdashboard.php",
        dataType:"json",
        success: function(response){
            console.log(response);
            var i =0;

            response.forEach(element => {
                if(i<8){
                    var rollnodiv = document.createElement("div");
                    var rollnotext = document.createTextNode(element.rollno);
                    rollnodiv.appendChild(rollnotext);
                    document.getElementById('rollnocolumn').appendChild(rollnodiv);

                    var purposediv = document.createElement("div");
                    var purposetext = document.createTextNode(element.purpose);
                    purposediv.appendChild(purposetext);
                    document.getElementById('purposecolumn').appendChild(purposediv);

                    var doddiv = document.createElement("div");
                    var dodtext = document.createTextNode(element.dod);
                    doddiv.appendChild(dodtext);
                    document.getElementById('dodcolumn').appendChild(doddiv);

                    var dordiv = document.createElement("div");
                    var dortext = document.createTextNode(element.dor);
                    dordiv.appendChild(dortext);
                    document.getElementById('dorcolumn').appendChild(dordiv);

                }

                i = i+1;
            });
        },
        error: function(xhr,ststus,error){
            console.log(error);
        }
    })
})