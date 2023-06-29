import { Link } from "react-router-dom"
import styled from "styled-components"
import MyCloset from "./MyCloset"

const Nav = styled.section`
    display: flex;
    height: 60px;
    border: 2px solid black;
`
const NavHome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid red;
    padding: 20px 50px;
    letter-spacing: 2px;
`
const NavMenu = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid blue;
    padding: 20px;
    letter-spacing: 2px;
    font-size: 14px;
`

function Home() {
  return (
    <Nav>
        <NavHome>
            <span>MYCLO</span>
        </NavHome>
        <NavMenu>
            <Link to="/MyCloset">MY CLOSET</Link>
            <span>COLLECTION</span>
            <span>COMMUNITY</span>
            <span>FAQ</span>
        </NavMenu>
    </Nav>
  );
}

export default Home;