import {useState} from "react"

const Form = () => {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [role,setRole]=useState("admin")
    const [gender,setGender]=useState("male")
    const [rules,setRules]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [webDesign,setWebDesign]=useState("frontEnd")

    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const lastNameHandler=(e)=>{
        setLastName(e.target.value)
    }
    const selectHandler=(e)=>{
        setRole(e.target.value)
    }
    const genderHandler=(e)=>{
        setGender(e.target.value)
    }
    const rulesHandler=(e)=>{
        setRules(e.target.value)
    }
    const emailHandler=(e)=>{
      setEmail(e.target.value)
    }
    const passwordHandler=(e)=>{
      setPassword(e.target.value)
    }
    const selectHandler2=(e)=>{
      setWebDesign(e.target.value)
    }
    const submitHandler=()=>{
      console.log({name,lastName,role,gender,rules,email,password,webDesign})
    }
  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={nameHandler} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={lastNameHandler} />
      <input type="email" placeholder="email" value={email} onChange={emailHandler} />
      <input type="password" placeholder="password" value={password} onChange={passwordHandler} />

      <select value={role} onChange={selectHandler}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="client">Client</option>
      </select>

      <select value={webDesign} onChange={selectHandler2}>
        <option value="frontEnd">FrontEnd</option>
        <option value="backEnd">BackEnd</option>
      </select>

      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="male" onChange={genderHandler} checked={gender} />
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="female" onChange={genderHandler} checked={gender} />
      <label htmlFor="other">Other</label>
      <input type="radio" name="gender" id="other" onChange={genderHandler} checked={gender} />
      
      <label htmlFor="low">I accept the rules</label>
      <input type="checkbox" id="low" checked={rules} onChange={rulesHandler} />

      <button onClick={submitHandler}>Submit Form</button>
    </div>
  )
}

export default Form
