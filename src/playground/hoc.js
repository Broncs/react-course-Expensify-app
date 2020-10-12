
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
  <div>
    <h1>Info</h1>
    <p> the indo is : {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) =>{
 return (props) => (
    <div>
    {props.isAdmin && <p>This is private indo. Please don't share!</p> }
      
      <WrappedComponent {...props}/>
    </div>
 )

}


const requireAuthentication = (WrappedComponent)=>{
  return (props)=>(
    <div>
     {props.isAuthenticated ? <WrappedComponent {...props}/> :
     <p>Please Log in to view the info!</p>}
      
    </div>
  )
}


const AuthInfo =  requireAuthentication(Info);


const AdminInfo= withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the details"/>, document.getElementById('app'))