import React from 'react'

class Hour extends React.Component {

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
    return(
        <div>
          <p className="text-center">{this.state.date.toLocaleTimeString()}</p>
        </div>
    )
  }
}

export default Hour  