const ImagesRepository = require('../models/imagesRepository');
const UsersRepository = require('../models/usersRepository');
const TokenManager = require('../tokenManager');
module.exports =
    class ImagesController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext, new ImagesRepository(), false, true); // todo pas d'acces anonyme
        }

        userMustBeVerified(){
            let user = TokenManager.find(this.HttpContext.req.headers["authorization"]);
            if(!new UsersRepository().isVerified(user.UserId)){
                this.HttpContext.response.unverifiedUser();
                return false;
            }
            return user;
        }
        post(data) {
            let user = this.userMustBeVerified();
            if(user){
                if(user.UserId == data.UserId){
                    super.post(data);
                }else{
                    this.HttpContext.response.unAuthorized();
                }
            }
        }
        put(data) {
            let user = this.userMustBeVerified();
            if(user){
                if(user.UserId == data.UserId){
                    super.put(data);
                }else{
                    this.HttpContext.response.unAuthorized();
                }
            }
        }
        remove(id) {
            let user = this.userMustBeVerified();
            if(user){
                if(user.UserId == new ImagesRepository().get(id).UserId){
                    super.remove(id);
                }else{
                    this.HttpContext.response.unAuthorized();
                }
            }
        }
    }