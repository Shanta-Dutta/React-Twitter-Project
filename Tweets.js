import React, {Component} from 'react';
import '../css/Tweet.css'

// import PropTypes from 'prop-types';
// const GENERIC_Tweets_USERNAME = "Username", GENERIC_Tweets_BODY = "Body", GENERIC_Tweets_TIMESTAMP = "Timestamp"; 
class Tweets extends Component {
    // // ignore constructor method for now
  constructor(props) {
    super(props);
    this.usernameContent = React.createRef();
    this.bodyContent = React.createRef();
    this.timestampContent = React.createRef();

    // this.state = {
    //   username: GENERIC_Tweets_USERNAME,
    //   body: GENERIC_Tweets_BODY,
    //   timestamp: GENERIC_Tweets_TIMESTAMP,
    //   editMode: false
    // }

// count is added to the state for the incrementMe (like button)
this.state = {
  count: 0,
  didLike: false
}
}
// function used to delete tweets
handleDelete() {
this.props.deleteHandler(this.props.id);
}
// function for the like button incrementor (increases likes); also makes it so you can only like your post once 
incrementMe = () => {
if(this.state.didLike === false){
let newCount = this.state.count + 1;
this.setState({
  count: newCount,
  didLike: true
});
} else {
let newCount = this.state.count - 1;
this.setState({
  count: newCount,
  didLike: false
});
}
};
   
  // handleSave() {
  //   this.setState({
  //     username: this.usernameContent.current.value,
  //     body: this.bodyContent.current.value,
  //     timestamp: this.timestampContent.current.value,
  //     editMode: false
  //   });
  // }
  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
  
//   // render method return JSX
render(){
    let usernameElement, bodyElement, timestampElement, buttonArea,likeButton,likeDisplay; 
    // if (this.state.editMode){
    //   usernameElement = <textarea ref={this.usernameContent} className="username-textarea" defaultValue={this.state.username}></textarea>;
    //   bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
    //   timestampElement = <textarea ref={this.timestampContent} className="timestamp-textarea" defaultValue={this.state.timestamp}></textarea>;
    //   buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
    // }
    // else{
      usernameElement = <h5 className="card-username">{this.props.username}</h5>;
      bodyElement = <p>{this.props.body}</p>; 
      timestampElement = <p>{this.props.timestamp}</p>;
      buttonArea = <div>
      <button className="btn btn-danger col-sm-6" onClick={this.handleDelete.bind(this)}>Delete</button>
      </div>;
    // }


    likeButton = (
      <div>
        <button onClick={this.incrementMe} className="like-btn"></button>
      </div>
    );
    likeDisplay = (
      <div className="like">
        <span>Likes: {this.state.count}</span>
      </div>
    );
    return (
      <div>
        {/* <div className="card card-view">
          <div className="card-synopsis"> */}
              
                {bodyElement}
                {timestampElement}
                {buttonArea}
                {usernameElement}
                {likeButton}
                {likeDisplay}
          </div>
    //      </div>
    //  </div>
     );
  }
}
// Tweets.defaultProps = {
//     username: "Username",
//    body: "Body",
//     timestamp: "Timestamp",
//   };
//   Tweets.propTypes = {
//     username: PropTypes.string
//   };
export default Tweets;