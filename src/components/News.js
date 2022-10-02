import React from "react";
import { useEffect,useState } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props) => {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  // document.title = `${capitalizeFirstLetter(props.category)}-GetNews`;





 const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 
   const updateNews=async()=> {
    {props.setProgress(10)}
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2433df45d0594c8d94ab8cbc8b35015a&page=${page}&pageSize=${props.pageSize}`;
 
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();


    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    {props.setProgress(100)}

  }

useEffect(()=>{
 updateNews();
},[])



  

 
  const fetchMoreData = async () => {
    
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2433df45d0594c8d94ab8cbc8b35015a&page=${page}&pageSize=${props.pageSize}`;
      setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setLoading(parsedData.totalResults)
    setLoading(true)
    
  };





  
    return (
      <>
        <h1 className="text-center">News-- Top Headlines
         on {capitalizeFirstLetter(props.category)} </h1>
        {loading && <Spinner />}.
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        
        <div className="container">
        <div className="row">
       
          
          {
           articles.map((element) => {
             return <div className="col-md-4">
                   <Newsitems
                    key={element.url}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              
            })}
        </div>
        </div>
        </InfiniteScroll>
        
   
   </>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
