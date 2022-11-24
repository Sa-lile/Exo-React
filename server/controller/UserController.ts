// import { route } from 'routes/profil';
import userRouter from '../routes/user';
import UserModel from '../model/UserModel';
import crypto from 'crypto'

class UserController {
	public static async Login(email: string, password: string) {
        
        var connexion = false

		const user: any = await UserModel.selectUserByEmail(email);
		if (user && user.password && user.salt ) {
            console.log("password", password)
            const salt_pass = password+user.salt
            console.log("salt_pass", salt_pass)
            const hash_password = await UserController.sha256(salt_pass)
            console.log("hash_password", hash_password)
            console.log("user.password", user.password)
            if ( user.password === hash_password) {
                connexion = true
            }
		}

        return connexion
	}

    public static async sha256(message: string) {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);                    
    
        // hash the message
        const hashmethod = crypto.createHash('sha256')
        const hashBuffer = hashmethod.update(message).digest()
    
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
    
        // convert bytes to hex string                  
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

	public static async Register(name: string, email: string, telephone: string, password: string) {
		//TODO generate random string of 10 characters letters and numbers
        const salt = UserController.generateRandomString(10)
        const salt_password = password+salt
        const hash_password = await UserController.sha256(salt_password)
        const result: any = await UserModel.Register(name, email, telephone, hash_password, salt);
		return result;
	}

    private static randomIntFromInterval(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    private static generateRandomString( length: number ) {
        var salt: string = ""
        const list_char = "}-azertyuiopqsd_fghjklmwxcvbn0123456789.+-#/@(){"
        for(var i = 0; i < length; i++) {
            let position_character = UserController.randomIntFromInterval(0, list_char.length-1)
            let character_chosen = list_char.charAt(position_character)
            salt += character_chosen
        }
        return salt
    }

	public static async List() {
		const result: any = await UserModel.List();
		return result;
	}
}

export = UserController;
