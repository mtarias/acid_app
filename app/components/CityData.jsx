import React from 'react'  
import TemperatureAvatar from './TemperatureAvatar'

class CityData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log(this.state.date.toLocaleTimeString())
    return(
        <div>
          <p>{this.state.date.toLocaleTimeString()}</p>
          <TemperatureAvatar />
          <h4 className="text-center">{this.props.cityname}</h4>
          <p className="text-center">{this.props.citytime}</p>
          <p className="text-center">{this.props.temperature}</p>
        </div>
    )
  }
}

export default CityData  