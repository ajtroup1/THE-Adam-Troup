import "../../styles/styles.css"

function Unrecognized(): JSX.Element {
  return <>
    <div>
      <p className="unrecognized-text">Oops! The route you entered is invalid. Here's a picture of the Golang Gopher.</p>
      <img src="https://miro.medium.com/v2/resize:fit:1000/0*YISbBYJg5hkJGcQd.png" id="unrecognized-img"/>
    </div>
  </>
}

export default Unrecognized