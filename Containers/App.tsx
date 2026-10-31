import { Component, ComponentState } from "react";
import CardList from "../Components/CardList.tsx";
import Searchbox from "../Components/Searchbox.tsx";
import Scroll from "../Components/Scroll.tsx";

class App extends Component<{}, ComponentState> {
  constructor({}) {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event: any) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robots: any) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1 tc ">ROBOLIST</h1>
        <Searchbox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
