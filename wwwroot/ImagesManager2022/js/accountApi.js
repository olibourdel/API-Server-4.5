const apiAccountBaseURL = "http://localhost:5000/api/accounts";

function LOGIN(data, successCallBack, errorCallBack){
    $.ajax({
        url: apiAccountBaseURL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
