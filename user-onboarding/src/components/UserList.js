import React, {useState} from "react";
import styled from "styled-components";


const UserList = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const UserGrid = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `
    const UserCard = styled.div`
    background: rgb(156, 175, 179);
    padding: 2%;
    width: 20%;
    margin: 2% 1%;
    border-radius: 10px;
    border: 2px solid black;
    &:hover {
        background: rgb(182, 202, 207);
    }
    `

    const Name = styled.p`
    font-weight: bold;
    font-size: 20px;
    `
    const Email = styled.p`
    font-style: italic;
    `
    const Pass = styled.span`
    text-decoration: underline;
    `
    const Pos = styled.p`
    text-decoration: underline;
    `


    return(
        <UserGrid>
            {props.users.map(user=>(
                <UserCard>
                    <Name>{user.name}</Name>
                    <Email>{user.email}</Email>
                    <p>Password: <Pass>{user.password}</Pass></p>
                    <Pos>{user.positions}</Pos>
                </UserCard>
            ))}
        </UserGrid>
    )
}

export default UserList;