import { withRouter } from "next/router";

const UserID = ({ router, data }) => {
  console.log(router, data);
  return (
    <div>
      <h1>Single Profile</h1>
      <button onClick={() => router.push(`/`)}>Go Back</button>
      <h2>Name : {data.name}</h2>
      <h4>Email : {data.email}</h4>
      <h4>Phone : {data.phone}</h4>
      <h4>Website : {data.website}</h4>
      <h4>Company Details :</h4>
      <ul>
        <li>Name : {data.company.name}</li>
        <li>{data.company.bs}</li>
        <li>{data.company.catchPhrase}</li>
      </ul>
      <h4>Address :</h4>
      <p>
        {data.address.suite}, {data.address.street}, {data.address.city},{" "}
        {data.address.zipcode}.
      </p>
    </div>
  );
};

export const getStaticProps = async (props) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default withRouter(UserID);
