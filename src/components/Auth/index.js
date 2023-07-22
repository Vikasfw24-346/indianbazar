import { Fragment, useEffect, useState } from "react"
import { NavLink, useHistory, useParams } from "react-router-dom"
import Loader from "../UI/Loader"
import { useDispatch } from "react-redux"
import { loginWithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/auth"

const AuthIndex = () => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    })
    const [loader, setLoader] = useState(false)
    const params = useParams()
    const dispatch =useDispatch()
    const history = useHistory()

    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() =>{
        return ()=>{
            setLoader(false)
            setDetails({
                email:"",
                password:""
            })
        }
    },[])
    const handleSubmission = e => {
        e.preventDefault();
        // console.log(details);
        if(params.type === "signup") {
            //signupWithEmailAndPassword();
            setLoader(true) 
            dispatch(signupWithEmailAndPassword(details, data =>{
                if(data.error){
                    console.log(data.error)
                    alert("Some error occurred")
                }
                else{
                    console.log("Successfully Signed up!")
                    history.replacer("/")
                }setLoader(false)
            }))
        }
        else if (params.type === "login") {
            setLoader(true)

                dispatch(loginWithEmailAndPassword(details, data => {
                    if(data.error) {
                        console.log(data.response)
                        alert(data?.response?.data?.error?.message||"Some error occurred")
                    }else{
                        console.log("Successfully Logged in!")
                        history.replacer("/")
                    }
                    setLoader(false)
                }))
            } 
        }
    

    return (
        <Fragment>
            <div className="auth-container">
                <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink exact to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink exact to={"/signup"}><h3>Signup</h3></NavLink>
                        
                        {/* <h3><h3>Login</h3></h3>
                        <h3><h3>Signup</h3></h3> */}
                    </div>
                    <form autoComplete={"off"} onSubmit={handleSubmission}>
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                value={details.email} 
                                onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter Password" 
                                value={details.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {params.type === "login" ? "Login" : "Signup"}
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
         { loader && <Loader/> }
        </Fragment>
    )
}

export default AuthIndex