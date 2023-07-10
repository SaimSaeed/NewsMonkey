import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
      <div className="card card-color" style={{width:'18rem'}}>
      <img src={!imageUrl?'https://image.cnbcfm.com/api/v1/image/106936883-16306077892021-09-02t183230z_1545484744_rc2uhp968592_rtrmadp_0_space-exploration-virgingalactic.jpeg?v=1686933180&w=1920&h=1080':imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}
