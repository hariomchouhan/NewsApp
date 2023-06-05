import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

    constructor(props){
        super(props);
        // console.log("Jay Shri Ram!");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    }

    capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4693e3d3f538474588af0b22180e54fa&page=1&pageSize=${this.props.pageSize}`
      
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      
      // console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrevClick = async() => {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4693e3d3f538474588af0b22180e54fa&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({loading: false})

      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
    }
    
    handleNextClick = async() => {
      if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4693e3d3f538474588af0b22180e54fa&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false})
        
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
        })
      }
    }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: "35px 0px"}}>NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=> {
         return <div className='col-md-6 col-lg-4' key={element.url} >
         <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} Source={element.source ? element.source.name: ""}/>
             </div>
        })}
        </div>
        <hr />
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
