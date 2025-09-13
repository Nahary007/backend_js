import loadGif from "../../assets/load/load.gif"

function LoadAnimation() {
  return (
    <div style={
        {
          width: "100%",
          height: "100%", 
          display:"flex", 
          alignItems: "center",
          justifyContent: "center"
        }
      }>
      <img src={loadGif} style={{ height: "100px" }} alt="Animation load" />
    </div>
  )
}

export default LoadAnimation