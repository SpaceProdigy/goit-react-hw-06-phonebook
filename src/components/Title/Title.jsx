import css from './Title.module.css';
export default function Title({ text, fontSize, margin }) {
  return (
    <p style={{ fontSize, margin }} className={css.title}>
      {text}
    </p>
  );
}
