import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NewSubCategoryComponent } from './new-subcategory';
import { actionType } from '../../actions/action-type';

class NewSubcategoryContainerComponent extends Component {
    state = {
        catName: ''
    };

    handleSubCategoryValueChange = (event) => this.setState({catName: event.target.value});

    handleCreateSubCategory = () => {
        const { catName } = this.state;
        const { match, createSubCategory } = this.props;
        const NewSubCategory = { name: catName, parent: match.params.catId };

        createSubCategory(NewSubCategory);
        this.setState({catName: ''});
    };

    render() {
        const { catName } = this.state;
        const isButtonDisabled = catName === '';

        return (
            <NewSubCategoryComponent
                subCategoryValue={catName}
                onSubCategoryValueChange={this.handleSubCategoryValueChange}
                buttonDisabled={isButtonDisabled}
                onCreateSubCategory={this.handleCreateSubCategory}
            />
        );
    }
}

export const NewSubcategory = connect(null,
    dispatch => ({
        createSubCategory: newSubCategory => dispatch({type: actionType.CREATE_CATEGORY, payload: newSubCategory})
    })
)(NewSubcategoryContainerComponent);