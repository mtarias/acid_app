import React from 'react'  
import CityData from './CityData'

class CityList extends React.Component {

  render() {
    return (
      <div className="row">
        
        {
          this.props.cities.map((city) => {
            return (<div className="col-xs-6 col-md-3">
                      <CityData key={ city.id } cityname={ city.cityname } weather={ city.weather } citytime={ city.citytime } temperature={ city.temperature } />
                  </div>
            )
          })
        }
      </div>
    )
  }
}

export default CityList  