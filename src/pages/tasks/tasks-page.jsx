import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TaskList } from '../../elements/task';
import { actionType } from '../../actions/action-type';

class TasksPageComponent extends Component {
    state = {
        expanded: null,
    };

    handleChange = (panel) => (event, expanded) => this.setState({ expanded: expanded ? panel : false});

    render() {
        const { allTasks, match, history, showModal, closeModal } = this.props;
        const activeCategory = match.params.catId;
        const categoryTasks = Object.values(allTasks).filter(task => task.parent === activeCategory);

        return (
            <div className="Tasks-page">
                {categoryTasks.map((task, index) =>
                    <TaskList
                        task={task}
                        key={index}
                        onChange={this.handleChange}
                        expanded={this.state.expanded}
                        showModal={showModal}
                        closeModal={closeModal}
                        match={match}
                        history={history}
                    />
                )}
            </div>
        );
    }
}

export const TasksPage = connect(
    store => ({
        allTasks: store.allTasks
    }),
    dispatch => ({
        closeModal: () => dispatch({type: actionType.REMOVE_MODAL}),
        showModal: modal => dispatch({type: actionType.ADD_MODAL, payload: modal})
    })
)(TasksPageComponent);
