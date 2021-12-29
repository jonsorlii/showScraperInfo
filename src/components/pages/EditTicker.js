import React, {useState, useEffect} from 'react'
import './stylesheets/EditTicker.css'
import Button from '../Button.js' 
import Axios from 'axios'
import ReadRow from '../ReadRow.js'

function EditTicker() {
    const [tickerName, setTickerName] = useState('');
    const [tickerNameList, setTickerNameList] = useState([]); 
    
    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setTickerNameList(response.data)
        }); 
    }, [])

    const submitTicker = () => {
        Axios.post('http://localhost:3001/api/insert', {tickerName : tickerName})
    .then(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            return setTickerNameList(response.data)
        })
    });
    }

    const deleteTicker = (ticker_name) => {
        Axios.delete(`http://localhost:3001/api/delete/${ticker_name}`).then((response) => {
            setTickerNameList(tickerNameList.filter((val) => {
                return val.ticker_name != ticker_name; 
            })) 
        })
    }
    return (
        <div className = "tickerchange" >
            <h1>Legg til ny ticker</h1>
            <div className = 'forminput'> 
                <input type = "text" name = "newticker" onChange = {(e) => {
                    setTickerName(e.target.value)
                }}/>
                <Button onClick={submitTicker} className = "delete-button" text = "Add"/>
                
                <div className = "app-container">
                <h1> Delete current tickers</h1>
                    <table> 
                        <thead>
                            <tr>
                                <th>
                                    Ticker
                                </th>
                            </tr> 
                        </thead> 
                        <tbody>
                            {tickerNameList.map((ticker) => (
                                <tr key = {ticker.ticker_name}>
                                    <td>{ticker.ticker_name} <Button onClick = {() => deleteTicker(ticker.ticker_name)} text = "Delete" /></td> 
                                </tr>    
                            ) 
                            )}  
                        </tbody>
                    </table> 
                </div> 
            </div> 
        </div> 
    )
}

export default EditTicker
