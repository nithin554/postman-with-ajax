function postman(){
    var url = $('#address').val()
    var meth = $('#method').val()
    if(meth == 'GET'){
        $.ajax({
            type: "GET",
            url: url,
            success : function(data){
                $('#console').val(JSON.stringify(data));
            },
            error : function(e){
                console.log(e);
                $('#console').val("Status Code : " + e.status + " : " + e.error);
            }
        });
    }
    if(meth == 'POST'){
        var postData = $('#dataconsole').val()
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: url,
            data: postData,
            dataType: 'json',
            success : function(data){
                alert("Success");
            },
            error : function(e){
                //console.log(e);
                alert("Error occured while adding data")
            }
        });
    }
    if(meth == 'PUT'){
        var putData = $('#dataconsole').val()
        $.ajax({
            type: "PUT",
            contentType: "application/json",
            url: url,
            data: putData,
            dataType: 'json',
            success : function(data){
                alert("Data modified successfully")
            },
            error : function(e){
                console.log(e);
                if(e.status===200){
                    alert("Data modified successfully");
                }
                else{
                    alert("Error occured while modifying data")
                }
            }
        });
    }
    if(meth == 'DELETE'){
        $.ajax({
            type: "DELETE",
            url: url,
            success : function(data){
                alert("Deleted");
            },
            error : function(e){
                alert("Error occured while deleting data")
            }
        });
    }
}