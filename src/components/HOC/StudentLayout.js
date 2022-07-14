
import Navbar from "../Studentscomponents/Navbar";


const StudentLayout = (Component) => (props)=> {
  return (
    <>
        <Navbar/>
        <Component {...props}/>
    </>
  );
}

export default StudentLayout;