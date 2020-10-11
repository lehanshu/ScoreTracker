'use strict';


let playerID = 0;

class AddPlayer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {playerName:'',}
    }

onPlayerTextChange = (e) =>{
    this.setState({playerName:e.target.value});
}
sendData = () => {
    this.props.parentCallback(this.state.playerName);
    this.setState({
        playerName:'',
    })
}
    render() {
    return (
        <div>
            <p className="navLink"> Adding player here : {this.state.playerName}</p>
            <div className="row">
                
                <div className="row">
                    <div className="input-field col s3">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" value={this.state.playerName} 
                        onChange={e => this.onPlayerTextChange(e) } />
                        <label htmlFor="icon_prefix">Player Name</label>
                        <button className="btn waves-effect waves-light" 
                        onClick={() => this.sendData()}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                        
                    </div>
                    
                </div>
                
            </div>
        
      </div>
    );
  }
}


class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        liked: false,
        playerList : [],
    };
  }

callbackFunction =(childData) =>{
    this.setState(
        prevState =>({
            playerList:[...prevState.playerList,
                                    {
                                        id : playerID++,
                                        Name:childData,
                                        score:[]
                                    }],
        })
    );
}

  render() {
    if (this.state.liked) {
      return 'You liked this OKay?.';
    }

    return (
        <div>
            
        <AddPlayer parentCallback = {this.callbackFunction} />
        <p>PlayerNameLength: {this.state.playerList.length}</p>
            <ul className="collection">
                {this.state.playerList.map(
                    player =>(
                        <li key={player.id} className="collection-item">{player.Name}+{player.id}</li>
                    )                    
                )}
                
                </ul>

                <table className="striped">
                    <thead>
                        <tr>
                        {this.state.playerList.map(
                            player=>(
                                <th key={player.id}>{player.Name}</th>
                            )
                        )}  
                        </tr>  
                    </thead>
                   
                </table>


      <button onClick={() => this.setState({ liked: true }) } className="buttonClass" >
        Like
      </button>
      </div>
    );
  }
}

let domContainer = document.querySelector('#appContainer');
ReactDOM.render(<AppContainer />, domContainer);



