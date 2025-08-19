import './App.css'
import { useReducer } from 'react'
import { reducer, actions } from './store/reducer'

const initialState = {
  fname: '',
  lname: '',
  favColour: '',
  favFood: ''
}

function App() {

  const [values, dispatch] = useReducer(reducer, initialState)

  function updateValue(event) {
    dispatch({
      type: actions.UPDATE_VALUE,
      payload: {
        [event.target.id]: event.target.value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(values, null, 2));
  }

  function handleReset(event) {
    dispatch({
      type: actions.SET,
      payload: initialState
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div>
          <label htmlFor="fname" >Given Name</label>
          <input type="text" id="fname" value={values.fname} onChange={updateValue} />
        </div>
        <div>
          <label htmlFor="lname" >Family Name</label>
          <input type="text" id="lname" value={values.lname} onChange={updateValue} />
        </div>
        <div>
          <label htmlFor="favColour" >Favourite Colour</label>
          <input type="text" id="favColour" value={values.favColour} onChange={updateValue} />
        </div>
        <div>
          <label htmlFor="favFood" >Favourite Food</label>
          <input type="text" id="favFood" value={values.favFood} onChange={updateValue} />
        </div>
        <button type="submit">Send It</button>
        <button type="reset">Reset</button>
      </form>
    </>
  )
}

export default App
