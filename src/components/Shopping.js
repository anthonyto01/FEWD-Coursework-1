// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

export default function ShoppingList() {
  const [order] = useContext(ShoppingContext);
  
  return (
    <div>
      <p>To Create your own shopping list, click on the designated ingredients as shown above </p>
        {order.map((item, index) => (
          <p key={index}>
            {item}
          <br></br>
          </p>
        ))}
    </div>
  );
}


/* 
const Shopping = () => {
    // HINT: each "item" in our list names a name,
    // a boolean to tell if its been completed, and a quantity
    const [items, setItems] = useState([
      { itemName: 'Apple', quantity: 1, isSelected: false },
      { itemName: 'Banana', quantity: 3, isSelected: true },
      { itemName: 'Pineapples', quantity: 2, isSelected: false },
    ]);
  
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(6);
  
    const handleAddButtonClick = () => {
      const newItem = {
        itemName: inputValue,
        quantity: 1,
        isSelected: false,
      };
  
      const newItems = [...items, newItem];
  
      setItems(newItems);
      setInputValue('');
      calculateTotal();
    };
  
    const increaseIngredientQuantity = (index) => {
      const newItems = [...items];
  
      newItems[index].quantity++;
  
      setItems(newItems);
      calculateTotal();
    };
  
    const decreaseIngredientQuantity = (index) => {
      const newItems = [...items];
  
      newItems[index].quantity--;
  
      setItems(newItems);
      calculateTotal();
    };
  
    const toggleComplete = (index) => {
      const newItems = [...items];
  
      newItems[index].isSelected = !newItems[index].isSelected;
  
      setItems(newItems);
    };
  
    const calculateTotal = () => {
      const totalItemCount = items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
  
      setTotalItemCount(totalItemCount);
    };
  
    return (
      <div className='app-background'>
        <div className='main-container'>
          <div className='add-item-box'>
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
            <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
          </div>
          <div className='item-list'>
            {items.map((item, index) => (
              <div className='item-container'>
                <div className='item-name' onClick={() => toggleComplete(index)}>
                  {item.isSelected ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className='completed'>{item.itemName}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} />
                      <span>{item.itemName}</span>
                    </>
                  )}
                </div>
                <div className='quantity'>
                  <button>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => decreaseIngredientQuantity(index)} />
                  </button>
                  <span> {item.quantity} </span>
                  <button>
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => increaseIngredientQuantity(index)} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='total'>Total: {totalItemCount}</div>
        </div>
      </div>
    );
  };
  export default Shopping; */