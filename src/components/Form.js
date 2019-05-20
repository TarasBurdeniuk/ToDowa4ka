import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../action/addTodo';
import {changeDescription} from '../action/changeDescription';
import {changeTitle} from '../action/changeTitle';


import ButtonForm from './ButtonForm';
import '../style/Form.style.scss';

class Form extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    render() {
        const {addTodo, title, description, changeTitle, changeDescription} = this.props;

        return (
            <div className='Form'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if(!title || !description) return;
                        addTodo();
                    }}
                >
                    <div className='Form-group'>
                        <label
                            className='Form-label'
                            htmlFor='todoTitle'
                        >Title:</label>
                        <input
                            className='Form-input'
                            type='text'
                            name='title'
                            placeholder='Title'
                            id='todoTitle'
                            value={title}
                            onChange={(e) => changeTitle(e.target.value)}
                        />
                    </div>
                    <div className='Form-group'>
                        <label
                            className='Form-label'
                            htmlFor='todoDescription'
                        >Description:</label>
                        <textarea
                            className='Form-input'
                            name='description'
                            id='todoDescription'
                            placeholder='Description'
                            cols='30'
                            rows='10'
                            value={description}
                            onChange={(e) => changeDescription(e.target.value)}
                        />
                    </div>
                    <ButtonForm type='submit' name='ADD TODO'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        title: store.todoItems.title,
        description: store.todoItems.description
    }
};

const mapDispatchToProps = {
    addTodo,
    changeDescription,
    changeTitle
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);