$(document).ready(function(){

    console.log("Report page executed")
    addEventListener('submit',function(e){
        e.preventDefault();
        //const username = sessionStorage.getItem('username');
        const name = document.getElementsByClassName('name')[0].value;
        const rollno = document.getElementsByClassName('rollno')[0].value;
        const blockno = document.getElementsByClassName('blockno')[0].value;
        const roomno = document.getElementsByClassName('roomno')[0].value;
        const report = document.getElementsByClassName('report')[0].value;

        $.ajax({
            type: 'GET',
            url: '../Php/report.php',
            data: {  name:name , rollno:rollno , blockno:blockno , roomno:roomno , report:report },
            datatype: 'json',
            success: function(response){
                var jsonResponse = JSON.parse(response);
                console.log(jsonResponse);
                if(jsonResponse.status && jsonResponse.status.trim() === "true"){
                    alert("Report raised");
                    document.getElementById('outpassform').reset();
                    window.location = 'home.html';
                }
                else{
                    alert("Your Report has been already Raised");
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