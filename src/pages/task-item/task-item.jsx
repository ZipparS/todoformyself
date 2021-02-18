import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Switch from "@material-ui/core/Switch";
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

import { ButtonIcon as IconButton } from '../../elements/buttons';


const styles = () => ({
    avatar: {
        backgroundColor: red[500]
    },
    typography: {
        marginRight: 10
    },
    link: {
        cursor: 'pointer'
    }
});

class TaskItemComponentView extends Component {

    render() {
        const { classes, userAvatar, onRemoveTask, onChangeStatusTask, taskName, taskDescription, taskTime,
            taskAuthor, categoryName, onCategoryClick, status, taskId } = this.props;

        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {userAvatar}
                        </Avatar>
                    }
                    action={
                        <IconButton
                            onClick={onRemoveTask}
                            titel="delete"
                            fontSize="large"
                            color="secondary"
                        />
                    }
                    title={taskName}
                    subheader={taskTime}
                />
                <Divider />
                <CardContent>
                    <br/>
                    <Typography
                        component="span"
                        variant="body2"
                        gutterBottom
                        className={classes.link}
                        onClick={onCategoryClick}
                    >
                        Category : {categoryName}
                    </Typography>
                    <Typography component="span" variant="body2" gutterBottom className={classes.typography}>
                        Creator : {taskAuthor}
                    </Typography>
                    <Typography component="span" variant="body2" gutterBottom className={classes.typography}>
                        Status :
                        <Switch
                            checked={status}
                            onChange={onChangeStatusTask}
                            value={taskId}
                            color="primary"
                        />
                    </Typography>
                    <br/>
                    <Typography component="p">
                        {taskDescription}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export const TaskItemComponent = withStyles(styles)(TaskItemComponentView);
