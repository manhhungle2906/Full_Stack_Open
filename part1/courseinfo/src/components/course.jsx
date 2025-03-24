const Title = ({ courseName }) => {
    return <h2>{courseName}</h2>;
  };
  
  const CourseContent = ({ sections }) => {
    return (
      <div>
        {sections.map((section) => (
          <CoursePart key={section.id} section={section} />
        ))}
      </div>
    );
  };
  
  const CoursePart = ({ section }) => {
    return (
      <p>
        {section.name} - {section.exercises} exercises
      </p>
    );
  };
  
  const ExerciseTotal = ({ sections }) => {
    const totalExercises = sections.reduce((sum, section) => sum + section.exercises, 0);
    return (
      <>
        <p><strong>Total exercises:</strong> {totalExercises}</p>
        <p>Sum of all exercises using reduce: {sections.reduce((acc, section) => acc + section.exercises, 0)}</p>
      </>
    );
  };
  
  const CourseSummary = ({ course }) => {
    return (
      <div>
        <h3>Summary of {course.name}</h3>
        <p>This course consists of {course.parts.length} sections and a total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises.</p>
      </div>
    );
  };
  
  const Course = ({ course }) => {
    return (
      <div>
        <Title courseName={course.name} />
        <CourseContent sections={course.parts} />
        <ExerciseTotal sections={course.parts} />
        <CourseSummary course={course} />
      </div>
    );
  };
  
  export default Course;