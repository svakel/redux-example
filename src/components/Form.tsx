import * as React from 'react';
import { Component } from 'react';
import Details from './Details';
import axios from 'axios';
import { saveData } from './service';

interface FormState {
    name?: string;
    address?: string;
}

interface Props {}

class Form extends Component<Props, FormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            address: ''
        }
        this.handleInput = this.handleInput.bind(this);     
        // this.handleSubmit = this.handleSubmit.bind(this);   
    }
    
    handleInput (e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault;
        const value = e.target.value;
        const name = e.target.name;
        console.log(value);
        console.log(name);
        this.setState({ [name] : value })
        // this.setState(state => ({
        //     [name] : value
        // }));
    }

    handleSubmit = (e: any) => {
        e.preventDefault;
        console.log('klikattu')

        const uusiData: any  = {
            name: this.state.name,
            address: this.state.address
        };

        saveData(uusiData);

        // const data = new FormData(uusiData);

        // axios.post('/api', { data})
        //   .then((result) => {
        //     //access the results here....
        //   });
    }


    render() {
        console.log('rendautuuko?')
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Details handleInput={this.handleInput}/>

                    <button type='submit'> Tallenna </button>
                </form>

            </div>
            
        );
    }
}

export default Form;