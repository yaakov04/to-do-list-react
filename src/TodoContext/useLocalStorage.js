import { useState, useEffect } from 'react'


const useLocalStorge = (itemName, initialValue) => {
    //
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItems] = useState(initialValue);
  
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItems(parsedItem);
          setLoading(false);
    
        } catch (error) {
          setError(error);
        }
      }, 2000);
    });
  
    
    
  
    const saveItems = newItems =>{
      try {
        const stringItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringItems);
        setItems(newItems);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItems,
      loading,
      error
    };
  };

  export default useLocalStorge;