import logoDinDin from "../../assets/logo.svg";
import profileIco from "../../assets/profile-logo.svg";
import logout from "../../assets/logout.svg";
import { useAuth } from "../../context";
import { UserPerfilEditModal } from "../modal";
import { useToggle } from "../../lib/customHooks";
import {
  Bar,
  DindinHeaderLogo,
  Hamburger,
  Header,
  NavBar,
  NavItem,
  NavLink,
  NavMenu,
  ProfileIcon
} from "./headerStyled.js";

export default function HeaderResponsive() {
  const { user, onLogout, setTransactionsList, setTransactionsSummary } = useAuth();
  const [isUserProfileEditModalOpem, setUserProfileEditModalOpen] = useToggle();
  const [active, setActive] = useToggle(false);

  const user_name = user?.name || "No name";

  function userLogout() {
    setTransactionsList([]);
    setTransactionsSummary({});
    onLogout();
  }

  return (
    <Header>
      <NavBar>
        <DindinHeaderLogo>
          <img src={logoDinDin} alt="Logo Dindin" />
        </DindinHeaderLogo>
        <NavMenu className={active ? "active" : ""}>
          <ProfileIcon onClick={setUserProfileEditModalOpen} src={profileIco} alt="Profile icon" />
          <NavItem>
            <NavLink>
              <p onClick={setUserProfileEditModalOpen}>{user_name}</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" onClick={userLogout}>
              <img src={logout} alt="logout" />
              <span>Sair</span>
            </NavLink>
          </NavItem>
        </NavMenu>
        <Hamburger onClick={setActive}>
          <Bar></Bar>
          <Bar></Bar>
          <Bar></Bar>
        </Hamburger>
      </NavBar>
      {isUserProfileEditModalOpem && <UserPerfilEditModal onClose={setUserProfileEditModalOpen} />}
    </Header>
  );
}
