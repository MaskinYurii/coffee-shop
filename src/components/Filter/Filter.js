import React from 'react';

import './Filter.scss'
function Filter(props) {

    const buttonsData = [
        {name: 'all', label: 'All'},
        {name: 'brazil', label: 'Brazil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'}
    ]
    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn_active' : ''
            return (
                <button
                    className={`btn ${clazz}`}
                    key={name}
                    type='button'
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
                </button>
            )
    })
    return (
        <div className='filter'>
            <label>Or filter</label>
            <div className="filter__btns">
                {buttons}
            </div>
        </div>
    );
}

export default Filter;