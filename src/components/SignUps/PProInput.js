import React from 'react'
import ProInput from './ProInput'
function PProInput() {
    const proInputsData = [{name: 'restaurant name', id: 1}, {name: 'restaurant complete name', id: 2}, {name: 'mobile number', id: 3}, {name: 'mobile number', id: 4}, {name: 'owner names', id: 5}, {name: 'restaurant owner email', id: 6}, {name: 'restaurant type', id: 7, values: ['restaurant', 'pub', 'hotel', 'coffeeshop', 'other']}, {name: 'restaurant origin', id: 8, values: ['african', 'american', 'central asia', 'brazil']}, {name: 'from', id: 9}, {name: 'to', id: 10}, {name: 'Choose file', id: 11}, {name: 'Menu name', id: 12}, {name: 'rwf', id: 13}, {name: 'Choose image', id: 14}]
    const proInputs = proInputsData.map(proInputData=>{
        return <ProInput name={proInputData.name} key={proInputData.id} />
    })

  return (
    <div>
      {proInputs}
    </div>
  )
}

export default PProInput
