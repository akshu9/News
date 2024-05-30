import React from 'react'
function NewsItem({title,description,imageurl,newsurl,author,date,source}) {
    return (
        <div className='my-3'>
            <div className="card" >
                <img src={!imageurl?'https://source.unsplash.com/900x900/?coding,javascript':imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className='card-title'>{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">{author}</small></p>
                    <p className="card-text"><small className="text-muted">{new Date(date).toLocaleString()}</small></p>
                    <a href={newsurl} target='_blank' className=' btn btn-sm btn btn-primary'>Read More</a>
                </div>
            </div>
            
            </div>
            
        
    )
}

export default NewsItem