import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

let AvailableMeals = ()=>{

let mealsList = DUMMY_MEALS.map((meals => <MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price} id={meals.id}/>))
// we can pass meals in props too and can access it via props.meals.name

return(
<>
    <section className={classes.meals}>
        <Card>
        {/* <MealItem/> */}
        {mealsList}
        </Card>

    </section>

</>
)
}

export default AvailableMeals