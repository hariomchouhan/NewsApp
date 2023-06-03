import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": "google-news-au",
            "name": "Google News (Australia)"
          },
          "author": "The Age",
          "title": "Former Cricket Australia executive guilty of sexually assaulting two men - The Age",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiiQFodHRwczovL3d3dy50aGVhZ2UuY29tLmF1L25hdGlvbmFsL3ZpY3RvcmlhL2Zvcm1lci1jcmlja2V0LWF1c3RyYWxpYS1leGVjdXRpdmUtZ3VpbHR5LW9mLXNleHVhbGx5LWFzc2F1bHRpbmctdHdvLW1lbi0yMDIzMDUzMS1wNWRjcXMuaHRtbNIBiQFodHRwczovL2FtcC50aGVhZ2UuY29tLmF1L25hdGlvbmFsL3ZpY3RvcmlhL2Zvcm1lci1jcmlja2V0LWF1c3RyYWxpYS1leGVjdXRpdmUtZ3VpbHR5LW9mLXNleHVhbGx5LWFzc2F1bHRpbmctdHdvLW1lbi0yMDIzMDUzMS1wNWRjcXMuaHRtbA?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-06-01T06:17:45+00:00",
          "content": null
        },
        {
          "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
          },
          "author": null,
          "title": "'Ashes summer can breathe life into Test cricket'",
          "description": "England's match against Ireland kicks off a hugely important summer for Test cricket and an incredibly exciting six-month period, says Jonathan Agnew.",
          "url": "http://www.bbc.co.uk/sport/cricket/65770035",
          "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/144C8/production/_129944138_gettyimages-1494596580.jpg",
          "publishedAt": "2023-06-01T05:22:16.7465236Z",
          "content": "England have won 10 of their 12 Tests since Brendon McCullum (left) became head coach with Ben Stokes (right) as captain\r\n<table><tr><th>England v Ireland</th></tr>\r\n<tr><td>Venue: Lord's Dates: 1-4 … [+6066 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
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
            <div className='col-md-4'>
        <NewsItem title="My Title" description="My desc" imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/144C8/production/_129944138_gettyimages-1494596580.jpg" newsUrl="TODO"/>
            </div>
            <div className='col-md-4'>
        <NewsItem title="My Title" description="My desc"/>
            </div>
            <div className='col-md-4'>
        <NewsItem title="My Title" description="My desc"/>
            </div>
            <div className='col-md-4'>
        <NewsItem title="My Title" description="My desc"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
