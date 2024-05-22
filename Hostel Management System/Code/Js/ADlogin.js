$(document).ready(function(){

    addEventListener('submit',function(e){
        e.preventDefault();
        const username = document.getElementsByClassName('username')[0].value;
        const password = document.getElementsByClassName('password')[0].value;

        this.sessionStorage.setItem('username',username);
        this.sessionStorage.setItem('password',password);

        $.ajax({
            type: 'GET',
            url: '../Php/login.php',
            data: { username : username , password : password},
            datatype: 'json',
            success: function(response){
                var jsonResponse = JSON.parse(response);
                console.log(jsonResponse);
                if(jsonResponse.status && jsonResponse.status.trim() === "true"){
                    //alert("Valid Login Credentials");
                    window.location = 'ADdashboard.html'
                }
                else{
                    alert("Invalid Login Credentials");
                }
            },
            error:function(xhr,status,error){
                console.error(xhr.responseText);
            }

        })
    })
})

