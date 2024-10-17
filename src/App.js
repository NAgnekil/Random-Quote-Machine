import React, { Component } from 'react'

class QuoteMachine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: { text: '', author: '' }
    }
  }

  componentDidMount() {
    this.fetchQuote()
  }

  fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',

        headers: {
          'X-Api-Key': '8ZjPiNBsgLNOb5euM7HRxA==zkuz0s2GbPtLcHKm',

          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      const quoteData = data[0]

      this.setState({
        quote: { text: quoteData.quote, author: quoteData.author }
      })
    } catch (error) {
      console.error('Error fetching quote:', error)
    }
  }

  tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${this.state.quote.text}" - ${this.state.quote.author}`
    )}`

    window.open(tweetUrl, '_blank')
  }

  render() {
    return (
      <div id="body">
        <div id="quote-box" className="quote-box">
          <div id="text" className="quote-text">
            {this.state.quote.text}
          </div>
          <div id="author" className="quote-author">
            - {this.state.quote.author}
          </div>
          <button
            id="new-quote"
            className="new-quote-button"
            onClick={this.fetchQuote}
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            className="tweet-quote-button"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${this.state.quote.text}" - ${this.state.quote.author}`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    )
  }
}

export default QuoteMachine
