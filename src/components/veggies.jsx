import { useEffect, useState } from 'react'
import axios from 'axios';

function Veggies() {

  const [formData, setFormData] = useState({
    name: '',
    age: 1,
    canEat: false
  });

  const [ searchInput, setSearchInput] = useState('')
 
  const [ searchedVeggie, setSearchedVeggie] =useState([]);
 console.log(searchedVeggie);
  const [veggieArray, setveggieArray] = useState([]);

  useEffect(() => {

    axios('/veggies').then((response)=> {
      console.log(response);
      setveggieArray(response.data)
    })

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
      axios({
         method: "POST",
         url: "/create_veggie",
         data: formData
      })
      setFormData({name:'', age:'', canEat: false})
  }

  const handleChange = (e) => {
    let value = e.target.name === "canEat" ? e.target.checked : e.target.value;
    let newStateObject = {
      ...formData,
      [e.target.name]: value
    }
    setFormData(newStateObject)
    
  };


  const searchHandleSubmit = (event) =>{
    event.preventDefault()

    axios(`/veggies/${searchInput}`).then((response)=> {
      // console.log(response);
      setSearchedVeggie(response.data)
      setSearchInput('')
    })


  }



  let veggieJSX = veggieArray.map((veggie) => {
    return <div key={veggie._id} className={veggie.canEat ? "green" : "red"} >{veggie.name}</div>
  });



  let searchedVeggieJSX = searchedVeggie.map((searchedveggie) =>{
     return<div> The name: {searchedveggie.name}<br/>The id: {searchedveggie._id}<br/>The age: {searchedveggie.age}</div>
  })

  return (
    <>
      <form id="create-veggie-form" onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="name">Veggie Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </div>
        <div className='input-container'>
          <label htmlFor="age">Veggie Age</label>
          <input type="number" name="age" min="1" value={formData.age} onChange={handleChange}/>
        </div>
        <div className='input-container'>
          <label htmlFor="canEat">Can Eat Veggie?</label>
          <input type="checkbox" name='canEat' checked={formData.canEat} onChange={handleChange}/>
        </div>
        <button>Add</button>
      </form>

      <section id="display-veggie">
        {veggieJSX}
      </section>
      <h2>Search the entered veggies by name</h2>
      <form onSubmit={searchHandleSubmit}>
        <label>Name</label>
        <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/>
      </form>
      <section id="display-veggie">
      <h4>{searchedVeggieJSX}</h4>

      </section>
    </>
  )
}

export default Veggies
