import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TaskItemComponent } from './task-item';
import {actionType} from "../../actions/action-type";

class TaskItemContainerComponent extends Component {
    static defaultProps = {
        allTasks: {},
        allCategory: {}
    };

    handleChangeStatusTask = (event) => {
        const { changeStatus, match } = this.props;

        changeStatus({id: match.params.taskId, status: event.target.checked});
    };

    handleRemoveTask = () => {
        const { removeTask, allTasks, match, history, closeModal, showModal } = this.props;
        const activeTask = allTasks[match.params.taskId];
        const modalParams = {
            content: {
                title: 'Delete task ?',
                text: `Do you really want to delete ${activeTask.name}`
            },
            actions: [
                {
                    text: 'Cancel',
                    action: () => closeModal()
                },
                {
                    text: 'Confirm',
                    action: () => {
                        removeTask(match.params.taskId);
                        history.push(`/category/${match.params.catId}`);
                        closeModal();
                    }
                }
            ],
            params: {
                overlayClose: false
            }
        };

        showModal(modalParams);
    };

    handleCategoryClick = () => {
        const { history, match } = this.props;

        history.push(`/category/${match.params.catId}`);
    };

    render() {
        const { match, allTasks, allCategory } = this.props;
        const emptyTask = {
            id: 'emptyTask',
            name: 'empty task',
            time: 'unknown',
            description: 'failed load task from server',
            author: 'unknown',
            checked: false
        };
        const emptyCategory = {
            name: 'empty category'
        };
        const activeTask = allTasks[match.params.taskId] || emptyTask;
        const categoryParent = allCategory[match.params.catId] || emptyCategory;
        const userAvatar = activeTask.author.slice(0,1);
        const categoryName = categoryParent.name || '';

        return (
            <TaskItemComponent
                taskName={activeTask.name}
                taskDescription={activeTask.description}
                taskTime={activeTask.time}
                taskAuthor={activeTask.author}
                status={activeTask.checked}
                taskId={activeTask.id}
                categoryName={categoryName}
                onCategoryClick={this.handleCategoryClick}
                userAvatar={userAvatar}
                onRemoveTask={this.handleRemoveTask}
                onChangeStatusTask={this.handleChangeStatusTask}
            />
        );
    }
}

export const TaskItem = connect(
    store => ({
        allTasks: store.allTasks,
        allCategory: store.allCategory
    }),
    dispatch => ({
        changeStatus: taskId => dispatch({type: actionType.CHANGE_STATUS_TASK, payload: taskId}),
        removeTask: taskId => dispatch({type: actionType.REMOVE_TASK, payload: taskId}),
        closeModal: () => dispatch({type: actionType.REMOVE_MODAL}),
        showModal: modal => dispatch({type: actionType.ADD_MODAL, payload: modal})
    })
)(TaskItemContainerComponent);
