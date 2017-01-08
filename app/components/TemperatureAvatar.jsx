import React from 'react'

class Temperature extends React.Component {  
  render() {
      return (
      <figure className="media-center">
        <img className="text-center" width="64px" src={`http://wfarm3.dataknet.com/static/resources/icons/set33/3eefc80d.png`} />
      	<p className="text-center">{this.props.temperature}</p>
      </figure>
    )
  }
}

export default TemperatureAvatar