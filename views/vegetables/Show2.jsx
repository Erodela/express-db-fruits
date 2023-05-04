const React = require("react");
const Nav = require("../components/Nav");
const DefaultLayout = require("../layout/Default");

class Show2 extends React.Component {
  render() {
    const vegetable = this.props.vegetable;
    return (
      <DefaultLayout>
        <Nav link="/vegetables" text="Home" />
        <h1> Show Page </h1>
        The {vegetable.name} is {vegetable.color} <br />
        {vegetable.readyToEat
          ? "It is ready to eat"
          : "It is not ready to eat... Cant touch this"}
      </DefaultLayout>
    );
  }
}

module.exports = Show2;
