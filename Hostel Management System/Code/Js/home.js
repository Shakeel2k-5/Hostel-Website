$(document).ready(function(){

        const key = sessionStorage.getItem('username');
        console.log("Username :- ",key);
        
        // This request is to fetch the values of the user
        $.ajax({
            type: 'GET',
            url: '../Php/home.php',
            data: { key : key},
            datatype: 'json',
            success: function(response){
                var jsonResponse = JSON.parse(response);
                $("#rollno").text(jsonResponse[0].rollno);
                $("#name").text(jsonResponse[0].name);
                $("#branch").text(jsonResponse[0].branch);
                $("#year").text(jsonResponse[0].year);
                $("#block").text(jsonResponse[0].hostelblock);
                $("#roomno").text(jsonResponse[0].roomno);
                $("#district").text(jsonResponse[0].district);
                $("#phoneno").text(jsonResponse[0].phonenumber);
                $("#email").text(jsonResponse[0].email);
              },
            error:function(xhr,status,error){
                console.error(xhr.responseText);
            }

        })
        console.log("Values fetched in home.js");

        


    
})