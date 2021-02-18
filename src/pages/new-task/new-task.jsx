import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import { Input, Select } from '../../elements/inputs';
import './new-task.css';

export class NewTaskComponent extends Component {
    render() {
        const {
            onCategoryChange, onCreateTask, onTaskNameChange, onTaskDescriptionChange, selectCategory,
            descriptionValue, nameValue, allCategory, buttonDisabled, buttonText
        } = this.props;

        return (
            <div className="New-task">
                <h3 className="New-task__heading">Create new tasks</h3>
                <div className="New-task__content">
                    <Input
                        id="new-task-name"
                        label="Task name"
                        value={nameValue}
                        onChange={onTaskNameChange}
                    />
                    <Select
                        name="Category"
                        id="new-task-category-parent"
                        value={selectCategory}
                        onChange={onCategoryChange}
                        items={allCategory}
                    />
                    <Input
                        id="new-task-description"
                        label="Task description"
                        placeholder="Enter description"
                        multiline
                        variant="outlined"
                        value={descriptionValue}
                        onChange={onTaskDescriptionChange}
                    />
                </div>
                <div className="New-task__action">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onCreateTask}
                        disabled={buttonDisabled}
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}
