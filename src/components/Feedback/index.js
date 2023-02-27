// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: true}

  changeState = () => this.setState({clicked: false})

  emojiRender = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?{' '}
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachItem => (
            <li key={eachItem.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.changeState}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji"
                />
                <br />
                <span className="emoji-name">{eachItem.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedBack = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You</h1>
        <p className="description">
          {' '}
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {clicked} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {clicked ? this.emojiRender() : this.feedBack()}
        </div>
      </div>
    )
  }
}
export default Feedback
