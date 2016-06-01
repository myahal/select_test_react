import React from 'react'
import SelectContainer from './SelectContainer'

export default class FormBaseComponent extends React.Component {
  handleChanged(value) {
    console.log(value)
  }

  render() {
    const items = [
      {id: 0, label: 'Not Specified'},
      {id: 1, label: 'Firsts'}
    ]
    return (
      <div>
        <SelectContainer  items={items} changeHandler={this.handleChanged.bind(this)} />
      </div>
    )
  }
}
