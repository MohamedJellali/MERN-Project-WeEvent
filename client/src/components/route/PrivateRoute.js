import React from 'react'
import {Redirect, Route, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Alert } from "react-st-modal";


function PrivateRoute({ component : Component, ...rest}) {
    const history = useHistory();
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    if(!isAuth){
       
        return <Redirect to='/' />
    }
    return (
         <Route component={Component} {...rest}/> //rest= path nd render of the component 
    )
}

export default PrivateRoute
