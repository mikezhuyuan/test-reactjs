import * as React from 'react'

export const PageTitle = React.createClass({
    PropTypes: {
        title: React.PropTypes.string
    },

    render() {
        return (
            <div className="page-title">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
})