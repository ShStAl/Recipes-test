import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>Home</div>
      <div>
        <Link to={`recipe/1`}>Recipe 1</Link>
      </div>
    </>
  );
}
