import { useTheme } from '../hooks/useTheme';
import './ThemeSelector.css';
import dark_mode from '../assets/dark_mode.svg';
const themeColors = ['#778beb', '#cf6a87', '#f8a5c2', '#e77f67'];

export default function ThemeSelector() {
  const { changeColor, changeDisplay, mode } = useTheme();

  const toggle = () => {
    changeDisplay(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          src={dark_mode}
          alt='mode'
          onClick={toggle}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(25% )' }}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
