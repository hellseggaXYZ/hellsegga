import styles from './hero.module.css';
import localFont from 'next/font/local';

const yuan = localFont({
  src: '../../fonts/Yuan-Borderless.woff2',
  display: 'swap',
});

// dynamically assign classname based on which border the character is on
// s_matrix is matrix representing the string where each row of matrix is a line of text
function yuanText(s_matrix) {
  return s_matrix.map((row, rowIndex, matrix) => (
    <div key={rowIndex}>
      {row.split('').map((char, colIndex) => {
        const borderClass =  getBorderClass(rowIndex, colIndex, matrix);
        return (
          <span key={colIndex} className={borderClass}>
            {char}
          </span>
        );
      })}
    </div>
  ));
}

function getBorderClass(row, col, matrix) {
  const top = row === 0 || (col > matrix[row - 1].length - 1);
  const bottom = row === matrix.length - 1 || (col > matrix[row + 1].length - 1);
  const left = col === 0;
  const right = col === matrix[row].length - 1;

  let className = ""

  className += top ? styles.top : styles.notTop;
  className += ' '
  className += bottom ? styles.bottom : styles.notBottom;
  className += ' '
  className += left ? styles.left : styles.notLeft;
  className += ' '
  className += right ? styles.right : styles.notRight;

  return className;
}

export default function Hero() {
  const matrix = ['a creative', 'technologist', 'studio'];
  return (
    <div className={`${styles.heroContainer} ${yuan.className}`}>
      {yuanText(matrix)}
    </div>
  );
}
