import UserModel from "../model/UserModel"

class UserController {
    
    public static async Login( email: string, password: string ) {
        const user: any = await UserModel.selectUserByEmail(email);
        if ( user && user.password === password) {
            return true
        } else {
            return false
        }
    }

}

export = UserController