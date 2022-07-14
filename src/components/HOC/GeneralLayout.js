
import Nav from "../Visiblecomponents/Nav";


const GeneralLayout = (Component) => (props)=> {
  return (
    <>
        <Nav/>
        <Component {...props}/>
    </>
  );
}

export default GeneralLayout;