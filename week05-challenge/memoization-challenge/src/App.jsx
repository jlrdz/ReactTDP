import './App.css'
import Linted from './components/Linted';
import Table from './components/Table';
import Toppings from './components/Toppings';

function App() {

  const toppings = [
    "pepperoni",
    "myshrooms",
    "mozzarella",
    "ham",
    "sausage",
    "mozzarella",
    "bacon",
    "black olives",
    "chicken",
    "green peppers",
    "red pepper",
    "hotdog",
    "bacon",
    "spinach",
    "garlic",
    "ham",
    "pineapple",
    "feta",
    "tomatoes",
    "red onion",
   ];

   const csv = `name, age, town|John Smith, 12,Toronto|Si Ying Wong, 45, Montreal|Roberta Pavek,20,London|Hrishi Patel,31,Winnipeg`;

  return (
    <>
      <Toppings toppings={toppings}></Toppings>
      <hr />
      <Table csv={csv.replaceAll("|","\n")}></Table>
      <hr />
      <Linted></Linted>
    </>
  )
}

export default App
