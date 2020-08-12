import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import VideoDetail from './VideoDetail/VideoDetail'
import VideoList from './VideoList/VideoList'
import youtube from '../apis/youtube'
const KEY = "AIzaSyADvhAcCvNjsmFcS7SXxTxlYXwhoXe81Z4"

class App extends React.Component  {
    state={ videos:[],selectedVideo:null }

    onTermSubmit=async(term)=>{
        const response=await youtube.get('/search',{
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        })
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
        console.log(term)
    }

    onVideoSelect=(video)=>{
        console.log('from the App',video)
        this.setState({selectedVideo:video})
    }

    render(){
        return (
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                   <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />

                        </div>
                   </div>
                </div>
              
            </div>
        )
    }
}


export default App