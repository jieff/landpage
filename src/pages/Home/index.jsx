import { Header} from '../Header'
import { YouTube } from '../../components/YouTube'
import { Footer} from '../Footer'

export function Home(){
    return(
        <div className="container">
            <Header />
            <YouTube />
            <Footer />
        </div>
    )
}