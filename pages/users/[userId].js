const UserDetails = ({ userDetail }) => {
  return (
    <>
      <div>
        <p>Name: {userDetail.name}</p>
        <p>Email: {userDetail.email}</p>
        <p>Street: {userDetail.address.street}</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis, dolorum nam, corrupti
          quisquam ducimus, dicta unde eaque facilis accusamus sed veniam ea possimus. Omnis id eaque nulla aliquid
          vero.
        </p>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { userId } = params;

  const response = await fetch(`http://localhost:8000/users/${userId}`);
  const data = await response.json();

  return {
    props: {
      userDetail: data,
    },
  };
}

export default UserDetails;
