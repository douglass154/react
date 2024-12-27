import "./EditProfile.css";

import { uploads } from "../../utils/config";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

// Components
import Message from "../../components/Message";

const EditProfile = () => {
   const dispatch = useDispatch();

   const { user, message, error, loading } = useSelector(state => state.user);

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [profileImage, setProfileImage] = useState("");
   const [bio, setBio] = useState("");
   const [previewImage, setPreviewImage] = useState("");

   // Load user data
   useEffect(() => {
      dispatch(profile());
   }, [dispatch]);

   // Fill form with user data
   useEffect(() => {
      if (user) {
         setName(user.name);
         setEmail(user.email);
         setBio(user.bio);
      }
   }, [user]);

   const handleSubmit = async e => {
      e.preventDefault();

      // Gather user data from states
      //    const formData = new FormData();

      //    formData.append("name", name);

      //    if (profileImage) {
      //       formData.append("profileImage", profileImage);
      //    }
      //    if (bio) {
      //       formData.append("bio", bio);
      //    }
      //    if (password) {
      //       formData.append("password", password);
      //    }

      // await dispatch(updateProfile(formData));

      const userData = {
         name
      }
   
      if(profileImage) {
         userData.profileImage = profileImage;
      }
   
      if(bio) {
         userData.bio = bio;
      }
   
      if(password) {
         userData.password = password;
      }
   
      const formData = new FormData();
   
      const userFormData = Object.keys(userData).forEach(key => formData.append(key, userData[key]))
   
      formData.append("user", userFormData)

      await dispatch(updateProfile(userFormData));

      setTimeout(() => {
         dispatch(resetMessage());
      }, 3 * 1000);
   };

   const handleFile = e => {
      // Image preview
      const image = e.target.files[0];

      setPreviewImage(image);

      // Update image state
      setProfileImage(image);
   };

   return (
      <div id="edit-profile">
         <h2>Edite seus dados</h2>
         <p className="subtitle">
            Adicione uma imagem de perfil e conte mais sobre você...
         </p>
         {(user.profileImage || previewImage) && (
            <img
               className="profile-image"
               src={
                  previewImage
                     ? URL.createObjectURL(previewImage)
                     : `${uploads}/users/${user.profileImage}`
               }
               alt={user.name}
            />
         )}
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Nome"
               onChange={e => setName(e.target.value)}
               value={name}
            />
            <input type="email" placeholder="E-mail" disabled value={email} />
            <label>
               <span>Imagem de Perfil:</span>
               <input type="file" onChange={handleFile} />
            </label>
            <label>
               <span>Bio:</span>
               <input
                  type="text"
                  placeholder="Descrição do perfil"
                  onChange={e => setBio(e.target.value)}
                  value={bio}
               />
            </label>
            <label>
               <span>Quer alterar sua senha?</span>
               <input
                  type="password"
                  placeholder="Digite uma nova senha"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
               />
            </label>
            {!loading && <input type="submit" value="Atualizar perfil" />}
            {loading && <input type="submit" value="Aguarde..." disabled />}
            {error && <Message msg={error} type="error" />}
            {message && <Message msg={message} type="sucess" />}
         </form>
      </div>
   );
};

export default EditProfile;