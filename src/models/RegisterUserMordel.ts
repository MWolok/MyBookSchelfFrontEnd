class RegisterUserModel {
	name: string;
	password: string;
	username: string;
	email: string;


    constructor (name:string, password:string,username:string,email:string){
        this.name = name;
        this.password = password;
        this.username = username;
        this.email = email;
    }
}
export default RegisterUserModel;
