import React from 'react'  
import Temperature from './Temperature'
import Hour from './Hour'

class CityData extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return(
        <div className="row">
          <div className="col-md-6">
            <Temperature temperature={this.props.temperature}/>
          </div>
          <div className="col-md-6">
            <h4 className="text-center">{this.props.cityname}</h4>
            <Hour />
            <p className="text-center">{this.props.citytime}</p>
          </div>
        </div>
    )
  }
}

export default CityData  