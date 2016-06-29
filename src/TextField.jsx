import * as React from 'react'
import classNames from 'classnames'

export class TextField extends React.Component {
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
            <div ref={ref => this._container = ref} onClick={this.handleClick.bind(this) } onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} className={classNames('input-wrap', { required: this.props.required, error: Boolean(this.props.error) }) }>
                {label}
                <input ref={ref => this._input = ref} onBlur={this.handleBlur.bind(this)} onFocus={this.handleFocus.bind(this)}  type="text" name="criteriaName" required={this.props.required} />
                {error}
            </div>
        )
    }

    handleClick() {
        this._input.focus()
    }

    handleMouseEnter() {
        this._container.classList.add('input-wrap-hover')
    }

    handleMouseLeave() {
        this._container.classList.remove('input-wrap-hover')
    }

    handleBlur() {
        this._container.classList.remove('input-wrap-focus')
    }

    handleFocus() {
        this._container.classList.add('input-wrap-focus')
    }
}