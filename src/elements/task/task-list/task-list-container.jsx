import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TaskListComponent } from './task-list';
import { actionType } from '../../../actions/action-type';
import './task-list.css';

class TaskListComponentContainer extends Component {
    handleChangeStatusTask = (event) => {
        const { changeStatus, task } = this.props;

        changeStatus({id: task.id, status: event.target.checked});
    };

    handleLearnMore = () => {
        const { history, match, task } = this.props;

        history.push(`${match.url}/task/${task.id}`);
    };

    handleOpenTaskChange = (event, expanded) => {
        const { onChange, task } = this.props;

        onChange(task.id)(event, expanded);
    };

    handleRemoveTask = () => {
        const { removeTask, task, showModal, closeModal } = this.props;
        const modalParams = {
            content: {
                title: 'Delete task ?',
                text: `Do you really want to delete ${task.name}`
            },
            actions: [
                {
                    text: 'Cancel',
                    action: () => closeModal()
                },
                {
                    text: 'Confirm',
                    action: () => {
                        removeTask(task.id);
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

    render() {
        const { task, expanded } = this.props;

        return (
            <TaskListComponent
                expanded={expanded}
                onOpenTaskChange={this.handleOpenTaskChange}
                taskName={task.name}
                taskDescription={task.description}
                taskStatus={task.checked}
                onChangeStatusTask={this.handleChangeStatusTask}
                switchValue={task.id}
                onRemoveTask={this.handleRemoveTask}
                onLearnMore={this.handleLearnMore}
            />
        );
    }
}

export const TaskList = connect(
    null,
    dispatch => ({
        changeStatus: taskId => dispatch({type: actionType.CHANGE_STATUS_TASK, payload: taskId}),
        removeTask: taskId => dispatch({type: actionType.REMOVE_TASK, payload: taskId})
    })
)(TaskListComponentContainer);
