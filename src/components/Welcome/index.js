// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  subscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  btnTxt = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.btnTxt()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="sub-heading">Thank you! Happy Learning</h1>
        <button className="button" type="button" onClick={this.subscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
