import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import twitter from './image/TwitterLogo.png';

const App = () =>
{
    const url="https://api.quotable.io/random";
    const [ quote, setQuote ] = useState("");
    const [ author, setAuthor ] = useState("");
    

    const FetchQuotes = async () =>
    {
        try {
            await axios.get(url)
                .then((r) => {
                    setQuote(r.data.content)
                    setAuthor(r.data.author)
                });
            
        } catch (error) {
           console.log(error) 
        }

        console.log(quote);
        console.log(author);
    } 

    const twitter_open = () =>
    { 
        const url=`https://twitter.com/intent/tweet?text=${quote} -By ${author}`;
        window.open(url);
    }

    useEffect(() => {
        FetchQuotes();
      }, []);
    
    return(
        <div className="container-wrapper">
            <div className="container">
                <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" 
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" 
                crossOrigin="anonymous" />
                <div className="sub_container">  
                    <i className="start_quote fas fa-quote-left"></i>
                    <div className="twitter_icon">
                        <img className="twitter_icon" width="60px" src={twitter} alt="twitter-icon" onClick={twitter_open} />
                    </div> 
                    <p className="Quote"><i>{quote}</i></p>
                    <p className="Author"><i>- by <span className="name">{author}</span></i></p>
                    <div className="button">
                        <button onClick = {FetchQuotes}>New Quote</button>
                    </div>     
                </div>
            </div>
        </div>
        
    );
}

export default App;