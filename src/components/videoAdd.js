import React from "react";
import video from '../assets/video/v1.mp4'
function VideoAdd() {
    return (
        <div>
            <section style={{"margin-left": "300px", "margin-bottom": "-50px"}}>
                <video width="700" height="700" autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
            </section>
        </div>
    );
}

export default VideoAdd;