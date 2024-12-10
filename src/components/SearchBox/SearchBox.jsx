import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={filterName}
        onChange={handleChange}
        placeholder="Harry Potter"
      />
    </div>
  );
}
