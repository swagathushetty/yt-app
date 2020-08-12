import React from 'react'

class SearchBar extends React.Component {
    state={ inputText:'' }

    onInputChange=(event)=>{
        this.setState({inputText:event.target.value})
    }

    onFormSubmit=(e)=>{
        e.preventDefault()
        this.props.onFormSubmit(e.target.search.value)

    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                   <div className="field">
                       <label >Video Search</label>
                        <input type="text"
                        name="search"
                         value={this.state.inputText} 
                         onChange={this.onInputChange} />
                   </div>
                </form>
            </div>
        )
    }
}


export default SearchBar