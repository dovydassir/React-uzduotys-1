import StudentCard from "./StudentCard";

function StudentList() {
    const students = [
        {
            name: "Dovydas",
            age: 29,
            city: "Kaunas",
            grades: [10],
            passed: true,
        },
        {
            name: "Tadas",
            age: 35,
            city: "Vilnius",
            grades: [9],
            passed: true,
        },
        {
            name: "Tomas",
            age: 18,
            city: "Panevėžys",
            grades: [6],
            passed: false,
        },
    ];
    return (
        <>
        <h2>Studentų sąrašas</h2>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            city={student.city}
            grades={student.grades}
            passed={student.passed}
          />
        ))}
        </>
    )
}

export default StudentList