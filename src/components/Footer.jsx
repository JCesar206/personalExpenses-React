{/*import { FaHome, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';*/}

function Footer() {
	return (
		<footer className="fixed bottom-0 w-full bg-white dark:bg-gray-800 text-center py-3 border-t dark:border-gray-700 z-10">
			<div className="flex justify-center gap-6 text-xl">
				<a href="https://jcesar206.github.io/myPersonalBlog/">{/*<FaHome size={20} className='hover:text-blue-600' title='Home Page'/>*/}🏠</a>
				<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer">{/*<FaGithub size={20} className='hover:text-orange-600' title='Github'/>*/}🐙</a>
				<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer">{/*<FaLinkedin size={20} className='hover:text-lime-600' title='Linkedin'/>*/}💼</a>
				<a href="mailto:jcesar206@hotmail.com">{/*<FaEnvelope size={20} className='hover:text-purple-600' title='Hotmail'/>*/}📧</a>
				<a href="mailto:jcesary06@gmail.com">{/*<SiGmail size={20} className='hover:text-yellow-600' title='Gmail'/>*/}📬</a>
			</div>
			<p className="text-sm font-semibold text-center">&copy; {new Date().getFullYear()} | Personal Expenses | Juls 🤯 | All right reserved.</p>
		</footer>
	);
}

export default Footer;