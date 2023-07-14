import React, {useState} from 'react'

const FormData = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  })

  const [userArray, setUserArray] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data, [name]: value})
  }
  let {username, password} = data

  const handleChanged = () => {
    setUserArray([...userArray, {username, password}])
    console.log(userArray)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <center>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            UserName:
            <input
              type="text"
              autoComplete="off"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              autoComplete="off"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button style={{margin: '10px'}} onClick={handleChanged}>
            Submit
          </button>
          <button
            style={{margin: '10px'}}
            onClick={() => setData({username: '', password: ''})}
          >
            Reset all
          </button>
          <button style={{margin: '10px'}} onClick={() => setUserArray([])}>
            Reset Table
          </button>
        </form>
        <div className="table-data">
          <table border="1px solid" cellPadding="10px">
            <tr>
              <th>Name</th>
              <th>Password</th>
            </tr>
            {userArray.map((ele, index) => {
              return (
                <tr>
                  <td>{ele.username}</td>
                  <td>{ele.password}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </center>
  )
}

export default FormData
