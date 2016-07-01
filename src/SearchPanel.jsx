import * as React from 'react'
import { IconButton } from './Buttons'

export const SearchPanel = React.createClass({
    render() {
        return (
            <div className="search-options">
                <div>
                    {this.props.children}
                </div>
                <div className="controls">
                    <IconButton icon="eraser" />
                    {' '}
                    <IconButton icon="search" />
                </div>
            </div>
        )
    }
})