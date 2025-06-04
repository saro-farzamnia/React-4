import { useState } from "react"
const FormOrigin = () => {
    const [form,setForm]=useState({
        name:"",
        lastName:"",
        gender:"male",
        role:"user",
        rules:false
    })
    const onChangeHandler=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        if (name === "rules") {
            setForm(form=>({...form,rules : !form.rules}))            
        }else{
            setForm(form=>({...form,[name] : value}))
        }
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        console.log(form)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Name" name="name" value={form.name} onChange={onChangeHandler} />
        <input type="text" placeholder="last Name" name="lastName" value={form.lastName} onChange={onChangeHandler} />

        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="male" value="male" onChange={onChangeHandler} checked={"male"=== form.gender} />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="female" value="female" onChange={onChangeHandler} checked={"female"=== form.gender} />
        <label htmlFor="other">Other</label>
        <input type="radio" name="gender" id="other" value="other" onChange={onChangeHandler} checked={"other"=== form.gender} />

        <select value={form.role} name="role" onChange={onChangeHandler}>
            <option value="user">User</option>
            <option value="client">Client</option>
            <option value="writer">Writer</option>
        </select>

        <input type="checkbox" name="rules" onChange={onChangeHandler} checked={form.rules} />

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FormOrigin
