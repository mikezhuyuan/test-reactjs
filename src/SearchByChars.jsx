import * as React from 'react'
import { TextField } from './TextField'

export const SearchByChars = React.createClass({
    render() {
        return (
            <div>
                <h5>Characteristics</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <TextField label="Office" />
                        <TextField label="Case Type" />
                        <TextField label="Jurisdiction" />
                        <TextField label="Property Type" />
                        <TextField label="Date of Law" />                    
                    </div>
                    <div className="col-sm-6">
                        <TextField label="Action" />
                        <TextField label="Case Category" />
                        <TextField label="Sub Type" />
                        <TextField label="Basis" />
                        <TextField label="Local or Foreign" />                    
                    </div>
                </div>
            </div>
        )
    }
})