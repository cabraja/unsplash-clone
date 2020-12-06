
import React from 'react'
import './Main.css'
import Photo from './Photo'
import debounce from 'lodash.debounce'


class App extends React.Component{
   constructor(){
       super()
       this.state= {
            allPhotos: [],
            displayedPhotos: []
       }

       this.loadMore = this.loadMore.bind(this)
       
       window.onscroll = debounce(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
            
            this.loadMore()
            
        }
      }, 100);
      
   }

   componentDidMount(){
       Promise.all([
           fetch("https://picsum.photos/v2/list?page=1&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=2&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=3&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=4&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=5&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=6&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=7&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=8&limit=100").then(res => res.json()),
           fetch("https://picsum.photos/v2/list?page=9&limit=100").then(res => res.json())
       ]).then(data =>{
           this.setState({allPhotos: data.flat()})
           console.log(this.state.allPhotos)
           this.loadMore()
       } )

      
       
   }
   
   loadMore(){

        for(var i=0; i < 15; i++){
            let ranNum = Math.floor(Math.random() * 899)
            this.setState( prevState => ({displayedPhotos:[...prevState.displayedPhotos, <Photo item={this.state.allPhotos[ranNum]} />]}))
        }
    
   }
       
   
   render(){
      
       return(
           <div>
                <div id={"main"}>
                    {this.state.displayedPhotos}
                </div>
                <h3>Loading More...</h3>
           </div>
       )
   }
}


export default App