import React from 'react'

function Photo(props){

    return(
        <div id={"card"}>
            <img  src={"https://picsum.photos/id/" + props.item.id + "/300"} alt="random" />
            <div id={"card-info"}>
                <h4>Author: {props.item.author} </h4>
                <a href={props.item.url + "/download?force=true"} download>Download</a> 
            </div>
        </div>
    )
    
    
}

export default Photo