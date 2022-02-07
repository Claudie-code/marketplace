import './button-nav.scss';

export default function ButtonNav({ href, title, children }) {
  return <a href={href} title={title} className="button-light">{children} <i className='bx bx-right-arrow-alt button-icon'></i></a>;
}
