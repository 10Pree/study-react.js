export default function Checkbox({ text, isChecked }) {

    // let ResultCheckbox = ''
    // if (isChecked) {
    //     ResultCheckbox = (
    //         <div>
    //             {text} is done
    //         </div>
    //     )
    // } else {
    //     ResultCheckbox = (
    //         <div>
    //             {text} is progress
    //         </div>
    //     )
    // }
    return (
        <>
            <div>{ text } {  isChecked  ? 'is done' : 'is progress'  }</div>
        </>
    )
}