import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'



function News(props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)
   
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
    
    

//     const handlePrevClick= async () =>{
//         console.log("Previous")
//         let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=props.apiKey&page=${page-1}&pageSize=${props.pageSize}`;
//         setLoading(true)
//         let data=await fetch(url)
//         let parseddata= await data.json()
//         console.log(parseddata)
//         setPage(page-1)
//         setArticles(parseddata.articles)
//         setLoading(false)
//     }

//     const handleNextClick=async()=> {
//         console.log("Next");
//      if (page + 1 > Math.ceil(totalResults /props.pageSize)) {
//         return
//      }
//       else{  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=bafafbe5973c4608a89910dffee3c87f&page=${page+1 }&pageSize=${props.pageSize}`;
//        setLoading(true)
//         let data = await fetch(url);
//         let parseddata = await data.json()
//         console.log(parseddata);
//         setPage(page+1)
//         setArticles(parseddata.articles)
//         setTotalResults(parseddata.totalResults)
//        // setLoading(false)
//      }

    
// }

const fetchMoreData = async () => {
    
       
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const response=await fetch(`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.lang}&country=${props.country}&max=38&apikey=${props.apiKey}`)
      //  const response = await fetch(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
        //const response=await fetch("SampleOutput.json")
        // setLoading(true)
        setPage(page+1)
        const data = await response.json();
        setArticles(articles.concat(data.articles)); // Assuming your JSON has an "articles" key
        setTotalResults(data.totalResults)
        // if(articles.length>=totalResults){
         //setLoading(false)
        //}
    } 



   
        // Function to fetch data from output.json
        const fetchData = async () => {
                const proxyUrl = "https://cors-anywhere.herokuapp.com/"
                props.setProgress(10)
                const response=await fetch(`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.lang}&country=${props.country}&max=38&apikey=530b3761c7992af4b4e71bb5a4d263ca`)
                //const response = await fetch(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`);
                //const response=await fetch("SampleOutput.json")
                setLoading(true)
                props.setProgress(30)
                setPage(page)
                const data = await response.json();
                props.setProgress(70)
                setArticles(data.articles); // Assuming your JSON has an "articles" key
                setTotalResults(data.totalResults)
                setLoading(false)
                props.setProgress(100)
                
            } 
            
        useEffect(() => {
        fetchData();
    }, []);

    document.title=`${props.category}`


    
    return (
        <div className='container my-3'>
            <h2 className='text-center pt-5'>NewsEveryday-{capitalizeFirstLetter(props.category)} News</h2>
              {loading&&<Spinner/>}   
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length<totalResults}
            loader={<Spinner/>}
            >
            <div className="row">
                {articles.map((element,ind) => {
                    return <div className="col-md-4" key={ind} >
                        <NewsItem title={element.title} description={element.description ? element.description.slice(0, 88) : " "} imageurl={element.image} newsurl={element.url} author={element.author} date={element.publishedAt} />
                    </div>

                })}
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={page>=props.pageSize}type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}


            </div>
            </InfiniteScroll>
        </div>
    )
}


// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

export default News