export class {

    constructor(pool) {
        this.pool = pool;
    }

    async createAccount(account) {
        let checkIfUserExist = await this.pool("SELECT * FROM users WHERE email = $1",
            [account.email]);
        if (checkIfUserExist.rows.length === 0) {
            await this.pool("INSERT INTO users (name, last_name, email, phone_number, user_password, is_admin, verified) VALUES ($1, $2, $3, $4, $5, $6, $7)",
                [
                    account.firstName,
                    account.lastName,
                    account.email,
                    account.phoneNumber,
                    account.password,
                    account.isAdmin,
                    account.verified
                ]);
            return true;
        }
        return false
    }


}