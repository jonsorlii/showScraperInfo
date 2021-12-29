import React from 'react'

function ReadRow({ticker}) {
    return (
        <tr>
            <td>{ticker.ticker_name}</td> 
        </tr> 
    )
}

export default ReadRow

