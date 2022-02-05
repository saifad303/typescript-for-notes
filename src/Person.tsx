type personType = {
    singleIdentity: {
        first: string,
        last: string
    }
}

export default function Person ({singleIdentity}: personType) {
  return (
    <div>
      <h2>First Name: {singleIdentity.first}</h2>
      <h2>Last Name: {singleIdentity.last}</h2>
    </div>
  );
}
