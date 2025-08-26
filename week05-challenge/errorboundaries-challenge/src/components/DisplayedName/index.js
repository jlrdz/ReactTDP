import { Component } from "react"

class DisplayedName extends Component {

    render() {
        return (
            <div>
                <p>
                    {this.props.name.toUpperCase()}
                </p>
            </div>
        )
    }
}

export default DisplayedName