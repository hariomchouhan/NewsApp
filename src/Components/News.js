import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("Jay Shri Ram!");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
      console.log("cdm");
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4693e3d3f538474588af0b22180e54fa"
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=> {
         return <div className='col-md-4' key={element.url} >
         <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
