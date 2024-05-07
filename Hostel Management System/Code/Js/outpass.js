$(document).ready(function(){

    addEventListener('submit',function(e){
        e.preventDefault();
        //const username = sessionStorage.getItem('username');
        const name = document.getElementsByClassName('name')[0].value;
        const rollno = document.getElementsByClassName('rollno')[0].value;
        const dod = document.getElementsByClassName('dod')[0].value;
        const dor = document.getElementsByClassName('dor')[0].value;
        const purpose = document.getElementsByClassName('purpose')[0].value;

        $.ajax({
            type: 'GET',
            url: '../Php/outpass.php',
            data: {  name:name , rollno:rollno , dod:dod , dor:dor , purpose:purpose },
            datatype: 'json',
            success: function(response){
                var jsonResponse = JSON.parse(response);
                console.log(jsonResponse);
                if(jsonResponse.status && jsonResponse.status.trim() === "true"){
                    alert("Values Inserted");
                    document.getElementById('outpassform').reset();
                    window.location = 'home.html';
                }
                else{
                    alert("Your Request has been already Raised");
                    document.getElementById('outpassform').reset();
                    window.location = 'home.html';
                }
            },
            error:function(xhr,status,error){
                console.error(xhr.responseText);
            }

        })
    })
})