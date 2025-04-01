import React, { Component } from 'react'
import NEWSITEM from './NEWSITEM.js'

export default class NEWS extends Component {
    articles = [
        {
            source: {
                id: "bbc-sport",
                name: "BBC Sport"
            },
            author: null,
            title: "Champions Trophy Final LIVE: India vs New Zealand – cricket score, radio, highlights & updates",
            description: "India face New Zealand in the Champions Final in Dubai - follow live cricket scores, text updates, in-play video clips and radio commentary",
            url: "http://www.bbc.co.uk/sport/cricket/live/c1lv2p7nnmzt",
            urlToImage: "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/6f47/live/1c0a1cd0-fac9-11ef-9e61-71ee71f26eb1.jpg",
            publishedAt: "2025-03-09T08:37:16.8044905Z",
            content: "That's right, it's Champions Trophy final day as India take on New Zealand at Dubai International Stadium.\r\nAfter going 11 years with winning an ICC event, Rohit Sharma's side can make it two in two … [+245 chars]"
        },
        {
            source: {
                id: "espn-cric-info",
                name: "ESPN Cric Info"
            },
            author: null,
            title: "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            description: "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            publishedAt: "2020-04-27T11:41:47Z",
            content: "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            source: {
                id: "espn-cric-info",
                name: "ESPN Cric Info"
            },
            author: null,
            title: "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            description: "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            urlToImage: "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            publishedAt: "2020-03-30T15:26:05Z",
            content: "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    
    constructor(){
        super();
        console.log("Hello i am a constructor from news component");
        this.state = {
            article : this.articles,
            loding : false,
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>This is a News Component</h1>
                <div className="container">
                    <h2>Class component News - Headlines</h2>
                    <div className="row">
                        {this.state.article.map((element) => {
                            return <div className="col-sm-4">
                                <NEWSITEM
                                    title={element.title.length >= 47? element.title.slice(0, 47)+"..." : element.title} 
                                    description={element.description.length >= 80 ? element.description.slice(0, 80)+"..." : element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
} 