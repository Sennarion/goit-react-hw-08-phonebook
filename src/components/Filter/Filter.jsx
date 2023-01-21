import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { FilterWrapper, Input } from './Filter.styled';
import { SubTitle } from 'components';

function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <SubTitle>Find contacts by name</SubTitle>
      <Input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </FilterWrapper>
  );
}

export default Filter;
