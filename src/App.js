import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="jumbotron text-center">
                    <h1>Codility</h1>
                </div>
                <div className="form-inline">
                    <label>Start your search : </label>
                    <input type="text"/>
                    <button type="submit" onClick="">Search</button>
                </div>
            </div>
        );
    }
}

export default App;
