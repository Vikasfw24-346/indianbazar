// import logo from './logo.svg';
// import './App.css';
 

//5. Complex Components & Splitting //4. Complex Components & Splitting(ListIte
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Subheader from "./components/Layout/Subheader";
import { useState } from "react";

const App =()=> {
  const [cartItems, setCartItems]=useState([])
  const [eventQueue, setEventQueue]=useState({
    id:"",
    type:""
  })

  const handleAddItem = item =>{
    let items = [...cartItems]
    // let index=item.find
    let index=items.findIndex(i=> i.id === item.id)
    if(index>-1){
      items[index]=item
    } 
    else{
      items.push(item)
    }
    setCartItems([...items])
    // setCartItems(cartItems+1)
  }

  const handleRemoveItem =item=>{
    // setCartItems(cartItems-1)
    let items = [...cartItems]
    let index=items.findIndex(i=> i.id === item.id)
    if(items[index].quantity === 0){
      items.splice(index,1)
    }
    else{
      items[index]=item
    }
    setCartItems([...items])
  }

  // type === -1, decrease
  // type === 1, increase
  const handleEventQueue = (id, type) => {
    // console.log({id, type})
    setEventQueue({
      id,
      type
    })
  }

  return (
    <div>
      <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
      <Subheader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}/>
    </div>
  );
}
export default App;


// //4. //3.Passing data using Props (ListItem.js)
// import ListItem from "./components/ListItem";
// const App=()=> {
//   return (
//     <div>
//       {/* <h1>Hello World</h1> */}
//       <ListItem data={{
//          title: "Title of the Item-1",
//          price: 450,
//          discountedPrice:341,
//          thumbnail: "jip1.jpg"
//        }}></ListItem>
//       <ListItem data={{discountedPrice:520,
//         title: "Title of the Item-2",
//         price: 600,
//         discountedPrice:560,
//         thumbnail: "jip1.jpg"
//       }}
//         ></ListItem>
//     </div>
     
//   );
// }
// export default App;

//3. add ListItem || 1. static Data in components/Styling Components (ListItem.js)|| 2. Dynamic Data in components(ListItem.js)
// import ListItem from "./components/ListItem";
// const App=()=> {
//   return (
//     <div>
//       {/* <h1>Hello World</h1> */}
//       <ListItem ></ListItem>
//     </div>
     
//   );
// }
// export default App;

//2. smallest react element/alternet way some time jsx is not needed for development
// ()===>this is JSX way of react
// const App=()=> {
//   return (
//     <div>Hello World</div>
//   );
// }
// export default App;

//()==>alternet way JSx/ without JSX
// import React from "react";
// const App=()=> {
//   return React.createElement('div',{
//     className:"dummyClass",
//     id:"container"
//   },React.createElement('h1',{},"Mayank Tripathi"))
// }
// export default App;

//1. We can use that as a boilerplate by using react code
// const App=()=> {
//   return (
//     <div>Hello World</div>
//   );
// }
// export default App;