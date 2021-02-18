import React, { Component } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

export class TaskListComponent extends Component {
    render() {
        const {
            expanded, onOpenTaskChange, taskName, taskDescription, taskStatus,
            onChangeStatusTask, switchValue, onRemoveTask, onLearnMore
        } = this.props;

        return (
            <ExpansionPanel expanded={expanded === switchValue} onChange={onOpenTaskChange}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{taskName}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="ExpansionPanelDetails__inner">
                        <div className="ExpansionPanelDetails__content">
                            <Typography>{taskDescription}</Typography>
                        </div>
                        <Divider />
                        <div className="ExpansionPanelDetails__action">
                            <div className="ExpansionPanelDetails__action-column">
                                <span>Status: </span>
                                <Switch
                                    checked={taskStatus}
                                    onChange={onChangeStatusTask}
                                    value={switchValue}
                                    color="primary"
                                />
                            </div>
                            <div className="ExpansionPanelDetails__action-column">
                                <Button
                                    color="primary"
                                    size="small"
                                    onClick={onLearnMore}
                                >
                                    learn more
                                </Button>
                                <Button
                                    color="secondary"
                                    size="small"
                                    onClick={onRemoveTask}
                                >
                                    remove task
                                </Button>
                            </div>
                        </div>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}