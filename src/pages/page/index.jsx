import Post from 'components/post'
import Reklama from 'components/reklama'
import OxirgiYangilik from 'components/oxirgi yangliklar'

const index = () => {
    return (
        <div className='page'>
            <div className="container">
                <div className="page__wrapper">
                    <Post />
                    <Reklama />
                    <OxirgiYangilik />
                </div>
            </div>
        </div>
    )
}

export default index