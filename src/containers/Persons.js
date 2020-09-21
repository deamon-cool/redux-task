import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Daemon',
            age: Math.floor(Math.random() * 30)
        }
        this.setState((prevState) => {
            return { persons: prevState.persons.concat(newPerson) }
        });
    }

    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return { persons: prevState.persons.filter(person => person.id !== personId) }
        });
    }

    render() {
        const randomAge = Math.random() * 30;

        return (
            <div>
                <AddPerson personAdded={() => this.props.addPersonHandler(randomAge)} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deletePersonHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPersonHandler: (age) => dispatch({ type: actionTypes.ADD, age: age }),
        deletePersonHandler: (id) => dispatch({ type: actionTypes.DELETE, id: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);