import './Loading.css';

function PostSubmit({doneSubmitting}) {

    // do stuff with props

    return (
        <div id="postSubmitContainer" className={doneSubmitting ? "loadingActive loadingInactive" : "loadingInactive"}>
            <p className="">
                Your picks were submitted!!! 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                To change your picks, fill out the form again
                <br></br>
                <br></br>

            </p>

            <button id="reloadButton" 
                onClick={() => {window.location.reload();}}
                >Go Home</button>
        </div>
    );
}
  
export default PostSubmit;