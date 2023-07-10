import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  //   articles = [
  // {"source":
  // {"id":"associated-press",
  // "name":"Associated Press"},
  // "author":"Hannah Fingerhut",
  // "title":"Iowa Supreme Court declines to reinstate strict abortion limits, but a new law could be coming - The Associated Press",
  // "description":"DES MOINES, Iowa (AP) — Abortion will remain legal in Iowa after the state's high court declined Friday to reinstate a law  that would have largely banned the procedure, rebuffing Republican Gov.",
  // "url":"https://apnews.com/article/iowa-abortion-law-260563ff773b721c8a51ef6cb2c4e3b8",
  // "urlToImage":"https://storage.googleapis.com/afs-prod/media/56f296f32bab445ea587d32ea6723391/3000.webp",
  // "publishedAt":"2023-06-16T18:00:00Z",
  // "content":"DES MOINES, Iowa (AP) Abortion will remain legal in Iowa after the states high court declined Friday to reinstate a law that would have largely banned the procedure, rebuffing Republican Gov. Kim Rey… [+5890 chars]"},
  // {"source":
  // {"id":"the-washington-post",
  // "name":"The Washington Post"},
  // "author":"Timothy Bella","title":"Reddit CEO Steve Huffman slams moderators amid blackout, compares them to aristocracy - The Washington Post","description":"Reddit CEO Steve Huffman slammed the unpaid volunteer moderators leading protests over the social media platform’s push to charge third-party apps for its data.",
  // "url":"https://www.washingtonpost.com/technology/2023/06/16/reddit-ceo-blackout-moderators-steve-huffman/",
  // "urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SDL4IEWTIYI6XM47AWRNO5VR6Q.jpg&w=1440",
  // "publishedAt":"2023-06-16T17:57:26Z",
  // "content":"Comment on this story\r\nComment\r\nReddit CEO Steve Huffman is slamming protesters who have made large parts of the website inaccessible this week, comparing the unpaid volunteer moderators leading the … [+6969 chars]"}
  // ,{"source":
  // {"id":null,
  // "name":"New York Post"},
  // "author":"Mary K. Jacob",
  // "title":"John Mayer's NYC apartment where he befriended Andy Cohen lists for rent - New York Post ",
  // "description":"Mayer’s former longtime home, a stylish residence where he solidified his friendship with Bravo titan Andy Cohen, can now be yours — for quite a cost.",
  // "url":"https://nypost.com/2023/06/16/john-mayers-former-nyc-apartment-lists-for-17500-month/",
  // "urlToImage":"https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-6hhxw9y1l-1686934856710.jpg?quality=75&strip=all&1686921421&w=1024",
  // "publishedAt":"2023-06-16T17:37:00Z","content":"The longtime Manhattan apartment of John Mayer is up for rent asking $17,500 per month, The Post has learned. \r\nMayer, 45, lived in this Soho apartment at 225 Lafayette St. from 2006 to 2013. \r\nBeyon… [+4201 chars]"}


  // ]

  constructor() {
    super();
    this.state = {
      articles: [],                 // this.articles
      loading: false,
      page: 1

    }
  };


  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=57a1b549603e4275973713820199e633&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=57a1b549603e4275973713820199e633&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState()

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }



  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=57a1b549603e4275973713820199e633&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState()

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles

      })

    }


  }










  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center news-text'>NewsMonkey- Top Headlines</h2>

        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}





        </div>


        <div className='container d-flex justify-content-between'>


          <button disabled={this.state.page <= 1} type='button' className='btn btn-color' onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}  type='button' className='btn btn-color' onClick={this.handleNextClick}>Next&rarr;</button>

        </div>

      </div>
    )
  }
}
