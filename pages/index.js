import { withRouter } from "next/router";

const Users = ({ data, router }) => {
  console.log(data, router);
  return (
    <div>
      <h1>Users List</h1>
      {data.map((e) => (
        <div key={e.id}>
          <>
            <h2>Name : {e.name}</h2>
            <h4>Email : {e.email}</h4>
            <button onClick={() => router.push(`/${e.id}`)}>
              View Details
            </button>
            <br></br>
            <br></br>
          </>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();
  return {
    props: {
      data: posts,
    },
  };
};

export default withRouter(Users);
