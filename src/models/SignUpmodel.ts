class SignUpmodel{
    userNameOrEmail:string;
    password:string;
    constructor(userNameOrPassword:string, password:string){
        this.userNameOrEmail=userNameOrPassword;
        this.password=password;
    }
}
export default SignUpmodel