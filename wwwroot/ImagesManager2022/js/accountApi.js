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

function LOGOUT(userId, successCallBack, errorCallBack){
    $.ajax({
        url: apiAccountBaseURL + `/logout/${userId}`,
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function GET_USER(id, successCallback, errorCallback){
    $.ajax({
        url: apiAccountBaseURL + `/index/${id}`,
        type: 'GET',
        success: (data) => { successCallback(data) },
        error: function (jqXHR) { errorCallback(jqXHR.status) }
    });
}

function MODIFY(modificationInfo, successCallback, errorCallback){
    console.log(modificationInfo)
    $.ajax({
        url: apiAccountBaseURL + `/modify`,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(modificationInfo.account),
        headers:{
            authorization : modificationInfo.token.Access_token
        },
        success: (data) => { successCallback(data) },
        error: function (jqXHR) { errorCallback(jqXHR.status) }
    });
}


