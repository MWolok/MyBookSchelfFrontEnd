import { useState } from "react";
import React from "react";
import SignUpmodel from "../../models/SignUpmodel";

export const Signup = ()=>{
    const [userNameOrEmail, setUserNameOrEmail] = useState("");
	const [password, serPassword ] = useState("");
async function logIn() {
    const url: string ="";
    if(userNameOrEmail !=='' && password!==''){
        const logInModel: SignUpmodel = new SignUpmodel(userNameOrEmail,
            password);
            const requestOp = {
                method: "POST",
                headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				  },
                  body: JSON.stringify(logInModel)
                
            };
            const log = await fetch(url,requestOp);
            if(!log.ok){
                throw new Error("Somthing wnt wrong")
            }const responseJson = await log.json();
            console.log(responseJson);
            setUserNameOrEmail('');
            serPassword('');
    
}

    
}
return();

}