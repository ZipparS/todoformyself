import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import { Input } from '../../elements/inputs';
import './new-subcategory.css';

export class NewSubCategoryComponent extends Component {
    render() {
        const {
            subCategoryValue,
            onSubCategoryValueChange,
            buttonDisabled,
            onCreateSubCategory
        } = this.props;
        const buttonText = 'create';

        return (
            <div className="New-subcategory">
                <div className="New-subcategory__inner">
                    <h3 className="New-subcategory__heading">
                        Create new subcategory
                    </h3>
                    <div className="New-subcategory__content">
                        <Input
                            id="new-subcategory-name"
                            label="Subcategory name"
                            value={subCategoryValue}
                            onChange={onSubCategoryValueChange}
                        />
                    </div>
                    <div className="New-subcategory__action">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={onCreateSubCategory}
                            disabled={buttonDisabled}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
