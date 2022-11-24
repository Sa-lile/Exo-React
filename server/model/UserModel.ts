import Database from '../conf/DatabaseConf';

class UserModel {
	public static async selectUserByEmail(email: string) {
		const db = Database.pool.promise();
		let query = 'SELECT * FROM user WHERE email = ?';
		const [rows, fields] = await db.execute(query, [email]);
		if (Array.isArray(rows) && rows.length === 1) {
			return rows[0];
		} else {
			return rows;
		}
	}

	public static async Register(name: string, email: string, telephone: string, password: string) {
		const db = Database.pool.promise();
        let query = 'INSERT INTO `user` (`name`, `email`, `telephone`, `password`) VALUES ( ?, ?, ?, ?);';
		return new Promise((resolve, reject) => {
			db.execute(query, [name, email, telephone, password]).then( res => {
				resolve(true)
			}).catch( err => {
				resolve(false)
			});
		})
	}
	public static async List() {
		const db = Database.pool.promise();
		// let query = 'INSERT INTO user (`name`, `password`, `email`, `telephone`) VALUES ( ?, ?, ?, ?);'; 
		let query = 'SELECT * FROM user';
		const [rows, fields] = await db.execute(query);
		return rows;
	}
}

export = UserModel;

   