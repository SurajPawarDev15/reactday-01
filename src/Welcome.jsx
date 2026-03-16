function Welcome() {
  const channelName = "ThinkCreateShareGrow";
  const isDisplay = false;
  return (
    <div>
      <h1>
        Welcome to my Channel ,
        {isDisplay ? channelName : " Please subscribe my channel"}
      </h1>
    </div>
  );
}
export default Welcome;
