import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import UserList from "./UserList";
import styled from "styled-components";
import { Collapse } from "reactstrap";

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email().required("Email is a required field"),
    password: yup.string().required("Password is a required field"),
    positions: yup.string(),
    terms: yup.boolean().oneOf([true], "Must agree to terms of service"),
})

const userList = [];

const Form = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        positions: "",
        terms: "",
      });

      const [errors, setErrors] = useState({
          name: "",
          email: "",
          password: "",
          positions: "",
          terms: "",
      });

      const [buttonDisabled, setButtonDisabled] = useState(true);

      const [post, setPost] = useState([]);

      useEffect(() => {
          formSchema.isValid(formState).then(valid => {
              setButtonDisabled(!valid);
          })
      }, [formState])

      const validateChange = event => {
        yup
          .reach(formSchema, event.target.name)
          .validate(event.target.value)
          .then(valid => {
            setErrors({
              ...errors, [event.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors, [event.target.name]: err.errors[0]
            });
          });
      };
      const formSubmit = event => {
        event.preventDefault();
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data);
            userList.push(formState);
            console.log("success", post);
            console.log("User List: ", userList)
    
            setFormState({
              name: "",
              email: "",
              password: "",
              positions: "",
              terms: "",
            });
          })
          .catch(err => {
            console.log(err.res);
          });
      };


      const inputChange = event =>{
          event.persist();
          const newData = {
              ...formState, [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
          };
          validateChange(event);
          setFormState(newData);
      }

      const ErrorMsg = styled.p`
      color: red;
      font-size: 10px;
      `

      const CurrentUsers = styled.h2`
      margin-top: 1%;
      `

      const UserWrapper = styled.div`
      width: 80%;
      margin: 2% auto 0 auto;
      border-top: 2px dashed black;
      `

      const NewUserButton = styled.button`
      margin-bottom: 1%;
      `


    return (
        <div>
            <NewUserButton id="userButton" onClick={toggle}>New User</NewUserButton>
            <Collapse isOpen={isOpen}>
            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="name">
                        <input 
                        placeholder="Name"
                        id="name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={inputChange}
                        />
                        {errors.name.length > 0 ? <ErrorMsg className="error">{errors.name}</ErrorMsg> : null}
                    </label>
                </div>

                <br/>

                <div>
                    <label htmlFor="email">
                        <input 
                        placeholder="Email"
                        id="email"
                        type="text"
                        name="email"
                        value={formState.email}
                        onChange={inputChange}
                        />
                        {errors.email.length > 0 ? <ErrorMsg className="error">{errors.email}</ErrorMsg> : null}
                    </label>
                </div>

                <br />

                <div>
                    <label htmlFor="password">
                        <input 
                        placeholder="Password"
                        id="password"
                        type="password"
                        name="password"
                        value={formState.password}
                        onChange={inputChange}
                        />
                        {errors.password.length > 0 ? <ErrorMsg className="error">{errors.password}</ErrorMsg> : null}
                    </label>
                </div>

                <br/>

                <div>
                    <label htmlFor="positions">
                        <select id="positions" name="positions" onChange={inputChange}>
                            <option value="" disabled selected>Select your Role</option>
                            <option value="Generic Programmer">Generic Programmer</option>
                            <option value="Lorem Ipsum Generator">Lorem Ipsum Generator</option>
                            <option value="Placeholder Role">Placeholder Role</option>
                            <option value="Food Buyer">Food Buyer</option>
                        </select>
                    </label>
                </div>

                <label htmlFor="terms">
                    <input 
                    id="terms"
                    type="checkbox"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                    />
                    Terms and Conditions
                </label>

                <br />

                <button disabled={buttonDisabled}>Submit</button>

            </form>
            </Collapse>
            <UserWrapper>
                <CurrentUsers>Current Users:</CurrentUsers>
                <UserList users={userList} />
            </UserWrapper>
        </div>
      );
}

export default Form;