import React from 'react'
import SelectContainer from './SelectContainer'

export default class FormBaseComponent extends React.Component {
  renderOption(items){
    return items.map((item) => {
      return(
        <option key={item.id} value={item.id}>{item.label}</option>
      )
    })
  }
  handleChange(e) {
    let id = e.target.options.selectedIndex
    let value = e.target.options[id].value
    this.props.changeHandler(value)
  }
  render() {
    console.log(this.props)
    return (
      <select ref="menu" onChange={this.handleChange.bind(this)}>
        {this.renderOption(this.props.items)}
      </select>
    )
  }
}
