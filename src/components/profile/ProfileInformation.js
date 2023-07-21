import styles from "../../css/ProfileInformation.module.css";
import ProfileForm from "./ProfileForm";

const ProfileInformation = () => {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.header_wrapper}>
        <h2>Profilinformation</h2>
        {/* <p>Här nedan kan du redigera din profil.</p> */}
      </div>
      {/* /.header_wrapper */}
      <hr className={styles.hr} />
      <ProfileForm />
    </div>
  );
};

export default ProfileInformation;
