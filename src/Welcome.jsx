import { Post } from "./Post";

function Welcome({ greeting, members, students }) {
  const channelName = "ThinkCreateShareGrow";
  const isDisplay = false;

  // console.log(members);

  return (
    <div>
      <h1>
        Welcome to my Channel,
        {isDisplay ? channelName : " Please subscribe my channel"}
      </h1>

      <p>Greeting from Parent : {greeting}</p>

      <div>
        <p>Members Are of ReactJS Family</p>

        {members.map((member, index) => (
          <div key={index}>{member}</div>
        ))}
      </div>

      <div>
        <p>Students of ReactJS Family</p>

        {students.map((student, index) => (
          <div key={index}>
            <p>Student Name: {student.name}</p>
            <p>Student Age: {student.age}</p>
            <p>Student Class: {student.class}</p>
            <p>Student Grade: {student.grade}</p>
          </div>
        ))}
        <Post></Post>
      </div>
    </div>
  );
}

export default Welcome;
