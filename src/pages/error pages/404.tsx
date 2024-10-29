import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <div style={{ paddingTop: "200px" }}>ERROR 404</div>
      <div>Page not Found !!!</div>
      <Link to="/">Go back to Homepage</Link>
    </div>
  );
}
