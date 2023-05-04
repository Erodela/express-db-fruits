const React = require("react");
const Nav = require("../components/Nav");
const DefaultLayout = require("../layout/Default");

class Index2 extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <DefaultLayout>
        <h1>Vegetables Index Page</h1>
        <Nav link="/vegetables/new" text="Create a Fruit" />
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                The{" "}
                <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br></br>
                {vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
                <form>
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index2;
