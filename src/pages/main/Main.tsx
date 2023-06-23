import MainHeader from "../../common_components/MainHeader";

export default function Main() {
  return (
    <>
      <MainHeader />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Main Page</h1>
      </div>
    </>
  );
}
