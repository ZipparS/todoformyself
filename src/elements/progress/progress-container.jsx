import React from 'react';
import { connect } from 'react-redux';

import { ProgressBarComponent } from './progress';

class ProgressBarContainerComponent extends React.Component {
    static defaultProps = {
        allTasks: {}
    };

    getResolveTasksQuantity = (allTasks, allCategory) => {
        const emptyCategoryValue = 0;
        let activeCategoryTasks;

        const activeCategory = Object.values(allCategory).filter(category => category.active === true);

        if (activeCategory.length) {
            activeCategoryTasks = Object.values(allTasks).filter(task => task.parent === activeCategory[0].id);
        } else {
            activeCategoryTasks = Object.values(allTasks) || [{id: ''}];
        }

        const quantityAllTask = activeCategoryTasks.length;
        const quantityResolveTask = activeCategoryTasks.filter(task => task.checked === true).length;
        const quantity = (100/quantityAllTask)*quantityResolveTask;

        return isNaN(quantity) ? emptyCategoryValue : Math.floor(quantity);
    };

    getLineColor = (counter) => {
        if (counter <= 20) {
            return 'crimson';
        }
        if (counter < 50) {
            return '#ffef00';
        }
        if (counter < 80) {
            return '#00aaff';
        }
        if (counter > 80) {
            return '#30bf6e';
        }
    };

    render() {
        const {allTasks, allCategory} = this.props;
        const resolveCounter = this.getResolveTasksQuantity(allTasks, allCategory);

        return (
            <ProgressBarComponent counter={resolveCounter} color={this.getLineColor(resolveCounter)} />
        );
    }
}

export const ProgressBar = connect(
    state => ({
        allTasks: state.allTasks,
        allCategory: state.allCategory
    })
)(ProgressBarContainerComponent);