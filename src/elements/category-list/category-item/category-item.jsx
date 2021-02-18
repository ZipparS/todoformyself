import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { ButtonIcon as IconButton, MoreButton, EditButtonGroup } from '../../buttons';

export class CategoryItem extends Component {
    static defaultProps = {
        categoryName: 'TestCategory'
    };

    render() {
        const {
            categoryName, handleInputBlur, hasShowChild, hasChild, hasEditCategory,
            onConfirm, onAbortEdit, onEdit, onCreate, onRemove, onClick, onShowChild,
            styleClasses, withRef, withInputRef
        } = this.props;
        const iconType = hasShowChild ? 'arrow_drop_up' : 'arrow_drop_down';
        const menuItems = [
            {titel: 'create', onClick: onEdit, disabled: false},
            {titel: 'add', onClick: onCreate, disabled: false},
            {titel: 'delete', onClick: onRemove, disabled: hasChild}
        ];

        return (
            <div
                className={styleClasses}
                onClick={onClick}
                ref={withRef}
                tabIndex={0}
            >
                <div className="Category-item__left">
                    {
                        hasChild && <IconButton onClick={onShowChild} titel={iconType} />
                    }
                    <div className="Category-item__name-box">
                        <InputBase
                            defaultValue={categoryName}
                            inputProps={{'aria-label': 'Description'}}
                            onBlur={handleInputBlur}
                            onFocus={this.handleFocus}
                            readOnly={!hasEditCategory}
                            inputRef={withInputRef}
                        />
                    </div>
                </div>
                <div className="Category-item__right">
                    {
                        hasEditCategory
                            ? <EditButtonGroup onConfirm={onConfirm} onAbortEdit={onAbortEdit} />
                            : <MoreButton menuItems={menuItems} />
                    }
                </div>
            </div>
        );
    }
}
