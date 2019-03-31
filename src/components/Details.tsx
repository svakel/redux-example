import * as React from 'react';
import { Component } from 'react';


// interface Form {
//     handleInput: () => void;
// }

interface FormState {
    name?: string;
    address?: string;
}

interface Props {
    handleInput: any;
}

class Details extends Component <Props, FormState> {
     constructor(props: any) {
            super(props);
            this.state = {
                name: '',
                address: ''
            }
        this.changeInput = this.changeInput.bind(this);
        // this.handleInputHere = this.handleInputHere.bind(this);
    }

    changeInput (e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault;
        const value = e.target.value;
        const name = e.target.name;
        console.log(value);
        console.log(name);
        this.setState({ [name] : value })
    }

    // handleInputHere (e: React.ChangeEvent<HTMLInputElement>) {
    //     e.preventDefault;
    //     this.props.handleInput(e.target.value)
    // }

    render() {
        return (

            <div>
                <label>
                <span> Nimi</span>
                <input
                    name='name'
                    onChange={this.changeInput}
                    type="text"
                />
                </label>
                <label>
                 <span> Osoite</span>
                 <input
                    name='address'
                    onChange={this.props.handleInput}
                    // onChange={this.handleInputHere}
                    type="text"
                />
                </label>

            </div>
            
        );
    }
}

export default Details;