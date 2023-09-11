// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    min2: 24,
    mins: 25,
    sec2: 59,
    seconds: 0,
    timerlimit: 25,
    startState: true,
  }

  //   componentDidMount() {

  //   }

  onPlusClick = () => {
    const {timerlimit, startState} = this.state
    if (startState) {
      const newtimerlimit = timerlimit + 1
      this.setState({
        timerlimit: newtimerlimit,
        mins: newtimerlimit,
        min2: newtimerlimit - 1,
        seconds: 0,
        sec2: 59,
      })
    }
  }

  onmiusClick = () => {
    const {timerlimit, startState} = this.state
    if (startState) {
      const newtimerlimit = timerlimit - 1
      this.setState({
        timerlimit: newtimerlimit,
        mins: timerlimit,
        min2: newtimerlimit,
        seconds: 0,
        sec2: 59,
      })
    }
  }

  onclickStart = () => {
    const {startState} = this.state
    this.setState({startState: !startState})
    if (startState) {
      this.timeId = setInterval(this.click, 1000)
      //   this.setState({mins: mins - 1})
    } else {
      clearInterval(this.timeId)
    }
  }

  click = () => {
    // const {mins, sec2} = this.state
    // const sec = sec2 - 1
    // this.setState({mins: mins, seconds: sec, sec2: sec})
    const {sec2, min2} = this.state
    let min
    let sec
    if (sec2 === 0) {
      min = min2 - 1
      sec = 59
    } else {
      min = min2
      if (sec2 > 0) {
        sec = sec2 - 1
      }
    }
    this.setState(prevState => ({
      min2: min,
      mins: min,
      seconds: sec,
      sec2: sec,
    }))
  }

  resetClick = () => {
    // const {timerlimit} = this.state
    this.setState({
      min2: 24,
      mins: 25,
      sec2: 59,
      seconds: 0,
      timerlimit: 25,
      startState: true,
    })
    clearInterval(this.timeId)
  }

  render() {
    const {seconds, mins, timerlimit, startState} = this.state
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    const stringifiedMinutes = mins > 9 ? mins : `0${mins}`
    return (
      <div className="bg-main-container">
        <h1>Digital Timer</h1>
        <div className="bg-container1">
          <div className="bg-mini-container1">
            <div className="bg-mini-container11">
              <h1 className="time-para">
                {stringifiedMinutes}:{stringifiedSeconds}
              </h1>
              <p className="paused-para">{startState ? 'Paused' : 'Running'}</p>
            </div>
          </div>
          <div>
            <div className="bg-container12">
              <div className="start-container">
                <img
                  alt={startState ? 'play icon' : 'pause icon'}
                  className="start-img"
                  src={
                    startState
                      ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                  }
                />
                <button
                  onClick={this.onclickStart}
                  type="button"
                  className="start-para"
                >
                  {startState ? 'Start' : 'Pause'}
                </button>
              </div>
              <div className="start-container">
                <img
                  alt="reset icon"
                  className="start-img"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                />
                <button
                  onClick={this.resetClick}
                  type="button"
                  className="start-para"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="bg-container2">
              <p className="set-para">Set Timer limit</p>
              <div className="bg-container13">
                <button
                  onClick={this.onmiusClick}
                  type="button"
                  className="minus-btn"
                >
                  -
                </button>
                <p className="time-para2">{timerlimit}</p>
                <button
                  onClick={this.onPlusClick}
                  type="button"
                  className="minus-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
