import ProfilePhoto from '../media/ProfilePhoto.jpg';

function ProfileImage() {
    return(
        <div className="profile-image">
            <img src={ProfilePhoto} alt="Abrahm Rollins Profile Photo" />
        </div>
    )
}

export default ProfileImage;