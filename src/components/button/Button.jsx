import './Button.css'
   
function Button(){
    function handleClick(){
        console.log('Button Clicked')
    }
    return(
        <>
         <p onClick={handleClick} className="uploadButton">Upload</p>        
        </>
    )
}

export default Button
