import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NewTaskComponent } from './new-task';
import { actionType } from '../../actions/action-type';
import { getDateFromFormat } from '../../utils';
import {notificationType} from "../../elements/notification";

class NewTaskContainer extends Component {
    state = {
        categoryName: '',
        taskName: '',
        description: ''
    };

    handleCategoryChange = (event) => this.setState({ categoryName: event.target.value });

    handleTaskNameChange = (event) => this.setState({ taskName: event.target.value });

    handleTaskDescriptionChange = (event) => this.setState({description: event.target.value});

    handleCreateTask = () => {
        const {categoryName, taskName, description} = this.state;
        const {allTasks, user, createNewTask, addNotification} = this.props;
        const numCount = Object.values(allTasks).length;
        const newId = `${taskName.replace(' ', '')}${numCount}`;
        const newTask = {
            [newId]: {
                id: newId,
                type: "task",
                parent: categoryName,
                name: taskName,
                description: description,
                time: getDateFromFormat(),
                author: user.name,
                checked: false
            }
        };
        const notificationOptions = {
            message: 'New task created',
            variant: notificationType.INFO
        };

        createNewTask(newTask);
        this.setState({taskName: '', description: '', categoryName: ''});
        addNotification(notificationOptions);
    };

    render() {
        const {categoryName, taskName, description} = this.state;
        const {allCategory} = this.props;
        const buttonText = "create task";
        const buttonDisabled = !Boolean(categoryName && taskName && description);

        return (
            <NewTaskComponent
                onCategoryChange={this.handleCategoryChange}
                onCreateTask={this.handleCreateTask}
                onTaskNameChange={this.handleTaskNameChange}
                onTaskDescriptionChange={this.handleTaskDescriptionChange}
                selectCategory={categoryName}
                nameValue={taskName}
                descriptionValue={description}
                allCategory={allCategory}
                buttonDisabled={buttonDisabled}
                buttonText={buttonText}
            />
        );
    }
}

export const NewTask = connect(
    store => ({
        allCategory: store.allCategory,
        allTasks: store.allTasks,
        user: store.user
    }),
    dispatch => ({
        createNewTask: task => dispatch({type: actionType.CREATE_TASK, payload: task}),
        addNotification: params => dispatch({type: actionType.ADD_NOTIFICATION, payload: params})
    })
)(NewTaskContainer);
