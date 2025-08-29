import { Note } from '@/types/note';
import css from './NotePreview.module.css';

const NotePreview = ({ note }: { note: Note }) => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
        <p className={css.tag}>{note.tag}</p>
        <button type="button" className={css.backBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotePreview;
