
import React, {Component} from 'react';
import {Button} from 'reactstrap'

import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props)
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'},
        ]
    }


    render() {
        const buttons = this.buttons.map(({name, label} ) => {
            const {filter, onFilterSelect} = this.props
            const active = filter === name
            const color = active ? 'info' : 'secondary'
            return (
                <Button 
                    key = {name} 
                    outline color={color}
                    onClick={() => onFilterSelect(name)}
                    >{label}</Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
