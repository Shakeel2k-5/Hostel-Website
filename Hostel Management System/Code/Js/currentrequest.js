$(document).ready(function(){
    const key = sessionStorage.getItem('username');
    console.log("Current request executed");
    
    $.ajax({
        type: 'GET',
        url: '../Php/currentrequest.php',
        data: {key: key},
        dataType: 'json',
        success: function(response){
            // No need to parse response, it's already parsed as JSON
            console.log(response);
            var raised = document.getElementsByClassName('raised');
            var warden = document.getElementsByClassName('warden');
            var accepted = document.getElementsByClassName('accepted');
            var acceptedtext = document.getElementsByClassName('acceptedtext')[0];
            var wardentext = document.getElementsByClassName('wardentext')[0];

            if(response[0].raised === 1){
                raised[0].disabled = !raised[0].disabled;
                raised[0].checked = !raised[0].checked;
                console.log("Request raised");

                if(response[0].warden === 1){
                    document.getElementById('processbar1').style.backgroundColor = 'black';
                    warden[0].disabled = !warden[0].disabled;
                    warden[0].checked = !warden[0].checked;
                    
                    console.log("Warden Approved");
                    
                    if(response[0].accepted === 1){
                        document.getElementById('processbar2').style.backgroundColor = 'black';
                        accepted[0].disabled = !accepted[0].disabled;
                        accepted[0].checked = !accepted[0].checked;
                        console.log("Request Accepted");
                    }
            
                }

                if(response[0].cancelled === 1){
                    
                    document.getElementById('processbar1').style.backgroundColor = 'red';
                    wardentext.innerHTML='Warden Dissapproval';
                    warden[0].disabled = !warden[0].disabled;
                    warden[0].checked = !warden[0].checked;
                    
                    document.getElementById('processbar2').style.backgroundColor = 'red';
                    accepted[0].disabled = !accepted[0].disabled;
                    accepted[0].checked = !accepted[0].checked;
                    console.log("Request Cancelled");
                    acceptedtext.innerHTML='Request Rejected';
                    
                }
            }
        },
        error: function(xhr, status, error){
            console.log(error);
        }
    });
});
