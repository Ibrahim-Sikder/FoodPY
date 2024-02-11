import { NavLink } from "react-router-dom";
import Container from "../../ui/Container";
import { HiGift, HiOutlineShoppingCart } from "react-icons/hi";
import { FaEnvelopeOpen, FaRegUserCircle } from "react-icons/fa";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <header className="hidden md:block">
      <div className="border-b-[#ddd] border-b-[1px]">
        <Container className="">
          <div className="flex justify-between h-10 items-center text-sm">
            <div className="space-x-5">
              <span>FEATURED</span>
              <span>Baking</span>
              <span>Travel</span>
              <span>Drinks</span>
              <span>Home</span>
            </div>
            <ul className="space-x-5 uppercase flex items-center">
              <span className="flex items-center">
                <HiGift className="mr-1 size-4" />
                <NavLink to="/">REWARDS</NavLink>
              </span>
              <span className="flex items-center">
                <FaEnvelopeOpen className="mr-1 size-4" />
                <NavLink to="/">HOTLINE</NavLink>
              </span>
              <span className="flex items-center">
                <HiGift className="mr-1 size-4" />
                <NavLink to="/">REGISTRY</NavLink>
              </span>
            </ul>
          </div>
        </Container>
      </div>
      <div className="border-b-[#ddd] border-b-[1px]">
        <Container className="">
          <nav className="flex justify-between h-20 items-center text-sm ">
            <ul className="space-x-5 uppercase">
              <NavLink to="/">SHOP</NavLink>
              <NavLink to="/">RECIPES</NavLink>
              <NavLink to="/">STORIES</NavLink>
              <NavLink to="/">SHOWS</NavLink>
            </ul>

            <h3 className="uppercase"> foodpy</h3>
            <div className="space-x-5 flex items-center ">
              <Search className="searchBox  ">
                <SearchIconWrapper>
                  <SearchIcon className="searchIcon" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <FaRegUserCircle className="size-8" />
              <HiOutlineShoppingCart className="size-8" />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
