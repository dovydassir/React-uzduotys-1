import { createContext, useState } from "react";

export const CourseContext = createContext();

function CourseProvider({ children }) {

    const [course, setCourse] = useState({
        title: "React",
        teacher: "Jonas"
    });

    return (
        <CourseContext.Provider value={{ course, setCourse }}>
            {children}
        </CourseContext.Provider>
    );
}

export default CourseProvider;