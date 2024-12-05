
import React, { useState } from "react";
import { API_URL } from '../../data/apiPath'

const Login = ({ showWelcomeHandler }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const LoginHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      if (response.ok) {
        alert('Login Success')
        setEmail("")
        setPassword("")
        localStorage.setItem('loginToken', data.token) //storing the token from the data into localhost , token will be generated whenever the vendor logs in
        showWelcomeHandler()

        //getting vendorid from the database when we log in
        const vendorId = data.vendorId

        console.log("checking for vendorId: ", vendorId);

        //assigning the above vendorid to this api path dynamically
        const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)

        //storing vendor response in vendorData
        const vendorData = await vendorResponse.json()

        //if vendor response is successfully got then the vendor firm id from vendor data is stored
        if (vendorResponse.ok) {
          const vendorFirmId = vendorData.vendorFirmId
          const vendorFirmName = vendorData.vendor.firm[0].firmName
          console.log("my firm name is", vendorFirmName);
          //storing the firm id automatically whenever vendor gets logged in
          localStorage.setItem('firmId', vendorFirmId)
          localStorage.setItem('firmName', vendorFirmName)
        }
             window.location.reload()
      } else {
        throw new Error(data.message || 'Login failed')
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="loginSection">
      {loading ? (
        <div className="loadingIndicator"><h4>Loading...</h4></div>
      ) : (
        <form className="authForm" onSubmit={LoginHandler}>
          <h3>Vendor Login</h3>
          <label>Email</label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          <br />
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          <br />
          <div className="btnSubmit">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { API_URL } from '../../data/apiPath'

// const Login = ({ showWelcomeHandler }) => {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [loading, setLoading] = useState(false)

//   const LoginHandler = async (e) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       const response = await fetch(`${API_URL}/vendor/login`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       })

//       const data = await response.json()
//       if (response.ok) {
//         alert('Login Success')
//         setEmail("")
//         setPassword("")
//         localStorage.setItem('loginToken', data.token) //storing the token from the data into localStorage, token will be generated whenever the vendor logs in
//         showWelcomeHandler()

//         //getting vendorid from the database when we log in
//         const vendorId = data.vendorId

//         console.log("checking for vendorId: ", vendorId);

//         //assigning the above vendorid to this api path dynamically
//         const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)

//         //storing vendor response in vendorData
//         const vendorData = await vendorResponse.json()

//         //if vendor response is successfully got then the vendor firm id from vendor data is stored
//         if (vendorResponse.ok) {
//           const vendorFirmId = vendorData.vendorFirmId
//           const vendorFirmName = vendorData.vendor.firm[0].firmName
//           console.log("my firm name is", vendorFirmName);
//           //storing the firm id automatically whenever vendor gets logged in
//           localStorage.setItem('firmId', vendorFirmId)
//           localStorage.setItem('firmName', vendorFirmName)
//         }

//         // Refresh the page after setting the localStorage items
//         window.location.reload()
//       } else {
//         throw new Error(data.message || 'Login failed')
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Login Failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="loginSection">
//       {loading ? (
//         <div className="loadingIndicator">Loading...</div>
//       ) : (
//         <form className="authForm" onSubmit={LoginHandler}>
//           <h3>Vendor Login</h3>
//           <label>Email</label>
//           <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
//           <br />
//           <label>Password</label>
//           <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
//           <br />
//           <div className="btnSubmit">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;
