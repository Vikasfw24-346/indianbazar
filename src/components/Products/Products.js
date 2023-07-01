//making first network call(fetch/Axios)
import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
//import axios, { Axios } from "axios"
import axios from "axios"
import Loader from "../UI/Loader"

const Products =({ onAddItem, onRemoveItem, eventState })=>{
    //3. 1. Making first network call by fetch-API/ Network call using Axios
    // const [items, setItems]= useState([
    //             {
    //                 id:0,
    //                 title: "Title of the Item-1",
    //                 price: 450,
    //                 discountedPrice:341,
    //                 thumbnail: "jip.jpg"
    //             },
    //             {
    //                 id:1,
    //                 title: "Title of the Item-2",
    //                 price: 600,
    //                 discountedPrice:560,
    //                 thumbnail: "jip1.jpg"
    //             },
    //             {
    //                 id:2,
    //                 title: "Title of the Item-3",
    //                 price: 700,
    //                 discountedPrice:660,
    //                 thumbnail: "jip.jpg"
    //             }
    // ])
    //3. Handling data and states/ for fetch the data into back-end that's why remove the data into this file
    const [items, setItems]= useState([])
    const [loader, setLoader]= useState(true)
    // const [presentItems, setPresentItems]=useState([])
    
    useEffect(()=>{
        //1. Making first network call by fetch-API
        // fetch(`https://react-guide-2023-8037e-default-rtdb.firebaseio.com/items.json`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(error =>{
        //     console.log(error);
        // })

        //2.Network call using Axios
        // axios.get('https://react-guide-2023-8037e-default-rtdb.firebaseio.com/items.json')
        // .then(response =>{
        //     console.log(response)
        // })
        // .catch(error =>{
        //     console.log(error);
        // })

        // //3. Handling data and states
        // axios.get('https://react-guide-2023-8037e-default-rtdb.firebaseio.com/items.json')
        // .then(response =>{
        //     const data= response.data
        //     const transformedData= data.map((item, index) =>{
        //         return {
        //             ...item,
        //             id: index
        //         }
        //     })
        //     setItems(transformedData)
        // })
        // .catch(error =>{
        //     console.log(error);
        // })

        //3. Async and Await
        async function fetchItems(){
            try{
                const response = await axios.get('https://react-guide-2023-8037e-default-rtdb.firebaseio.com/items.json')
                const data= response.data
                const transformedData= data.map((item, index) =>{
                    return {
                        ...item,
                        quantity:0,
                        id: index
                   }
                })
                // setLoader(false)
                setItems(transformedData)
            }
            catch(error){
                // setLoader(false)
                console.log("Error:",error);
                alert("Some error occurred");
            }
            finally{
                setLoader(false)
            }
        } 
        fetchItems();
    }, [])

    useEffect(() => {
        if(eventState.id > -1) {
            if(eventState.type === 1) {
                handleAddItem(eventState.id)
            }
            else if(eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }
    }, [eventState])

    const handleAddItem =id =>{
        // if(presentItems.indexOf(id)>-1){
        //     return;
        // }
        // setPresentItems([...presentItems,id ])
        //console.log(id)
        // onAddItem();
        let data=[...items]
        let index=data.findIndex(i=>i.id ===id)
        data[index].quantity+=1
        setItems([...data])
        onAddItem(data[index])
    }

    const handleRemoveItem =id =>{
        // let index=presentItems.indexOf(id)
        // if(index>-1){
        //     let items=[...presentItems]
        //     items.splice(index,1)
        //     setPresentItems([...items]);
        //     onRemoveItem();
        // }
        // console.log(id)
        let data=[...items]
        let index=data.findIndex(i=>i.id ===id)
        if(data[index].quantity !==0){
            data[index].quantity-=1
            setItems([...data])
            onRemoveItem(data[index])
        }
    }
  
    //4.Updating the data
    // const updateItemTitle = async (itemId) =>{
    //      console.log(`Item with ID: ${itemId}`)
    //      try{
    //         let title= `Update Title #Item-${itemId}`
    //         await axios.patch(`https://react-guide-2023-8037e-default-rtdb.firebaseio.com/items/${itemId}.json`,{
    //         title: title
    //         })
    //         let data= [...items]
    //         let index= data.findIndex(e=> e.id === itemId)
    //         data[index]['title'] = title

    //         setItems(data)
    //      }
    //      catch(error){
    //         console.log("Error Updating the data!")
    //      }
    // }
    return (
        <>
        <div className={"product-list"}>
            <div className={"product-list--wrapper"}>
                {/* hard coded list item */}
                {/* <ListItem data={items[0]}></ListItem> 
                <ListItem data={items[1]}> </ListItem>
                <ListItem data={items[2]}> </ListItem>  */}

                {
                    items.map(item =>{
                        // console.log(item)
                        // return (<ListItem key={item.id} data={item} updateItemTitle={updateItemTitle}/>)
                        return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} />)
                    })
                }
                {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[2]}/>]} */}
            </div>
        </div>
        {loader && <Loader/>}
        </>
        
    )
}
export default Products





//10. Conditional Rendering / Rendering of list
// import { useState } from "react"
// import ListItem from "./ListItems/ListItem"
// const Products =()=>{
//     const [items, setItems] = useState([
//         {
//             id:0,
//             title: "Title of the Item-1",
//             price: 450,
//             discountedPrice:341,
//             thumbnail: "jip.jpg"
//         },
//         {
//             id:1,
//             title: "Title of the Item-2",
//             price: 600,
//             discountedPrice:560,
//             thumbnail: "jip1.jpg"
//         },
//         {
//             id:2,
//             title: "Title of the Item-3",
//             price: 700,
//             discountedPrice:660,
//             thumbnail: "jip.jpg"
//         }
//     ]
//     )
//     return (
//         <div className="product-list">
//             <div className="product-list--wrapper">
//                 {/* hard coded list item */}
//                 {/* <ListItem data={items[0]}></ListItem> 
//                 <ListItem data={items[1]}> </ListItem>
//                 <ListItem data={items[2]}> </ListItem>  */}

//                 {
//                     items.map(item =>{
//                         console.log(item)
//                         return (<ListItem key={item.id} data={item}/>)
//                     })
//                 }
//                 {/* {[<ListItem data={item[0]}/>,<ListItem data={item[1]}/>,<ListItem data={item[2]}/>]} */}
//             </div>
//         </div>
//     )
// }
// export default Products





//4.1 Complex Components & Splitting(restructure items)
// import { useState } from "react";
// import ListItem from "./ListItems/ListItem";
// 10. Child to Parent Communication
// import Form from "./ListItems/Form";

//9. Optimizations way
// const Products =()=>{
//      const [item, setItem]=useState({
//         id:0,
//         title: "Title of the Item-1",
//         price: 450,
//         discountedPrice:341,
//         thumbnail: "jip1.jpg"
//     })

    //that code is redundant
    // const handleTitle=(event)=>{
    //     setItem({
    //         ...item,
    //         title:event.target.value
    //     }) 
    // }
    // const handlePrice=event=>{
    //     setItem({
    //         ...item,
    //         price:event.target.value
    //     })
    // }

    // const handleDiscountedPrice=event=>{
    //     setItem({
    //         ...item,
    //         discountedPrice:event.target.value
    //     })
    // }

    // const handleThumbnail=event=>{
    //     setItem({
    //         ...item,
    //         thumbnail:event.target.value
    //     })
    // }

    //we are useing generic funtion
//     const handleInput = event =>{
//         //console.log(event.target.value, event.target.name)
//         //make use some of javascript logic and make function more dynamic
//         setItem({
//             ...item,
//             [event.target.name]:event.target.value
//         })
//     }

//     const submitForm=event=>{
//         event.preventDefault();
//         if(item.discountedPrice > item.price){
//             alert("Discounted Price can not be greater than price")
//             return;
//         }
//         console.log("Item Updated!",item)
//     }

//     return (
//         // <div className={"product-wrapper"}>
//         <div className="product-list">
//             <div className={"form"}>
//                 {/* comment because using "Child to Parent Communication" and move to Form.js file */}
//                 {/* <form onSubmit={submitForm}>
//                     <h2>Item Card Details</h2>
//                     <div className={"input-field"}>
//                         <label htmlFor="title">Title</label>
//                         <input 
//                         name="title"
//                         type="text" 
//                         placeholder="Enter Title"
//                         value={item.title}
//                         onChange={handleInput}
//                         required
//                         />
//                     </div>
//                     <div className={"input-field"}>
//                         <label htmlFor="price">Price</label>
//                         <input 
//                         name="price"
//                         type="number" 
//                         placeholder="Enter Price"
//                         value={item.price}
//                         onChange={handleInput}
//                         required
//                         />
//                     </div>
//                     <div className={"input-field"}>
//                         <label htmlFor="discountedPrice">Discounted Price</label>
//                         <input 
//                         name="discountedPrice"
//                         type="number" 
//                         placeholder="Enter Discounted Price"
//                         value={item.discountedPrice}
//                         onChange={handleInput}
//                         required
//                         />
//                     </div>
//                     <div className={"input-field"}>
//                         <label htmlFor="thumbnail">Thumbnail</label>
//                         <input 
//                         name="thumbnail"
//                         type="text" 
//                         placeholder="Enter Thumbnail"
//                         value={item.thumbnail}
//                         onChange={handleInput}
//                         required
//                         />
//                     </div>
//                     <div className="submit-wrap">
//                         <button>Update</button>
//                     </div>
//                 </form> */}
//                 <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
//             </div>
//             <div>
//                 <div >
//                         <ListItem data={item}/>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Products










//8. Form Handling & Multiple States
// const item ={
//     id:0,
//     title: "Title of the Item-1",
//     price: 450,
//     discountedPrice:341,
//     thumbnail: "jip1.jpg"
// }

// const Products =()=>{
//     const [title, setTitle]=useState("")
//     const [price, setPrice]=useState(0)
//     const [discountedPrice, setDiscountedPrice]=useState(0)
//     const [thumbnail, setThumbnail]=useState("")

//     const [item, setItem]=useState({
//         id:0,
//         title: "Title of the Item-1",
//         price: 450,
//         discountedPrice:341,
//         thumbnail: "jip1.jpg"
//     })

//     const handleTitle=(event)=>{
//         // console.log(event)
//         // console.log(event.target.value)
//         setTitle(event.target.value)
//         setItem({
//             ...item,
//             title:event.target.value
//         })
//     }
//     const handlePrice=event=>{
//         setPrice(event.target.value)
//         setItem({
//             ...item,
//             price:event.target.value
//         })
//     }

//     const handleDiscountedPrice=event=>{
//         setDiscountedPrice(event.target.value)
//         setItem({
//             ...item,
//             discountedPrice:event.target.value
//         })
//     }

//     const handleThumbnail=event=>{
//         setThumbnail(event.target.value)
//         setItem({
//             ...item,
//             thumbnail:event.target.value
//         })
//     }

//     const submitForm=event=>{
//         event.preventDefault();
//         console.log({
//             title:title,
//             price,
//             discountedPrice,
//             thumbnail
//         })
//         if(discountedPrice>price){
//             alert("Discounted Price can not be greater than price")
//             return;
//         }
//         setItem({
//             title,
//             price,
//             discountedPrice,
//             thumbnail
//         })
//     }

//     return (
//         // <div className={"product-wrapper"}>
//         <div className="product-list">
//             <div className={"form"}>
//                 <form onSubmit={submitForm}>
//                     <h2>Item Card Details</h2>
//                     <div className={"input-field"}>
//                         <label htmlFor="title">Title</label>
//                         <input 
//                         type="text" 
//                         placeholder="Enter Title"
//                         value={title}
//                         onChange={handleTitle}
//                         required
//                         />
//                     </div>
//                     <div className={"input-field"}>
//                         <label htmlFor="price">Price</label>
//                         <input 
//                         type="number" 
//                         placeholder="Enter Price"
//                         value={price}
//                         onChange={handlePrice}
//                         required
//                         />
//                     </div>
//                     <div className={"input-field"}>
//                         <label htmlFor="discountedPrice">Discounted Price</label>
//                         <input 
//                         type="number" 
//                         placeholder="Enter Discounted Price"
//                         value={discountedPrice}
//                         onChange={handleDiscountedPrice}
//                         required
//                         />
//                     </div>
//                     <div className={"input-field"}>
//                         <label htmlFor="thumbnail">Thumbnail</label>
//                         <input 
//                         type="text" 
//                         placeholder="Enter Thumbnail"
//                         value={thumbnail}
//                         onChange={handleThumbnail}
//                         required
//                         />
//                     </div>
//                     <div className="submit-wrap">
//                         <button>Update</button>
//                     </div>
//                 </form>
//             </div>
//             <div>
//                 <div >
//                         <ListItem data={item}/>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Products



//7. useState() Hook/cart-addon
// 6. normal variables does not keep(render) trck to DOM element
//5. Handling Events in React
//4. add ListItem

// const items =[
//     {
//         id:0,
//         title: "Title of the Item-1",
//         price: 450,
//         discountedPrice:341,
//         thumbnail: "jip1.jpg"
//     },
//     {
//         id:1,
//         title: "Title of the Item-2",
//         price: 600,
//         discountedPrice:560,
//         thumbnail: "jip1.jpg"
//     }
// ]

// const Products =()=>{
//     return (
//         <div className="product-list">
//             <div className="product-list--wrapper">
//                 <ListItem data={items[0]}></ListItem>
//                 <ListItem data={items[1]}></ListItem>
//             </div>
//         </div>
//     )
// }
// export default Products

//4.0 Complex Components & Splitting
// import ListItem from "./ListItems/ListItem";

// const Products =()=>{
//     return (
//         <div className="product-list">
//             <div className="product-list--wrapper">
//                 <ListItem data={{
//                     title: "Title of the Item-1",
//                     price: 450,
//                     discountedPrice:341,
//                     thumbnail: "jip1.jpg"
//                 }}></ListItem>
//                 <ListItem data={{
//                     id:1,
//                     title: "Title of the Item-2",
//                     price: 600,
//                     discountedPrice:560,
//                     thumbnail: "jip1.jpg"
//                 }}></ListItem>
//             </div>
//         </div>
//     )
// }
// export default Products