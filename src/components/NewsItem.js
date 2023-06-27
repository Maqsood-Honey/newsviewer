import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card" >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>
                    {source}
                </span>

                <img src={!imgUrl ? 'https://images.moneycontrol.com/static-mcnews/2023/06/Healthy-diet-tips-Foods-rich-in-omega-3-fatty-acids-770x433.jpg' : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{desc}...</p>
                    <p className='card-text'> <small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small> </p>
                    <a href={newsUrl} rel="noopener" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}
