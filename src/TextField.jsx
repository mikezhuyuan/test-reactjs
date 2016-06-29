import * as React from 'react'
import classNames from 'classnames'

export class TextField extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this) 
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
    }
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
            <div ref={ref => this._container = ref} onClick={this.handleClick } onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className={classNames('input-wrap', { required: this.props.required, error: Boolean(this.props.error) }) }>
                {label}
                <input ref={ref => this._input = ref} onBlur={this.handleBlur} onFocus={this.handleFocus}  type="text" name="criteriaName" required={this.props.required} />
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

TextField.propTypes = {
    label: React.PropTypes.string,
    required: React.PropTypes.bool
};