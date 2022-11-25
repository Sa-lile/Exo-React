import { Database } from '../conf/DatabaseConf';

class UserModel {
	public static async selectUserByEmail(email: string) {
		let query = 'SELECT * FROM user WHERE email = ?';
		const [rows, fields] = await Database.execute(query, [email]);
		if (Array.isArray(rows) && rows.length === 1) {
			return rows[0];
		} else {
			return rows;
		}
	}

	public static async Register(name: string, email: string, telephone: string, password: string, salt: string) {
		let query = 'INSERT INTO `user` (`name`, `email`, `telephone`, `password`, `salt`) VALUES ( ?, ?, ?, ?, ?);';
		return new Promise((resolve, reject) => {
			Database.execute(query, [name, email, telephone, password, salt])
				.then((res) => {
					resolve(true);
				})
				.catch((err) => {
					console.log( err )
					resolve(false);
				});
		});
	}
	public static async List() {
		// let query = 'INSERT INTO user (`name`, `password`, `email`, `telephone`) VALUES ( ?, ?, ?, ?);';
		let query = 'SELECT `name`, `email`, `telephone` FROM user';
		const [rows, fields] = await Database.execute(query);
		return rows;
	}
}

export = UserModel;
