import { createRef } from "react";
import {useEffect} from "react";
import {useState} from "react";
import ComboBoxes from "./comboBoxes";

function FormChar(props)
{
   const arrLength = props.Fields.length;
   const [elRefs, setElRefs] = useState([]);
   useEffect(() => {
     setElRefs((elRefs) =>
       Array(arrLength)
         .fill()
         .map((_, i) => elRefs[i] || createRef()),
     );
   }, [arrLength]);
   function sibmitForm(e)
   {
      e.preventDefault();
      const Data = elRefs.map((ref) => ref.current.value);
      props.Func(Data);
   }
   return (
   <div className="login-box">
      <h2>{props.Title}</h2>
      <form onSubmit={sibmitForm}>
         {props.Fields.map((item, index) => {
            if (item.type === "combo_box")
            {
               return <ComboBoxes key={index} Data={{...item.Data, value: elRefs[index]}}/> //{name : item.name, title : item.title, value : refs[index], defValue : item.defVal, options : item.options}
            } else {
               return (
                  <div className="user-box" key={index}>
                        <input type={item.type} required name={item.name} id={item.name} ref={elRefs[index]} defaultValue={item.defVal}/>
                        <label className="text" htmlFor={item.name}>{item.title}</label>
                  </div>
               );
            }
         })}
         <div className="submit-box">
            <button type="submit">Submit</button>
         </div>
      </form>
   </div>
   );
}

export default FormChar;