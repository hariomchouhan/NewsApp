import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
      {
        "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
        },
        "author": null,
        "title": "FA Cup final build-up, plus latest football transfer news",
        "description": "All the news before the FA Cup final between Manchester United and Manchester City, plus all the latest transfer news and breaking stories.",
        "url": "http://www.bbc.co.uk/sport/live/football/65777009",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2023-06-02T06:07:24.4218233Z",
        "content": "It is FA Cup final Eve!\r\nWe are going to be building up to a huge clash at Wembley between Manchester City and Manchester United on Saturday.\r\nWe'll be breaking everything down and asking for all you… [+169 chars]"
      },
      {
        "source": {
          "id": "cbc-news",
          "name": "CBC News"
        },
        "author": "CBC News",
        "title": "Industry knew about risks of PFAS 'forever chemicals' for decades before push to restrict them, study says | CBC News",
        "description": "Makers of PFAS, a class of chemicals used in everything from cookware to food containers and makeup, knew the substances were toxic as early as the 1970s and obscured the danger, according to a new study based on industry archives held at the University of Ca…",
        "url": "http://www.cbc.ca/news/science/pfas-3m-dupont-study-1.6862883",
        "urlToImage": "https://i.cbc.ca/1.6862913.1685672538!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/weather-feature-20230402.JPG",
        "publishedAt": "2023-06-02T06:07:21.7037503Z",
        "content": "Makers of PFAS, a class of chemicals used in everything from cookware to food containers and makeup, had evidence the substances were toxic as early as the 1970s and obscured the danger, according to… [+6276 chars]"
      },
      {
        "source": {
          "id": "bbc-news",
          "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Elon Musk: Twitter boss reclaims title of world's richest person",
        "description": "It comes after shares in his electric car company Tesla have almost doubled since the start of the year.",
        "url": "http://www.bbc.co.uk/news/business-65781534",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/835A/production/_129962633_gettyimages-1255034481.jpg",
        "publishedAt": "2023-06-02T06:07:21.5475385Z",
        "content": "Elon Musk has reclaimed his title as the world's richest person, knocking the boss of luxury goods giant LMVH, Bernard Arnault, off the top spot. \r\nHis net worth has soared by $55.3bn (£44.44bn) sinc… [+1728 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Manish Singh",
        "title": "Puneet Chandok, AWS India and South Asia head, has resigned",
        "description": "Puneet Chandok, the head of AWS in India and South Asia, has resigned and will leave the firm in August, according to sources.",
        "url": "https://techcrunch.com/2023/06/01/puneet-chandok-aws-india-and-south-asia-head-has-resigned/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1356696981.jpg?resize=1200,885",
        "publishedAt": "2023-06-02T06:06:27Z",
        "content": "Puneet Chandok, the head of AWS in India and South Asia, has resigned, according to two sources familiar with the matter, a surprise move just weeks after the cloud giant pledged to invest over $12 b… [+1130 chars]"
      }
      ]
    constructor(){
        super();
        console.log("Jay Shri Ram!");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey Headlines</h2>
        
        <div className='row'>
        {this.state.articles.map((element)=> {
         return <div className='col-md-4' key={element.url} >
         <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
