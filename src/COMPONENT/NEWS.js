import React, { Component } from 'react'
import NEWSITEM from './NEWSITEM.js'
import image from './IMAGE.js'
import SPINER from './SPINER.js';
// import IMAGE from './IMAGE.js';

export default class NEWS extends Component {
    
    constructor(){
        super();
        this.state = {
            article : this.articles,
            loding : true,
            page : 1
        }
    }

    async updateNews(){
        if (this.props.category) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d2e4a19327c64e4992b56bff699af093&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loding : true});
            let data = await fetch(url);
            let parceData = await data.json ();
            this.setState({
                article : parceData.articles,
                totalResults : parceData.totalResults,
                loding : false,
            });
            console.log("category news data------------------------->", parceData);
        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d2e4a19327c64e4992b56bff699af093&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loding : true});
            let data = await fetch(url);
            let parceData = await data.json ();
            this.setState({
                article : parceData.articles,
                totalResults : parceData.totalResults,
                loding : false,
            });
            console.log("category news data------------------------->", parceData);
        }
    }

    handlerPreviousClick = async () => {
        console.log("click Previous");
        this.setState(
            () => ({page : this.state.page - 1}),
            () => this.updateNews()
        );
        // console.log("previous parcedata --------------------------------->",JSON.stringify(parceData));   
    }

    handlerNextClick = async () => {
        console.log("click Next");
        this.setState(
            () => ({page : this.state.page + 1}),
            () => this.updateNews()
        );
        // console.log("previous parcedata --------------------------------->",JSON.stringify(parceData));
    }

    async componentDidMount(){
        this.updateNews();
    }
    
    render() {
        return (
            <div className='container my-3'>
                <h1>This is a News Component</h1>
                <div className="container">
                    <h2>Class component News - Headlines</h2>
                    {this.state.loding && <SPINER/>}
                    <div className="row">
                        {!this.state.loding && this.state.article.map((element) => {
                            return <div className="col-sm-4" key={element.url}>
                                <NEWSITEM
                                    title={element.title ? element.title.slice(0, 47)+"..." : "element.title is null"} 
                                    description={element.description ? element.description.slice(0, 80) : "element.description is null"}
                                    imageUrl={element.urlToImage? element.urlToImage : image.dummy }
                                    newsUrl={element.url}/>
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-primary" type="button" onClick={this.handlerPreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-primary" type="button" onClick={this.handlerNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
} 