import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem';
import { useEffect, useState } from 'react';

let AvailableMeals = ()=>{

  let [meals,setMeals] = useState([])
  let [loading,setLoading] = useState(true)
  let [error,setError] = useState('')
// we can pass meals in props too and can access it via props.meals.name

useEffect(()=>{
  let mealListFetcher = async()=>{
  let response = await fetch('https://react-api-project-e7084-default-rtdb.asia-southeast2.firebasedatabase.app/mealsList.json')
  if(!response.ok){
    console.log('error response')
  }
  let data = await response.json()
  
  let loadedMeals = []

  for(let fetchedData in data){
   loadedMeals.push(data[fetchedData])
  //  loadedMeals.push({
  //   id:data[fetchedData].id,
  //   description:data[fetchedData].description,
  //   name:data[fetchedData].name
  //  })
  }
  setMeals(loadedMeals)
  // When done getting data put loading to false
  setLoading(false)
  }
  // since mealsListFetcher is a async function we need to use await by wraping it in try catch, but await wont work here
  // as it will beark promis we can return a new fucntion where we can catch error
  mealListFetcher().catch((error)=>{
    setError(error.message)
    setLoading(false)
  })

}, [])

let mealsgot = meals.map((meals => <MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price} id={meals.id}/>))
  
if(loading){
  console.log('loading')
  return(  
    <section className={classes.mealsLoading}>
      <Card>
      <h1>
        Loading...
      </h1>
      </Card>
    </section>

  )
}

if(error){
  console.log('Error')
  return(  
    <section className={classes.mealsLoading}>
      <Card>
      <h1>
        {error}
      </h1>
      </Card>
    </section>

  )
}

return(
<>
    <section className={classes.meals}>
        <Card>
        {mealsgot}
        </Card>
    </section>

</>
)
}

export default AvailableMeals