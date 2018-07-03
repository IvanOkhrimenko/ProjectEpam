import React from "react";
import { render } from "react-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class PostList1 extends React.Component {
  state = {
    
    hasMore: true,
    posts: [],
    items:[],
    count:20,
    a:0
  };

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }, () => console.log('Customers fetched...', posts)));
      
  }

  // componentWillUpdate() {
  //   this.setState({ items:this.state.posts.slice(0,20)});
  // }
  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        a:this.state.count,
        count:this.state.count+20,
        items: this.state.items.concat(this.state.posts.slice(this.state.a, this.state.count))
      });
    }, 500);
  };

  render() {
    if(this.state.posts.length===0|| this.state.posts== undefined ){
      console.log('safdsas')
    }
    // let item = this.state.posts.slice(0,20);

    console.log(this.state.posts[2])
    return (
      <div>
        <h1>demo: react-infinite-scroll-component</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={400}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostList1;
