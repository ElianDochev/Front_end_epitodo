import Options from "./options";

function ComboBoxes(props)
{
    return (
        <div>
            {props.Data.map((option, index) => {
                return <Options key={index} name={option.name} options={option.options} value={option.value} title={option.title} defValue={option.defaultValue}/>
            })}
        </div>
    )
}

export default ComboBoxes;