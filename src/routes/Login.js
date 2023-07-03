import { Link } from "react-router-dom"
import styled from "styled-components"
import background_img from "../img/background_img.jpg"
import Navbar from "../components/Navbar"


const Background = styled.div`
    height: 100vh;
    background: url('${background_img}') no-repeat;
    background-size: cover;
`

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 600px;
    padding: 30px;
    margin-top: 50px;
    margin-inline: auto;
    justify-content: center;
    align-items: center;
    color: #505050;
    letter-spacing: 2px;
    border-radius: 50px;
    font: 18px bold;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
`
const SignUpPart = styled.div`
    display: flex;
    margin-top: 30px;
    padding: 20px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 0.8px solid #505050;

`
const Button = styled.button`
    display: flex;
    width: 100%;
    margin: 10px 0px;
    padding: 20px 100px;
    border-radius: 40px;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    background-color: #7B7B7B;
    color: white;
    font-size: 18px;
    border: none;
`
const InputBox = styled.input`
    display: flex;
    width: 350px;
    margin: 10px 0px 40px 0px;
    padding: 10px 20px;
    border-radius: 40px;
    background-color: white;
    border: 1px solid #7B7B7B;
`

function Login() {
  return (
    <Background>
        <Navbar />
        <LoginForm>
            <span>MYCLO</span>
            <form>
                <div>
                    <label for="id">EMAIL</label>
                    <InputBox id="id" />
                </div>
                <div>
                    <label for="password">PASSWORD</label>
                    <InputBox id="password" />
                </div>
                <Button>LOGIN</Button>
            </form>
            <SignUpPart>
                <span>MYCLO가 처음이신가요?</span>
                <Button>SIGN UP</Button>
            </SignUpPart>
        </LoginForm>
    </Background>
  );
}

export default Login;