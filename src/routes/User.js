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
    overflow: hidden;

`
const Circle = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 45vh 30vh 45vh 0vh;
    width: 1000px;
    height: 1000px;
    justify-content: space-evenly;

    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    top: -13%;
    left: 55%;
    z-index: 2;
    color: #505050;
    letter-spacing: 2px;
    font-size: 30px;
    font-weight: 700;
`
const Letter = styled.div`
    display: flex;
    position: relative;
    top: 35vh;
    left: 35vh;
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
    <>
    <BackgroundImg>
        <Circle>
            <span>반갑습니다, user 님!</span>
            <span>오늘의 날씨는 맑음 입니다.</span>
            <span>현재 기온은 14.8도 입니다.</span>
        </Circle>
        <Navbar />
        <div style={{display: "inline-flex"}}>
            <Letter>
                <span>오늘은 어떤 옷을 입어볼까요?</span>
                    <Button>내 옷장에서 옷 고르기</Button>
                    <Button>사람들에게 추천받기</Button>
            </Letter>
            <Letter>

            </Letter>
        </div>
    </BackgroundImg>

    </>
  );
}

export default Home;