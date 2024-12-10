import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

const getVisibleItems = (items, filter) => {
  return items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactList() {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(selectNameFilter);
  const visibleItems = getVisibleItems(items, filter);
  return (
    <div>
      <ul className={css.list}>
        {visibleItems.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <Contact item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
