import { Link } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import background_img from "../img/background_img.jpg"


const BackgroundImg = styled.div`
    position: relative;
    height: 100vh;
    background: url('${background_img}') no-repeat;
    background-size: cover;
    z-index: 1;
`

const Letter = styled.div`
    display: flex;
    position: relative;
    top: 30%;
    height: 250px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    text-align: center;
    //border: 2px solid blue;
    font: 18px bold;
    color: white;
    letter-spacing: 2px;
    text-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
`
const Button = styled.button`
    margin-top: 10px;
    padding: 25px 50px;
    border-radius: 40px;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: 600;
    border: none;
    color: #505050;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &:hover{
        cursor: pointer;
    }
`

function Home() {
  return (
    <BackgroundImg>
        <Navbar />
        <Letter>
            <span>매일 아침 고민하지 마세요!</span>
            <span>다양한 MYCLO 유저들에게 오늘의 룩 추천을 받아보세요.</span>
            <Link to="/login">
                <Button>CREATE MYCLO</Button>
            </Link>
        </Letter>
    </BackgroundImg>
  );
}

export default Home;