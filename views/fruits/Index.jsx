const React = require("react");
const Nav = require("../components/Nav");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <DefaultLayout title="Index Page">
        <h1>Fruits Index Page</h1>
        <Nav link="/fruits/new" text="Create a Fruit" />
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li key={i}>
                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is{" "}
                {fruit.color} <br></br>
                {fruit.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
                <a href={`/fruits/${fruit._id}/edit`}>Edit this Fruit</a>
                <form
                  action={`/fruits/${fruit._id}?_method=DELETE`}
                  method="POST"
                >
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

module.exports = Index;
