import Button from "../button";
import './track.css'

const Track = props => {
    return (
        <div>
            <img src={props.image} alt={props.alt} />
            <div class="detail-song">
                <p class="song-title">{props.title}</p>
                <p class="song-artist">{props.artist}</p>
                <p class="song-album">{props.album}</p>
            </div>
            <Button label="Select"/>
        </div>
    );
}

export default Track;