import './Loading.css';

function Loading({loading}) {

    // do stuff with props

    return (
        <div id="loadingContainer" className={loading ? "loadingActive loadingInactive" : "loadingInactive"}>
            <p className="bounceText">
                Submitting...
            </p>
        </div>
    );
}
  
export default Loading;