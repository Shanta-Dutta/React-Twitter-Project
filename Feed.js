import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import Tweets from './Tweets';
import '../css/Feed.css';
// import  Navbar  from './Nav';

// import Sidebar from './components/Sidebar';

const GENERIC_Tweets_USERNAME = "Username", GENERIC_Tweets_BODY = "Body", GENERIC_Tweets_TIMESTAMP = "Timestamp"; 



class Feed extends Component {
    // // constructor method available to us in class components
  constructor() {
    super();
    this.state = {
      tweets: [],

    username: GENERIC_Tweets_USERNAME,
    body: GENERIC_Tweets_BODY,
    timestamp: GENERIC_Tweets_TIMESTAMP,
    editMode: false
  

    }
  }
  addTweets = () => {
  this.setState({
      tweets: this.state.tweets.concat({  id: Date.now(), body: this.state.body }),
      body: ''
    });
    this.inputEntry.value = "";

}
//     this.setState(
//       {
//         tweets: this.state.tweets
//       }
//     );
//   }
// handleTweet(event){
// this.state.setState({body: event.target.value})

// }

handleTweet = (event) => {
  this.setState({body:event.target.value});
}

  deleteTweets(id){
    let newTweetsArr = this.state.tweets;
    newTweetsArr.map((tweets, index) => {
      if (id === tweets.id) {
           newTweetsArr.splice(index,1);
      }
    });
    this.setState(
      {
        tweets: newTweetsArr
      }
    );
  }
  // // render method - render what is returned (JSX) onto the browser
render() {
    return (
      <div  id="container">
        {/* <div className="div-board"> */}
          {/* <div className="row"> */}
          <div className='col-sm-8'>
          
              <input  onChange= {this.handleTweet}  placeholder="Write here"   ref={el => this.inputEntry = el}></input>
            
               {/* {this.state.description} */}
               <button className="btn"  id="add-button" onClick={this.addTweets.bind(this)}>Tweet</button> 
           
            </div>
            <div>
          {/* </div> */}
            {
              this.state.tweets.reverse().map(tweets => {
                return <Tweets key={tweets.id} id={tweets.id} deleteHandler={this.deleteTweets.bind(this)}  body={tweets.body}/>
              })
            }
          </div>
        </div>
      // </div>
    );
  }
}




export default Feed;