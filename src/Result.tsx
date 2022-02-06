type StatusProps = {
  status: "loading" | "success" | "error";
};

function Result({ status }: StatusProps) {
  let message: string;

  if (status === "loading") {
    message = "loading";
  } else if (status === "success") {
    message = "success";
  } else {
    message = "error";
  }

  return <div>{status}</div>;
}

export default Result;
