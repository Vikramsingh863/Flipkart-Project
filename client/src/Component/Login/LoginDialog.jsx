import { Dialog, TextField, Box, Typography, Button, styled } from "@mui/material"
import { useState, useContext } from "react"
import { Datacontext } from "../../context/DataProvider"
import { authenticateSignup } from "../../Service/Api"
import { authenticateLogin } from "../../Service/Api"
const Component = styled(Box)`
 height:70vh;
 width:90vh;
 `
const Wrapper = styled(Box)`
 display:flex;
 flex-direction:column;
 padding:25px 35px;
 flex: 1;
 &>div, &>button, &>p{
    margin-top:9px;
 }
 `
const LoginButton = styled(Button)`
 text-transform:none;
 background:#FB641B;
 color: #fff;
 height:48px;
 border-radius: 2px;
 :hover{
    background:rgb(196, 85, 37);
    box-shadow: 1px 1px 3px black;
 }
 `
const RequestOtp = styled(Button)
    `
 text-transform:none;
 background:#fff;
 color: #2874f0;
 height:48px;
 border-radius: 2px;
 box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
 `
const Text = styled(Typography)`
 font-size:12px;
 color: #878787`
const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) center 85% no-repeat;
height:100%;
width:40%;
padding:45px 35px;

&>p, &h5{
    color:white;
    
}
 `
const CreateAccount = styled(Typography)`
font-size:12px;
 color: #2874f0;
 text-align: center;
 font-weight:600;
 cursor:pointer;
`

const LoginDialog = ({ Open, setOpen }) => {
    const { setAccount} = useContext(Datacontext)

    const accountinitialvalues = {
        login: {
            view: "login",
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendations'

        },
        signup: {
            view: "signup",
            heading: "looks like you're new here!",
            subHeading: 'sign up with your mobile number to get started'
        }
    }
    const signupInitialValues = {
        Firstname:"",
        Lastname:"",
        Username:"",
        Email:"",
        Password:"",
        Phone:"",
    }
    const loginInitialValues={
        Username:"",
        Password:""
    }
    const [CreateAcc, setCreateAcc] = useState(accountinitialvalues.login)
    const [signup, setSignup] = useState(signupInitialValues)
    const [Login, setLogin] = useState(loginInitialValues)
    const [ErrorNote, setErrorNote] = useState("")
    const handleClose = () => {
        setOpen(false)
        setCreateAcc(accountinitialvalues.login)
        setErrorNote("")
    }

    const AccountHandler = (props) => {
        setCreateAcc(accountinitialvalues.signup)
    }

    const oninputChange = (e) => {
        setSignup({...signup,[e.target.name]:e.target.value})

    }
    const onValueChange = (e) => {
        setLogin({...Login,[e.target.name]:e.target.value})
        console.log(Login)

    }
    
    const signupUser= async ()=>{
        let response= await authenticateSignup(signup)
        if(!response) return;
        handleClose();
        setAccount(signup.Username)
        
    }
    const loginuser= async ()=>{
        let response= await authenticateLogin(Login)
        if(response.data.err){
            setErrorNote("Please Enter valid username or password")
        }
        else{
            handleClose();
        setAccount(response.data.data.Username)
        }  
    }
    
    return (
        <Dialog open={Open} onClose={handleClose} paperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box className="d-flex h-100">


                    <Image>
                        <Typography variant="h5" style={{ color: "white" }}>{CreateAcc.heading}</Typography>

                        <Typography className="mt-2 " >
                            {CreateAcc.subHeading}</Typography>
                    </Image>
                    {CreateAcc.view === "login" ?
                        <Wrapper>
                            <TextField variant="standard" onChange={(e)=>onValueChange(e)} label="Enter Email/Mobile number" name="Username"/>
                            <TextField variant="standard" onChange={(e)=>onValueChange(e)} label="Enter Password" name="Password"/>
                            <Typography style={{color:"red", fontSize:"12px"}}>{ErrorNote}</Typography>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={()=>loginuser()} >Login</LoginButton>
                            <Typography className="text-center">OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <CreateAccount onClick={() => AccountHandler("signup")}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => oninputChange(e)} label="Enter Firstname" name="Firstname"/>
                            <TextField variant="standard" onChange={(e) => oninputChange(e)} label="Enter Lastname" name="Lastname"/>
                            <TextField variant="standard" onChange={(e) => oninputChange(e)} label="Enter Username" name="Username" />
                            <TextField variant="standard" onChange={(e) => oninputChange(e)} label="Enter Email" name="Email" />
                            <TextField variant="standard" onChange={(e) => oninputChange(e)} label="Enter Password" name="Password"/>
                            <TextField variant="standard" onChange={(e) => oninputChange(e)} label="Enter Phone" name="Phone"/>
                            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>

                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}
export default LoginDialog