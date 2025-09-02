import { useEffect, useRef } from "react"
import { useModal } from "../../hooks/useModal"

export default () => {

    const { ref, showModal } = useModal()

    return (
        <>
            <button onClick={showModal}>Open Dialog</button>
            <dialog ref={ref}>
                <h2>Dialog 1</h2>
                <p>Content that should come from props</p>
                <form method="dialog">
                    <button value="cancel">Cancel</button>
                    <button value="default">OK</button>
                </form>
            </dialog>
        </>
    )
}