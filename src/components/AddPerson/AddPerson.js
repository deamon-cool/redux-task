import React from 'react';

import './AddPerson.css';

class AddPerson extends React.Component {
    state = {
        name: '',
        age: null
    };

    nameChangedHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    ageChangeHandler = (e) => {
        this.setState({ age: e.target.value });
    }

    render() {
        return (
            <div className="AddPerson">
                <input type='text' placeholder='Name' onChange={this.nameChangedHandler} />
                <input type='number' placeholder='Age' onChange={this.ageChangeHandler} />
                <button onClick={this.props.personAdded}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;