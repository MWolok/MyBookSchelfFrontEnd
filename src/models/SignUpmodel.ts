class SignUpmodel{
    usernameOrEmail:string;
    password:string;
    constructor(usernameOrPassword:string, password:string){
        this.usernameOrEmail=usernameOrPassword;
        this.password=password;
    }
}
export default SignUpmodel