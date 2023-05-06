import './style.sass'
import  logo  from '../../assets/img/logo.png'
export default function Header(props: any) {

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
            <nav>
                {navBar()}
            </nav>
        </header>
    )
}