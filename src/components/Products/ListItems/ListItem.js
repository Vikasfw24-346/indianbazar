// import { Fragment, useState } from "react"
// import AddToCartIcon from "../../../assets/icons/add_cart.svg"
// import Modal from "../../UI/Modal"

// const ListItem = ({ data }) => {
//     const [counter, setCounter] = useState(0)
//     const [showModal, setShowModal] = useState(false)

//     const increaseCounterByOne = event => {
//         event.stopPropagation()
//         setCounter(counter+1)
//     }

//     const decreaseCounterByOne = event => {
//         event.stopPropagation()
//         if(counter === 0) {
//             return;
//         }
//         setCounter(counter-1)
//     }

//     const handleModal = () => {
//         setShowModal(previousState => !previousState)
//     }

//     return (
//         <Fragment>
//             <div onClick={handleModal} className={"item-card"}>
//                 <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
//                 <div className={"item-card__information"}>
//                     <div className={"pricing"}>
//                         <span>₹{data.discountedPrice}</span>
//                         <small>
//                             <strike>₹{data.price}</strike>
//                         </small>
//                     </div>
//                     <div className={"title"}>
//                         <h3>{data.title}</h3>
//                     </div>
//                 </div>
//                 {
//                     counter < 1 ?
//                     <button className={"cart-add"} onClick={increaseCounterByOne}>
//                         <span>Add to Cart</span>
//                         <img src={AddToCartIcon} alt="Cart Icon"/>
//                     </button>
//                     :
//                     <div className="cart-addon">
//                         <button onClick={decreaseCounterByOne}><span>-</span></button>
//                         <span>{counter}</span>
//                         <button onClick={increaseCounterByOne}><span>+</span></button>
//                     </div>
//                 }
//             </div>
//             { showModal && 
//                 <Modal onClose={handleModal}>
//                     <div className="item-card__modal">
//                         <div className="img-wrap">
//                             <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
//                         </div>
//                         <div className="meta">
//                             <h3>{data.title}</h3>
//                             <div className={"pricing"}>
//                                 <span>₹{data.discountedPrice}</span>
//                                 <small>
//                                     <strike>₹{data.price}</strike>
//                                 </small>
//                             </div>
//                             <p>{data.description}</p>
//                             {
//                                 counter < 1 ?
//                                 <button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
//                                     <span>Add to Cart</span>
//                                     <img src={AddToCartIcon} alt="Cart Icon"/>
//                                 </button>
//                                 :
//                                 <div className="cart-addon card-addon__modal">
//                                     <button onClick={decreaseCounterByOne}><span>-</span></button>
//                                     <span>{counter}</span>
//                                     <button onClick={increaseCounterByOne}><span>+</span></button>
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 </Modal> 
//             }
//         </Fragment>
//     )
// }

// export default ListItem





import AddToCartIcon from "../../../assets/icons/add_cart1.png";
//import { useState } from "react"
import Modal from "../../UI/Modal"
import { Fragment, useState } from "react"


// const ListItem = ({ data, updateItemTitle }) => {
const ListItem = ({ data, onAdd, onRemove }) => {
    // const [counter, setCounter] = useState(0)
    const [showModal, setShowModal]= useState(false)

    const increaseCounterByOne = event => {
        event.stopPropagation()
        onAdd(data.id)
        // setCounter(counter+1) 
    } 

    const decreaseCounterByOne = event => {
        event.stopPropagation()
        onRemove(data.id);
        // if(counter === 0) {
        //     return;
        // }
        // if(counter ===1 ){
        //     onRemove(data.id);
        // }
        // setCounter(counter-1)
    }

    const handleModal=()=>{
        setShowModal(previousState => !previousState)
    }

    return (
        <Fragment>
            <div onClick={handleModal} className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>

            {/* 4.Updating the data */}
            {/* <button onClick={()=> updateItemTitle(data.id)}>Update the title</button> */}

            {
                data.quantity < 1 ?
                <button className={"cart-add"} onClick={increaseCounterByOne}>
                    <span>Add to Cart</span>
                    <img src={AddToCartIcon} alt="Cart Icon"/>
                </button>
                :
                <div className="cart-addon">
                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                    <span>{data.quantity}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>
            }
           </div>
           { showModal && 
                <Modal onClose={handleModal}>
                    {/* List Item Content! */}
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
                        </div>
                        <div className="meta">
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                    <span>₹{data.discountedPrice}</span>
                                <small>
                                     <strike>₹{data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
data.quantity < 1 ?
<button className={"cart-add card-add__modal"} onClick={increaseCounterByOne}>
<span>Add to Cart</span>
<img src={AddToCartIcon} alt="Cart Icon"/>
</button>
:
<div className="cart-addon card-addon__modal">
<button onClick={decreaseCounterByOne}><span>-</span></button>
<span>{data.quantity}</span>
<button onClick={increaseCounterByOne}><span>+</span></button>
</div>
}
                            </div>

                        </div>
                </Modal>
            }
        </Fragment>
    )
}

export default ListItem


// //4. add ListItem 
// // import AddToCartIcon from "../../../assets/icons/add_cart1.png";

// // //Use useState a function by react hook
// // //import { useState } from "react"

// // //4. Complex Components & Splitting
// // const ListItem = ({ data })=>{
// //     //console.log(data);
// //     // return <h2>List Item</h2>

// //     // ****7. useState() Hook/cart-addon
// //     // const [counter, setCounter]=useState(0)
// //     // const increaseCounterByOne =()=>{
// //     //     setCounter(counter+1);
// //     // }
// //     // const descreaseCounterByOne =()=>{
// //     //     if(counter<=0){
// //     //         return;
// //     //     }
// //     //     setCounter(counter-1);
// //     // }

// //     //6. Use useState a function by react hook
// //     // const [message, setMessage] = useState("Not added to the cart yet")
// //     // const handleClick=()=>{
// //     //     setMessage("Added to the cart!")
// //     //     console.log("Clicked",message)
// //     // }

// //     // 6. normal variables does not keep(render) trck to DOM element
// //     // let message = "Not added to the cart yet"
// //     // const handleClick=()=>{
// //     //     message="Added to the cart!"
// //     //     console.log("Clicked",message)
// //     // }
    
// //     return (
// //         <div className={"item-card"}>
// //             <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="Some title"/>
// //             <div className={"item-card__information"}>
// //                 <div className={"pricing"}>
// //                     <span>₹{data.discountedPrice}</span>
// //                     <small>   
// //                         <strike>{data.price}</strike>
// //                     </small>
// //                 </div>
// //                 <div className={"title"}>
// //                     <h3>{data.title}</h3>
// //                 </div>
// //             </div>

// //             {/* *******7. useState() Hook/cart-addon */}
// //             {/* <div className={"cart-addon"}>
// //                 <button onClick={descreaseCounterByOne}><span>-</span></button>
// //                 <span className={"counter"}>{counter}</span>
// //                 <button onClick={increaseCounterByOne}><span>+</span></button>
// //             </div> */}

// //             {/* 6. normal variables does not keep(render) trck to DOM element / Use useState a function by react hook*/}
// //             {/* <small className={"cart-message"}>{message}</small>
// //             <button className={"cart-add"} onClick={handleClick}> */}

// //             {/* 5. Handling Events in React */}
// //             {/* <button className={"cart-add"} onClick={()=> console.log("Clicked!")}> */}
// //             {/* <button className={"cart-add"} onClick={()=> console.log("Clicked", data)}> */}

// //             {/* //4. add ListItem**** */}
// //             <button className={"cart-add"} >

// //                 {/* this use for: 6.normal variables does not keep(render) trck to DOM element / Use useState a function by react hook */}
// //                 {/* 5. Handling Events in React */}
// //                 {/* //4. add ListItem****** */}
// //                 <span>Add to Card</span>
// //                 <img src={AddToCartIcon} alt="Cart Icon"/>
// //             </button>
// //         </div>
// //     )
    
// // }
// // export default ListItem







// // //3.Passing data using Props
// // const ListItem = ({ data })=>{
// //     //console.log(data);
// //     // return <h2>List Item</h2>
    
// //     return (
// //         <div className={"item-card"}>
// //             <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="Some title"/>
// //             <div className={"item-card__information"}>
// //                 <div className={"pricing"}>
// //                     <span>₹{data.discountedPrice}</span>
// //                     <small>
// //                         <strike>{data.price}</strike>
// //                     </small>
// //                 </div>
// //                 <div className={"title"}>
// //                     <h3>{data.title}</h3>
// //                 </div>
// //             </div>
// //             <button className={"cart-add"}>
// //                 <span>Add to Card</span>
// //                 <img src="{AddToCartIcon}" alt="Cart Icon"/>
// //             </button>
// //         </div>
// //     )
    
// // }

// // export default ListItem


// //2. Dynamic Data in components
// // const ListItem=()=>{
// //     // return <h2>List Item</h2>
    
// //     const data={
// //         discountedPrice:341,
// //         price: 450,
// //         title: "Title of the Item",
// //         thumbnail: "jip1.jpg"
// //     }

// //     return (
// //         <div className={"item-card"}>
// //             <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt="Some title"/>
// //             <div className={"item-card__information"}>
// //                 <div className={"pricing"}>
// //                     <span>₹{data.discountedPrice}</span>
// //                     <small>
// //                         <strike>{data.price}</strike>
// //                     </small>
// //                 </div>
// //                 <div className={"title"}>
// //                     <h3>{data.title}</h3>
// //                 </div>
// //             </div>
// //             <button className={"cart-add"}>
// //                 <span>Add to Card</span>
// //                 <img src="{AddToCartIcon}" alt="Cart Icon"/>
// //             </button>
// //         </div>
// //     )
    
// // }

// // export default ListItem


// //1. static Data in components/Styling Components
// // const ListItem=()=>{
// //     // return <h2>List Item</h2>
    
// //     return (
// //         <div className={"item-card"}>
// //             <img className={"img-fluid"} src="/assets/jip1.jpg" alt="Some title"/>
// //             <div className={"item-card__information"}>
// //                 <div className={"pricing"}>
// //                     <span>₹340</span>
// //                     <small>
// //                         <strike>450</strike>
// //                     </small>
// //                 </div>
// //                 <div className={"title"}>
// //                     <h3>"Title of the Item"</h3>
// //                 </div>
// //             </div>
// //             <button className={"cart-add"}>
// //                 <span>Add to Card</span>
// //                 <img src="{AddToCartIcon}" alt="Cart Icon"/>
// //             </button>
// //         </div>
// //     )
// // }
// // export default ListItem