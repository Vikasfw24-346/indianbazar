// import Products from "./components/Products/Products";
// import Header from "./components/Layout/Header"
// import Subheader from "./components/Layout/Subheader";
// import { useState } from "react";

// const App = () => {
//   const [cartItems, setCartItems] = useState([])
//   const [eventQueue, setEventQueue] = useState({
//     id: "",
//     type: ""
//   })

//   const handleAddItem = item => {
//     let items = [...cartItems]
//     let index = items.findIndex(i => i.id === item.id)
//     if(index > -1) {
//       items[index] = item
//     }
//     else {
//       items.push(item)
//     }
//     setCartItems([...items])
//     // setCartItems(cartItems + 1)
//   }

//   const handleRemoveItem = item => {
//     let items = [...cartItems]
//     let index = items.findIndex(i => i.id === item.id)
//     if(items[index].quantity === 0) {
//       items.splice(index, 1)
//     }
//     else {
//       items[index] = item
//     }
//     setCartItems([...items])
//     // setCartItems(cartItems - 1)
//   }

//   // type === -1, decrease
//   // type === 1, increase
//   const handleEventQueue = (id, type) => {
//     setEventQueue({
//       id,
//       type
//     })
//   }
//   return (
//     <div>
//       <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
//       <Subheader/>
//       <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>
//     </div>
//   );
// }

// export default App;


// import Products from "./components/Products/Products";
// import Header from "./components/Layout/Header"
// import Subheader from "./components/Layout/Subheader";
// import { Switch, Route, Redirect } from "react-router-dom";
// import AuthIndex from "./components/Auth";
// import { useEffect } from "react";
// import { checkIsLoggedIn } from "./actions/auth";
// import { useDispatch, useSelector } from "react-redux";

// const App = () => {
//   const dispatch = useDispatch()
//   const authState = useSelector(state => state.auth)

//   useEffect(() => {
//     dispatch(checkIsLoggedIn(() => {}))
//   }, [])

//   return (
//     <div>
//       <Header/>
//       <Subheader/>
//       <Switch>
//         {
//           !authState.idToken &&
//           <Route path="/:type(login|signup)" exact>
//             <AuthIndex/>
//           </Route>
//         }
//         <Redirect to="/" from="/login"/>
//         <Redirect to="/" from="/signup"/>
//         <Route path="/404" exact>
//           <h1>Not Found!</h1>
//         </Route>
//         <Route path="/:category?" exact>
//           <Products />
//         </Route>
//         <Redirect to="/404"/>
//       </Switch>
//     </div>
//   );
// }

// export default App;




import Products from "./components/Products/Products";
import Header from "./components/Layout/Header"
import Subheader from "./components/Layout/Subheader";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthIndex from "./components/Auth";
import { useEffect } from "react";
import { checkIsLoggedIn } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)

  useEffect(() =>{
    dispatch(checkIsLoggedIn(() =>{}))
  },[])
  return (
    <div>
      <Header/>
      <Subheader/>
      <Switch>
        {
          !authState.idToken &&
          <Route path="/:type(login|signup)" exact>
            <AuthIndex/>
          </Route>
        }
        <Redirect to="/" from="/login"/>
        <Redirect to="/" from="/signup"/>
        <Route path="/404" exact>
          <h1>Not Found!</h1>
        </Route>
        <Route path="/:category?" exact>
          <Products />
        </Route>
        <Redirect to="/404"/>
      </Switch>
    </div>
  );
}

export default App;





// import Products from "./components/Products/Products";
// import Header from "./components/Layout/Header"
// import Subheader from "./components/Layout/Subheader";
// import { Switch, Route} from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Subheader/>
//       <Switch>
//         <Route path="/:category?" exact>
//           <Products/>
//         </Route>
//       </Switch>
//     </div>
//   );
// }
// export default App;

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/login" element={<Login/>}/>
//           <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
//           <Route path="*" element={<NotFound/>}/>
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }


// import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import '../styles/global.css'

// import Layout from '../containers/Layout'
// import Home from '../pages/Home'
// import Login from '../containers/Login'
// import RecoveryPassword from '../containers/RecoveryPassword'
// import NotFound from '../pages/NotFound'

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route exac