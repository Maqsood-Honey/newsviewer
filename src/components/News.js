import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    async updatedNews() {
        this.props.setProgress(0)
        this.props.setProgress(3)
        this.props.setProgress(10)

        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb1c25305cfd4c2ea69e6ea4442cac98&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        this.props.setProgress(30)
        let parsedData = await data.json(data);
        this.props.setProgress(70)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.updatedNews();
    }
    nextButtonHandler = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updatedNews();
    }
    preButtonHandler = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updatedNews();

    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb1c25305cfd4c2ea69e6ea4442cac98&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        let parsedData = await data.json(data);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults });
    };

    render() {
        return (
            <div>
                <h1 className="text-center" style={{ margin: "30px 0px" }}>News Views - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((elem) => {
                                return (
                                    <div className="col-md-4" key={elem.url}>
                                        <NewsItem title={elem.title ? elem.title.slice(0, 44) : ""} desc={elem.description ? elem.description.slice(0, 88) : ""} imgUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} onClick={this.preButtonHandler} type='button' className="btn btn-primary">&larr; Previous</button>
                    <button disabled={this.state.page > Math.ceil(this.state.totalResults / (this.props.pageSize))}
                        onClick={this.nextButtonHandler}
                        type='button'
                        className="btn btn-primary">Next &rarr;</button>

                </div> */}
            </div>

        )
    }
}
