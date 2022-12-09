//App03_ex3.js

import { Component } from "react"; 
import FC from "./components/FriendComponent_practice";
class App extends Component{
    state={
        friends:["김구라","해골","원숭이"]
    }
    
    render(){
        return(
            <FC friends = {this.state.friends}
            handleUpdate = {this.handleUpdate} />
        );
    }

    handleUpdate = (data) => {
        
    }

}

export default App;