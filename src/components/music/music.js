import React from 'react';
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import BossLevel from "../../Dan's Music Samples/BossLevel.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"
import Ambiance from "../../Dan's Music Samples/Ambiance.mp3"

const ambiance = "https://static1.squarespace.com/static/5b3a4b5b5cfd798a3328c04a/5b3a615870a6ad54c234f78c/5b3a660d70a6ad9c268578e1/1545012626394/D+Minor.mp3";
const bossLevel = "https://static1.squarespace.com/static/5b3a4b5b5cfd798a3328c04a/5b3a615870a6ad54c234f78c/5b3a65dd03ce6489108a9377/1545012636961/Chromatic.mp3"

class Music extends React.Component {
    state = {
        selectedTrack: null,
        player: "stopped"
    };

componentDidUpdate(prevProps, prevState) {
    if(this.state.selectedTrack !== prevState.selectedTrack) {
        let track;
        switch (this.state.selectedTrack) {
            case "Ambiance":
                track = ambiance                
                break;
            case "Boss Level":
                track = bossLevel
                break;
            default:
                break;
        }
        if(track) {
            this.player.src = track;
            this.player.play()
            this.setState({player: "playing"})
        }
    }
    if(this.state.player !== prevState.player) {
        if (this.state.player === "paused") {
        this.player.pause();
    } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null })
    } else if (
        this.state.player === "playing" && 
        prevState.player === "paused"
        ) {
        this.player.play();
        }
    }    
}

    render() {
        const list = [{id: 1, title: "Ambiance"}, {id: 2, title: "Boss Level"}].map(item => {
            return (
                <li
                    key={item.id}
                    onClick={() => this.setState({ selectedTrack: item.title })}
                >
                {item.title}
                </li>
            );
        });
        return(
        <>
            <h1>Music Samples</h1>
            <ul type="none">{list}</ul>
            <div>
                {this.state.player === "paused" && (
                    <button onClick={() => this.setState({player: "playing"})}>
                        Play
                    </button>
                )}
                {this.state.player === "playing" && (
                    <button onClick={() => this.setState({player: "paused"})}>
                        Pause
                    </button>
                )}
                {this.state.player === "playing" || this.state.player === "paused" ? (
                    <button onClick={() => this.setState({player: "stopped"})}>
                        Stop
                    </button>
                ) : ( 
                    ""
                )}
            </div>
            <audio ref={ref => this.player = ref}/>
        </>
        );
    }
}

export default Music;