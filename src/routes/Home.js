import { Link } from "react-router-dom"
import styled from "styled-components"
import background_img from "../img/background_img.jpg"

const Background = styled.div`
    height: 100vh;
    background: url('${background_img}') no-repeat;
    background-size: cover;
`

const Nav = styled.section`
    display: flex;
    height: 60px;
    //border: 2px solid black;
    color: white;
`
const NavHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 2px solid red;
    padding: 20px 50px;
    letter-spacing: 2px;
`
const NavMenu = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-evenly;
    align-items: center;
    //border: 2px solid blue;
    padding: 20px;
    letter-spacing: 2px;
    font-size: 14px;
`
const NavRight = styled.div`
    display: flex;
    margin-left: auto;
    width: 200px;
    justify-content: space-evenly;
    align-items: center;
    //border: 2px solid blue;
    padding: 20px;
    letter-spacing: 2px;
    font-size: 14px;
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
    border: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

function Home() {
  return (
    <Background>
        <Nav>
            <NavHome>
                <Link to="/">MYCLO</Link>
            </NavHome>
            <NavMenu>
                <Link to="/MyCloset">MY CLOSET</Link>
                <span>COLLECTION</span>
                <span>COMMUNITY</span>
                <span>FAQ</span>
            </NavMenu>
            <NavRight>
                <span>PROFILE</span>
                <span>MODE</span>
            </NavRight>
        </Nav>
        <Letter>
            <span>매일 아침 고민하지 마세요!</span>
            <span>다양한 MYCLO 유저들에게 오늘의 룩 추천을 받아보세요.</span>
            <Button>CREATE MYCLO</Button>
        </Letter>
    </Background>
  );
}

export default Home;