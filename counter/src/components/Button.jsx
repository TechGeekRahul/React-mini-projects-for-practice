
const Button = ({count,setCount}) =>{
    const handleAdd =()=>{
        setCount(count + 1)
    }
    const handleDecrease =()=>{
        setCount(count - 1)
    }
    return(<div><button onClick={()=> handleAdd()}>+</button>
    <button onClick={()=> handleDecrease()}>-</button></div>)
}
export default Button;
