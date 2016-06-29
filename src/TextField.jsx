import * as React from 'react'
import classNames from 'classnames'

export const TextField = React.createClass({
    propTypes: {
        label: React.PropTypes.string,
        error: React.PropTypes.string,
        required: React.PropTypes.bool
    },
    render() {
        let label = null
        let error = null

        if (this.props.label) {
            label = <label>{this.props.label}</label>
        }

        if (this.props.error) {
            error = (
                <span className="input-action tooltip-error">
                    <span className="cpa-icon cpa-icon-exclamation-triangle"></span>
                </span>
            )
        }

        return (
            <div ref={ref => this._container = ref}
                className={classNames('input-wrap', { required: this.props.required, error: Boolean(this.props.error) }) }
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                {label}
                <input
                    ref={ref => this._input = ref}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    type="text"
                    name="criteriaName"
                    required={this.props.required} />
                {error}
            </div>
        )
    },

    handleClick() {
        this._input.focus()
    },

    handleMouseEnter() {
        this._container.classList.add('input-wrap-hover')
    },

    handleMouseLeave() {
        this._container.classList.remove('input-wrap-hover')
    },

    handleBlur() {
        this._container.classList.remove('input-wrap-focus')
    },

    handleFocus() {
        this._container.classList.add('input-wrap-focus')
    }
})