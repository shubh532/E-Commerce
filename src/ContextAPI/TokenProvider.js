import React,{useState} from "react"
import TokenAPI from "./TokenAPI"


function TokenProvider(props){
    const [tokenId,settokenId]=useState(null)

    const isLogin=!!tokenId

    function LogIn(id){
        settokenId(id)
    }

    function LogOut(){
        settokenId(null)
    }

    const DefaultValues={
        tokenId:tokenId,
        isLogin:isLogin,
        LogIn:LogIn,
        LogOut:LogOut,
        mess:"Hi.."
    }

    return(
        <TokenAPI.Provider value={DefaultValues}> 
            {props.children}
        </TokenAPI.Provider>
    )

}


export default TokenProvider