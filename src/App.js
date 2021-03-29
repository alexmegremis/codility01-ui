import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            charPressed: '',
            charAccepted: '',
            count: null
        };

        this.handleInput = this.handleInput.bind(this);
        this.getCount = this.getCount.bind(this);
    }

    render() {

        return (
            <div className="container">
                <div className="jumbotron text-center">
                    <h1>Codility</h1>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="userInput">Start your search</label>
                        <input id="userInput" type="text" className="form-control" value={this.state.charPressed} onKeyPress={(e) => this.handleInput(e)}/>
                        {/*<button type="submit">Search</button>*/}
                    </div>
                    <div className="form-group">
                        <label>Cities count</label>
                        <input id="output" type="text" className="form-control" value={this.state.count} disabled={true}/>
                        <label>{this.state.citiesCount}</label>
                    </div>
                </form>
            </div>
        );
    }

    handleInput(e) {
        const regex = /[a-zA-Z]{1}/g;

        this.setState({
            charPressed: e.key
        });

        if (regex.test(e.key)) {
            this.setState({
                charAccepted: e.key
            });
            this.getCount();
            // console.log(">>> accepting " + e.key);
        } else {
            this.setState({
                charPressed: '',
                count: 'Only single alphabetic, please.'
            });
            // console.log(">>> rejecting " + e.key);
        }
    }

    getCount() {
        if (this.state.charAccepted != null && this.state.charAccepted !== '') {
            let apiURL = "http://localhost:8080/api/v1/count/" + this.state.charAccepted;
            fetch(apiURL)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        count: data
                    });
                });
        }
    }
}

export default App;
