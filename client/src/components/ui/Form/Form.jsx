import styles from './Form.module.css';
import { Link } from 'react-router-dom'

export default function Form({ signup, login = true }) {
    return login ? (
        <main id="mainForm"className="w-[100vw] h-[150vh] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-55%] bg-custom-green-500 grid place-content-center" >
            <div id="mainFormWrapper"className="grid grid-cols-2 h-[80vh] w-ful pl-16">
                <div className='w-[100vw] flex items-center -translate-x-[-5%]'>
                    <div>
                        <p className="italic text-2xl text-custom-beige-500">Login</p>
                        <h1 className={styles.welcomeHeading}>WELCOME<br />BACK</h1>
                        <p className='text-custom-beige-500'>Sign back in to your account to access your orders and <br/> embody the art of being human.</p>
                    </div>
                </div>

                <form className='bg-custom-beige-500 max-w-[75%] -translate-x-[-20%] p-16 pt-32'>
                    <div className={styles.accountText}>YOUR ACCOUNT</div>
                    <div className={styles.fonts}>EMAIL<br/><input type="" className="w-[100%] h-1/6 bg-transparent h-10 border mb-4 mt-2 p-2"/></div>
                    <div className={styles.fonts}>PASSWORD<br/><input type="password" className="w-[100%] h-1/6 bg-transparent h-10 border border-gray-100 mb-10 mt-2 p-2"/></div>
                    <button className='w-20 h-10 bg-green-600 mb-[25vh]' type="submit">LOG IN</button>
                    <div className='w-[100%] h-[1px] bg-custom-green-500 border-custom-green-500'></div>
                    <div className='flex justify-between mt-3 text-custom-green-500'><p>DON'T HAVE AN ACCOUNT</p><Link className="hover:underline" to="/">SIGN UP</Link></div>                  
                </form>
            </div>
        </main>
    ) : (
        <main id="mainForm"className="w-[100vw] h-[150vh] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-55%] bg-custom-green-500 grid place-content-center" >
        <div id="mainFormWrapper"className="grid grid-cols-2 h-[80vh] w-ful pl-16">
            <div className='w-[100vw] flex items-center -translate-x-[-5%]'>
                <div>
                    <p className="italic text-2xl text-custom-beige-500">Login</p>
                    <h1 className={styles.welcomeHeading}>WELCOME<br />BACK</h1>
                    <p className='text-custom-beige-500'>Sign back in to your account to access your orders and <br/> embody the art of being human.</p>
                </div>
            </div>

            <form className='bg-custom-beige-500 max-w-[75%] -translate-x-[-20%] p-16 pt-32'>
                <div className={styles.accountText}>YOUR ACCOUNT</div>
                <div className={styles.fonts}>EMAIL<br/><input type="" className="w-[100%] h-1/6 bg-transparent h-10 border mb-4 mt-2 p-2"/></div>
                <div className={styles.fonts}>PASSWORD<br/><input type="password" className="w-[100%] h-1/6 bg-transparent h-10 border border-gray-100 mb-10 mt-2 p-2"/></div>
                <button className='w-20 h-10 bg-green-600 mb-[25vh]' type="submit">LOG IN</button>
                <div className='w-[100%] h-[1px] bg-custom-green-500 border-custom-green-500'></div>
                <div className='flex justify-between mt-3 text-custom-green-500'><p>DON'T HAVE AN ACCOUNT</p><Link className="hover:underline" to="/">SIGN UP</Link></div>                  
            </form>
        </div>
    </main>
    );
}
