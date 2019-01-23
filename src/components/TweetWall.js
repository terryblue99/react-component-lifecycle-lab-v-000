import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // save the first lot of newTweets into the state
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }
  // only rerender when there are new tweets
  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length > 0;
  }
  // update the state to incorporate new tweets
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [
        ...nextProps.newTweets, 
        ...this.state.tweets
      ]
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
