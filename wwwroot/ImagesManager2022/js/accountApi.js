const accountBaseURL = "http://localhost:5000/accounts";
const accountApiBaseURL = "http://localhost:5000/api/accounts";
const tokenURL = "http://localhost:5000/token"; 

function ACCOUNT_HEAD(successCallBack, errorCallBack) {
    $.ajax({
        url: accountApiBaseURL,
        type: 'HEAD',
        contentType: 'text/plain',
        complete: request => { successCallBack(request.getResponseHeader('ETag')) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function LOGIN(data, successCallBack, errorCallBack){
    $.ajax({
        url: tokenURL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function REGISTER(data, successCallBack, errorCallBack){
    $.ajax({
        url: accountBaseURL + '/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function VERIFY(data, successCallBack, errorCallBack){
    $.ajax({
        url: accountBaseURL + `/verify?id=${data.Id}&code=${data.Code}`,
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function LOGOUT(userId, successCallBack, errorCallBack){
    $.ajax({
        url: accountBaseURL + `/logout/${userId}`,
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function GET_USER(id, successCallback, errorCallback){
    $.ajax({
        url: accountBaseURL + `/index/${id}`,
        type: 'GET',
        success: (data) => { successCallback(data) },
        error: function (jqXHR) { errorCallback(jqXHR.status) }
    });
}

function MODIFY(modificationInfo, successCallback, errorCallback){
    $.ajax({
        url: accountBaseURL + `/modify`,
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

function REMOVE(deleteInfo, successCallback, errorCallback){
    $.ajax({
        url: accountBaseURL + `/remove/${deleteInfo.userId}`,
        type: 'GET',
        headers:{
            authorization : deleteInfo.token.Access_token
        },
        success: (data) => { successCallback(data) },
        error: function (jqXHR) { errorCallback(jqXHR.status) }
    });
}


