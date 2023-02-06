import React,{useState} from 'react'


export default function TextForm(props) {
 const aclick=()=>{
  let newText=text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to UpperCase","success");

 }
 const bclick=()=>{
  let newText=text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to LowerCase","success");
 }
const cclick=()=>{
  var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard
      .writeText(text.value)
      .then(() => {
        alert("successfully copied");
      })
      .catch(() => {
        alert("something went wrong");
      });

}
const dclick=()=>{
  let newText="";
  setText(newText)
  props.showAlert("Text Cleared","success");
}
const eclick=(event)=>{
  let abcd=text.split("");
  abcd=abcd.reverse();
  let newText=abcd.join("");
  setText(newText)
  props.showAlert("Converted to Reverse","success");
}

const gclick=()=>{
  let newText=text.trim().replace(/\s+/g, " ");
   setText(newText)
   props.showAlert("Extra Space Removed","success");
}

 const  achange=(event)=>{
  setText(event.target.value)
 }
  const [text, setText] = useState("Enter your text : ");

  return (
    <>
    <div className="container" style={{color:props.mode==="light"?"black":"#080808"}} >
      <h1>{props.heading}</h1>
  <textarea className="form-control" onChange={achange} value={text} id="mybox" style={{backgroundColor:props.mode === "light"? "white":"grey"}}
  rows="8"/>
  <button className="btn btn primary  my-3" onClick={aclick}>Convert to Uppercase</button>
  <button className="btn btn secondary  my-3" onClick={bclick}>Convert to Lowercase</button>
  <button className="btn btn primary my-3" onClick={cclick}>CopyText</button>
  <button className="btn btn primary my-3"onClick={dclick}>Cleartext</button>
  <button className="btn btn primary  my-3" onClick={eclick}>ReverseText</button>
  <button className="btn btn primary  my-3" onClick={gclick}>RemovingExtraSpace</button>

</div>
<div className="container my-3"  >
  <h1>Text Summary </h1>
  <p>{text.split(" ").length-1} words and {text.length} charecters </p>
  <p>{0.008*text.length}  seconds needed to read approximately</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter some text to preview here"}</p>
</div>
    </>
    
  )
}
