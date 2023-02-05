// import PropTypes from 'prop-types'

import React, { Component } from 'react'
import Newsitem from './Newsitem';

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    async componentDidMount() {
        let newsUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7e1aec59a251435dbe386f7ff6b7656f";
        let newResponse = await fetch(newsUrl);
        let newResponseJson= await newResponse.json()
        console.log(newResponseJson);
        // console.log("state.articles: "+articles);
        this.setState({ articles: newResponseJson.articles })
        // console.log(this.state);
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
                                    description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage}
                                     />
                            </div>

                        }) : <Newsitem /> }

                    </div>
                </div>
            </>
        )
    }
}
