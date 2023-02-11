// import PropTypes from 'prop-types'


import React, { Component } from 'react'
import Newsitem from './Newsitem';

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            pages: 1,
            totalResults:20
        }
    }
   
    async componentDidMount() {
        let newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7e1aec59a251435dbe386f7ff6b7656f&page=${this.state.pages+1}&page=20&pagesize=6`;
        let newResponse = await fetch(newsUrl);
        let newResponseJson= await newResponse.json()
        console.log(newResponseJson);
        // console.log("state.articles: "+articles);
        this.setState({ articles: newResponseJson.articles })
        // console.log(this.state);
    }
    handleOnNext=async()=>{
        console.log("Next");
        if (this.state.pages + 1 > Math.ceil(this.state.totalResults /6)) {
        }
        else {
            // let url = `newsapi.org/v2/top-headlines?country=in&apiKey=7e1aec59a251435dbe386f7ff6b7656f&page=${this.state.pages + 1}`;
            // let data = await fetch(url);
            // let parsedData = await data.json()
            // console.log(parsedData);
            // this.setState({
            //     pages: this.state.pages + 1,
            //     articles: parsedData.articles
            let count=1;
            let newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7e1aec59a251435dbe386f7ff6b7656f&page=${this.state.pages+count++}$page=38&pagesize=6`;
        let newResponse = await fetch(newsUrl);
        let newResponseJson= await newResponse.json()
        console.log(newResponseJson);
        // console.log("state.articles: "+articles);
        this.setState({ articles: newResponseJson.articles, pages:this.state.pages+1
            })
        this.setState({
            pages:this.state.pages+1,
        })
    
    }
}
handleOnPrev = async () => {
    
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7e1aec59a251435dbe386f7ff6b7656f&page=${this.state.pages-1}$page=38&pagesize=6`;
let newResponse = await fetch(newsUrl);
let newResponseJson= await newResponse.json()
console.log(newResponseJson);
// console.log("state.articles: "+articles);
this.setState({ articles: newResponseJson.articles, pages:this.state.pages-1
    })
    
}

    render() {

        return (
            <>
                <div className="container my-3 mx-5">
                    <h2> Top headline of khabar duniya bhar ki</h2>
    
                    <div className="row">
                        
                    {this.state.articles?  this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} Link={element.url}
                                     />
                            </div>

                        }) : <Newsitem /> }

                    </div>
                    <div className='container d-flex justify-content-between'>
                    <button disabled ={this.state.pages<=1}type="button" className="btn btn-primary"  onClick={this.handleOnPrev}>&larr; prev</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleOnNext}>next &rarr; </button>
                    </div>
                    
                </div>
            </>
        )
    }
}
