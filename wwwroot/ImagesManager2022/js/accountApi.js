const apiAccountBaseURL = "http://localhost:5000/accounts";

function LOGIN(data, successCallBack, errorCallBack){
    $.ajax({
        url: "http://localhost:5000/token",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function REGISTER(data, successCallBack, errorCallBack){
    $.ajax({
        url: apiAccountBaseURL + '/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function VERIFY(data, successCallBack, errorCallBack){
    $.ajax({
        url: apiAccountBaseURL + `/verify?id=${data.Id}&code=${data.Code}`,
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
