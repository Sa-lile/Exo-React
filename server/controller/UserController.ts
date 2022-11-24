import UserModel from '../model/UserModel';

class UserController {
	public static async Login(email: string, password: string) {
		const user: any = await UserModel.selectUserByEmail(email);
		if (user && user.password === password) {
			return true;
		} else {
			return false;
		}
	}

	public static async Register(name: string, email: string, telephone: string, password: string) {
		const result: any = await UserModel.Register(name, email, telephone, password);
		return result;
	}

	public static async List() {
		const result: any = await UserModel.List();
		return result;
	}
}

export = UserController;
