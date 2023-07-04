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
const Circle = styled.div`
    position: absolute;
    width: 1000px;
    height: 1000px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    top: -100px;
    left: 800px;
    z-index: 2;

`
const Letter = styled.div`
    display: flex;
    height: 250px;
    margin-top: 200px;
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
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &:hover{
        cursor: pointer;
    }
`

function Home() {
  return (
    <>
    <BackgroundImg>
        <Circle />
        <Navbar />
        <div style={{display: "inline-flex"}}>
            <Letter>
                <span>오늘은 어떤 옷을 입어볼까요?</span>
                    <Button>내 옷장에서 옷 고르기</Button>
                    <Button>사람들에게 추천받기</Button>
            </Letter>
            
        </div>
        
    </BackgroundImg>

    </>
  );
}

export default Home;