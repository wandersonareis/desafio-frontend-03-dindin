import logoDinDin from "../../assets/logo.svg";
import profileIco from "../../assets/profile-logo.svg";
import logout from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { UserPerfilEditModal } from "../modal";
import { useToggle } from "../../lib/customHooks";
import { DindinHeader, HeaderContainer, MainHeader, ProfileIcon } from "./headerStyled";

export default function Header() {
  const { user, isLoggedIn, onLogout, setTransactionsList, setTransactionsSummary } = useAuth();
  const [isUserProfileEditModalOpem, setUserProfileEditModalOpen] = useToggle();

  const user_name = user?.name || "No name";

  function userLogout() {
    setTransactionsList([]);
    setTransactionsSummary({});
    onLogout();
  }

  return (
    <MainHeader>
      <DindinHeader>
        <img src={logoDinDin} alt="Logo Dindin" />
        <span>DinDin</span>
      </DindinHeader>
      {isLoggedIn && (
        <HeaderContainer>
          <ProfileIcon onClick={setUserProfileEditModalOpen} src={profileIco} alt="Profile icon" />
          <p onClick={setUserProfileEditModalOpen} >{user_name}</p>
          <Link to="/" onClick={userLogout}>
            <img src={logout} alt="logout" />
          </Link>
        </HeaderContainer>
      )}
      {isUserProfileEditModalOpem && <UserPerfilEditModal onClose={setUserProfileEditModalOpen} />}
    </MainHeader>
  );
}
