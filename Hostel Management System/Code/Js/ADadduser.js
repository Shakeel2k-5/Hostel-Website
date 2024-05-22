$(document).ready(function(){

    addEventListener('submit',function(e){
        e.preventDefault();
        const name = this.document.getElementsByClassName("name")[0].value;
        const rollno = this.document.getElementsByClassName("rollno")[0].value;
        const branch = this.document.getElementsByClassName("branch")[0].value;
        const year = this.document.getElementsByClassName("year")[0].value;
        const hostelblock = this.document.getElementsByClassName("block")[0].value;
        const roomno = this.document.getElementsByClassName("roomno")[0].value;
        const district = this.document.getElementsByClassName("district")[0].value;
        const phonenumber = this.document.getElementsByClassName("phonenumber")[0].value;
        const email = this.document.getElementsByClassName("email")[0].value;

        //console.log(name);
        $.ajax({
            type: 'GET',
            url: '../Php/ADadduser.php',
            data: {  name:name , rollno:rollno , branch:branch , year:year,hostelblock:hostelblock,roomno:roomno,district:district,phonenumber:phonenumber,email:email },
            datatype: 'json',
            success: function(response){
                var jsonResponse = JSON.parse(response);
                console.log(jsonResponse);
                //console.log(response);
                if(jsonResponse.status && jsonResponse.status.trim() === "true"){
                    alert("User created");
                    document.getElementById('adduserform').reset();
                }
                else{
                    alert("Error occured");
                    //document.getElementById('adduser').reset();
                }
            },
            error:function(xhr,status,error){
                console.error(xhr.error);
            }

        })
    })
})