import React, {Component} from 'react';

import './SearchPanel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <div className="search-panel">
                <label htmlFor="search-panel__input">Lookiing for</label>
                <input type="text"
                       id="search-panel__input"
                       className="search-panel__input"
                       placeholder="start typing here..."
                        value={this.state.term}
                        onChange={this.onUpdateSearch}/>
            </div>
        );
    }
}

export default SearchPanel;