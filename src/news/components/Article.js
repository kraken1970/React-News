import React, { Component, PureComponent } from "react";
// import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";
import CommentList from "./CommentList";

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired, //isRequired - обязательное поле
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  state = {
    updateIndex: 0
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    console.log("---", "update article");
    return (
      <div ref={this.setContainerRef}>
        <h2>{article.title}</h2>
        <button onClick={toggleOpen}>{isOpen ? "close" : "open"}</button>
        {this.getBody()}
      </div>
    );
  }

  setContainerRef = ref => {
    this.container = ref;
    // console.log("---", ref);
  };

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <p>
          <button
            onClick={() =>
              this.setState({ updateIndex: this.state.updateIndex + 1 })
            }
          >
            update
          </button>
        </p>

        <CommentList
          comments={article.comments}
          ref={this.setCommentRef}
          key={this.state.updateIndex}
        />
      </section>
    );
  }

  setCommentRef = ref => {
    // console.log("---", ref);
  };
}

export default Article;
