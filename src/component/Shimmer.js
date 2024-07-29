export const Shimmer = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array(20)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};
