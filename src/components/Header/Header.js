import { Link } from 'react-router-dom';

const Header = ({ addLink }) => {
  return (
    <header>
      <h1>Forum</h1>

      {addLink ? (
        <Link to={'/'}> Ana Sayfaya Dön </Link>
      ) : (
        <Link to={'/add-post'}> Gönderi Oluştur </Link>
      )}
    </header>
  );
};

export default Header;