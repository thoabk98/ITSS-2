import React, { Component } from 'react'
import axios from 'axios'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'
JavascriptTimeAgo.locale(en)
class News extends Component{
  constructor(){
    super()
    this.state = {
      news: []
    }
  }
  componentWillMount(){
    axios.get('http://newsapi.org/v2/top-headlines?country=jp&q=%E3%82%B3%E3%83%AD%E3%83%8A&apiKey=8c054655f3634c11bab3ea4a251566b4')
         .then(res => {
          this.setState({ news : res.data })
        })
  }
  render(){
    const { articles } = this.state.news
    return(
      <div id="news">
      { articles && articles.map((article, index) => {
        return(     
          <div className="card mb-3" key={ index }>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={`${article.urlToImage}`} className="card-img" alt=""></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <a href = {`${article.url}`}>
                    <h5 className="card-title">{article.title}</h5>
                  </a>
                  <p className="card-text">{article.description}</p>
                  <p className="card-text"><small className="text-muted">Last updated <ReactTimeAgo date={ article.publishedAt }/></small></p>
                </div>
              </div>
            </div>
          </div>
        )})
      }
      </div>
    )
  }
}
export default News;