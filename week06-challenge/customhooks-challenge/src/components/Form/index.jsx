import { useForm } from "../../hooks/useForm"

const initialState = {
    values: {
    fname: '',
    lname: '',
    favColour: '',
    favFood: ''}
}

export default Form => {
    const { state, changeValue, handleSubmit, handleReset } = useForm(initialState)

    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div>
                    <label htmlFor="fname" >Given Name</label>
                    <input
                        type="text"
                        id="fname"
                        value={state.fname}
                        onChange={changeValue} />
                </div>
                <div>
                    <label htmlFor="lname" >Family Name</label>
                    <input
                        type="text"
                        id="lname"
                        value={state.lname}
                        onChange={changeValue} />
                </div>
                <div>
                    <label htmlFor="favColour" >Favourite Colour</label>
                    <input
                        type="text"
                        id="favColour"
                        value={state.favColour}
                        onChange={changeValue} />
                </div>
                <div>
                    <label htmlFor="favFood" >Favourite Food</label>
                    <input
                        type="text"
                        id="favFood"
                        value={state.favFood}
                        onChange={changeValue} />
                </div>
                <button type="submit">Send It</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}