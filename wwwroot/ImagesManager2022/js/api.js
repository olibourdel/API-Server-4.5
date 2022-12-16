const apiBaseURL = "http://localhost:5000/api/images";

function HEAD(successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'HEAD',
        contentType: 'text/plain',
        complete: request => { successCallBack(request.getResponseHeader('ETag')) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function GET_ID(id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        success: data => { successCallBack(data); },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function GET_ALL(successCallBack, errorCallBack, queryString = null) {
    let url = apiBaseURL + (queryString ? queryString : "");
    $.ajax({
        url: url,
        type: 'GET',
        success: (data, status, xhr) => { successCallBack(data, xhr.getResponseHeader("ETag")) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function POST(createInfo, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(createInfo.image),
        headers:{
            authorization : createInfo.token.Access_token
        },
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function PUT(modifyInfo, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + modifyInfo.image.Id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(modifyInfo.image),
        headers:{
            authorization : modifyInfo.token.Access_token
        },
        success: () => { successCallBack() },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}
function DELETE(deleteInfo, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + deleteInfo.id,
        type: 'DELETE',
        headers:{
            authorization : deleteInfo.token.Access_token
        },
        success: () => { successCallBack() },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}

function GET_USERID_WITH_IMAGES(successCallBack, errorCallBack){
    $.ajax({
        url: apiBaseURL + "?fields=UserId",
        type: 'GET',
        success: (data) => { successCallBack(data) },
        error: function (jqXHR) { errorCallBack(jqXHR.status) }
    });
}