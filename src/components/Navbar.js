import { Link } from "react-router-dom"
import styled from "styled-components"


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

function navbar() {
  return (
        <Nav>
            <NavHome>
                <Link to="/">MYCLO</Link>
            </NavHome>
            <NavMenu>
                <Link to="/mycloset">MY CLOSET</Link>
                <span>COLLECTION</span>
                <span>COMMUNITY</span>
                <span>FAQ</span>
            </NavMenu>
            <NavRight>
                <span>PROFILE</span>
                <span>MODE</span>
            </NavRight>
        </Nav>
  );
}

export default navbar;