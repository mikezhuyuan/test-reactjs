import * as React from 'react'

export const IconButton = React.createClass({
    propTypes: {
        icon: React.PropTypes.string
    },
    render() {
        return (
            <button type="button" className="btn btn-icon">
                <span className={`cpa-icon cpa-icon-${this.props.icon}`}></span>
            </button>
        )
    }
})