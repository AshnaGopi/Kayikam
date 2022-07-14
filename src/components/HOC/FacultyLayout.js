import NavB from "../Facultycomponents/NavB";


const FacultyLayout = (Component) => (props)=> {
  return (
    <>
        <NavB/>
        <Component {...props}/>
    </>
  );
}

export default FacultyLayout;