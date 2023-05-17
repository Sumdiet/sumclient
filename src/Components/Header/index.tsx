import './style.sass'
import  logo  from '../../assets/img/logo.png'
import  exit  from '../../assets/img/exitIcon.png'
import { useNavigate } from 'react-router-dom';
export default function Header(props: any) {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate(-1);
    }

    const navBar = () => {
        if (props.loged) {
            return (
            <div>
                <button>
                    21/04/2023
                </button>
                <div>

                </div>
            </div>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (
        <header>
            <div className='header-logo'>
                <img src={logo} alt="Logo"></img>
            </div>
            <div className="header-exit" onClick={handleLogout}>
            <button>
              <img src={exit} alt="Exit"></img>
            </button>
            </div>
            <nav>
                {navBar()}
            </nav>
        </header>
    )
}